import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-seven.json";
import HeroSliderSevenSingle from "../../components/hero-slider/HeroSliderSevenSingle.js";
import axios from 'axios';
import BaseUrl from '../../BaseUrl.js';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderSeven = () => {

  const [getCategoriesData, setGetCategoriesData] = useState([]);
// categories data
useEffect(() => {
  try {
    var config = {
      method: "get",
      // url: `${BaseUrl.baseurl}products?shop=${slug}`,
       url: `${BaseUrl.baseurl}/api/categories/get`,
    };
    axios(config)
      .then(function (response) {
        // console.log(response?.data?.data?.result, "CategoryData");
        // setImgurl(response?.data?.subcatoryimagePath);
        setGetCategoriesData(response?.data?.data?.result)
        // setGetProductData(response?.data?.data?.result);
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
    <div className="slider-area res-mrg-md-mb">
      <div className="slider-active-3">
        {getCategoriesData && (
          <Swiper options={params}>
            {getCategoriesData?.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderSevenSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderSeven;
