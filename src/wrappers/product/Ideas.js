import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseUrl from "../../BaseUrl";
import SectionTitle from "../../components/section-title/SectionTitle";
import SliderCard from "../../pages/OurProduct/SliderCard";
import { Link } from "react-router-dom";

const Ideas = () => {
  const [getidea, setGetidea] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    try {
      setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}categories`,
      };
      axios(config)
        .then(function (response) {
          setLoader(false);
          console.log(response, "ideasideas");
          setImgurl(response?.data?.imagePath);
          setGetidea(response?.data?.category);
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      setLoader(false);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message,
        animation: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  }, []);
  return (
    <>
      <SectionTitle
        titleText="Browse Ideas by Room"
        positionClass="text-center"
      />
      <Swiper
        slidesPerView={5}
        spaceBetween={8}
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          360: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
          },
          912: {
            slidesPerView: 5,
          },
        }}
        autoplay={true}
        grabCursor={true}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {getidea?.map((e) => {
          return (
            <>
              <SwiperSlide>
                <Link to={`/Photos/${e?.slug}`}>
                  <SliderCard
                    image={imgurl + e?.image}
                    productName={e?.name}
                    loader={loader}
                  />
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Ideas;
