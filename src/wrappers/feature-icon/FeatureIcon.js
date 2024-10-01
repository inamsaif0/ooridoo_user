import PropTypes from "prop-types";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/grid";
const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  const [getservices, setGetservices] = useState([]);
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}services`,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          setGetservices(response?.data?.service);
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
  console.log(getservices);

  const myproduct =[
    {
    name:'iphone22',
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

  }
]

  return (
    <>
      <div className={clsx("support-area", spaceTopClass, spaceBottomClass)}>
        <div className="container ">
          <SectionTitle
            titleText="Popular Services"
            positionClass="text-center"
          />
          <div className="row mt-4">
            <Swiper
              slidesPerView={4}
              grabCursor={true}
              spaceBetween={30}
              autoplay={true}
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
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              speed={1000}
              className="mySwiper"
            >
              {myproduct ? (
                myproduct?.map((e) => (
                  <SwiperSlide>
                    <div className="support-wrap mb-30">
                      <div className="support-icon">
                        <img
                          className="animated w-100"
                          src={
                            e.image
                          }
                          alt={e.image}
                          width={50}
                          height={42}
                        />
                      </div>
                      <div className="support-content">
                        <h5>{e.name}</h5>
                        <p>{`${e.users_count} Open Services`}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <h5>No Service Found</h5>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FeatureIcon;
