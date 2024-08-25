import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseUrl from "../../BaseUrl";
import SectionTitle from "../../components/section-title/SectionTitle";
import SliderCard from "../../pages/OurProduct/SliderCard";

const Shop = () => {
  const [getshops, setGetshops] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const [loader, setLoader] = useState(false);
  console.log(loader, "props.loader 2");

  useEffect(() => {
    try {
      setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}shops`,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          setImgurl(response?.data?.imagePath);
          setGetshops(response?.data?.shop);
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    } catch (error) {
      setLoader(false);
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

  const myproduct =[
    {
    name:'iphone',
    image:'img1',
    users_count:'2'

  },
  {
    name:'iphone2',
    image:'http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'2'

  },
  {
    name:'iphone3',
    image:'	http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'22'

  },
  {
    name:'iphone4',
    image:'img1',
    users_count:'23'

  },
  {
    name:'iphone3',
    image:'	http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'22'

  },
  {
    name:'iphone3',
    image:'	http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'22'

  },
]

  return (
    <>
      <SectionTitle
        titleText="Shop by Department"
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
        {myproduct.map((e) => (
          <SwiperSlide key={e.id}>
            <Link to={`/product/${e.slug}`}>
              <SliderCard
                image={imgurl + e.image}
                productName={e.name}
                loader={loader}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Shop;
