import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import Swal from "sweetalert2";
import SliderCard from "../../pages/OurProduct/SliderCard";
import { Link } from "react-router-dom";

const LatestStory = () => {
  const [getstories, setGetstories] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);

    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}stories`,
      };
      axios(config)
        .then(function (response) {
          setLoader(false);
          console.log(response, "story");
          setImgurl(response?.data?.imagePath);
          setGetstories(response?.data?.story);
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

  const myproduct =[
    
    {
      id: "1",
      price:100,
      image: "/assets/img/image-slider/book7.jpg",
      subtitle: "2 Products",
      title: "Book & Media",
      link: "/shop/1"
    },
    {
      id: "2",
      image: "/assets/img/image-slider/book8.jpg",
      subtitle: "3 Products",
      title: "Health & Beauty",
      link: "/shop/2",
      price:100,

    },
    {
      id: "3",
      image: "/assets/img/image-slider/book10.jpg",
      subtitle: "6 Products",
      title: "Kids Corner",
      link: "/shop/3",
      price:100,
    },
    {
      id: "4",
      image: "/assets/img/image-slider/book5.jpg",
      subtitle: "5 Products",
      title: "Hajji & Umrah",
      link: "/shop/4",
      price:100,
    },
    {
      id: "5",
      image: "/assets/img/image-slider/book3.jpg",
      subtitle: "3 Products",
      title: "Home Decor",
      link: "/shop/5",
      price:100,
    },
    {
      id: "6",
      image: "/assets/img/image-slider/book7.jpg",
      subtitle: "3 Products",
      title: "Clothing",
      link: "/shop/6",
      price:100,
    }
]
  return (
    <>
    <div  className=" pt-100 pb-70" > 
      <SectionTitle titleText="Featured Products " positionClass="text-center m-4" />
      <Swiper
        slidesPerView={4}
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
        }}
        autoplay={false}
        grabCursor={true}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {myproduct
          ? myproduct?.map((e) => {
              return (
                <>
                  <SwiperSlide>
                    <Link to={`/shop/2`}>
                    {/* <Link to={`/Blog/${e?.slug}`}> */}
                      <SliderCard
                        image={imgurl + e?.image}
                        productName={e?.title}
                        description={e.price}
                        loader={loader}
                        className={
                          "text-start text-capitalize text-success mt-3"
                        }
                      />
                    </Link>
                  </SwiperSlide>
                </>
              );
            })
          : null}
      </Swiper>
      </div>
    </>
  );
};

export default LatestStory;
