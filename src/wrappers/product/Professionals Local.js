import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import Swal from "sweetalert2";
import SliderCard from "../../pages/OurProduct/SliderCard";

const Professionals_Local = () => {
  const [nearyou, setNearyou] = useState([]);
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}services`,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          setImgurl(response?.data?.imagePath);
          setNearyou(response?.data?.service);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
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
        titleText="Contact a Local Professional"
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
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        autoplay={true}
        grabCursor={true}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {nearyou
          ? nearyou?.map((e) => {
              return (
                <>
                  <SwiperSlide>
                    <SliderCard
                      image={imgurl + e?.image}
                      productName={e?.name}
                    />
                  </SwiperSlide>
                </>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Professionals_Local;
