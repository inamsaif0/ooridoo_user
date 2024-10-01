import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import categoryData from "../../data/category/category-four.json";
import CategoryFourSingle from "../../components/category/CategoryFourSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle.js";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import BaseUrl from "../../BaseUrl.js";

// swiper slider settings
const settings = {
  loop: false,
  spaceBetween: 30,
  autoplay: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
};



const CategoryfourSlider = ({ spaceTopClass, spaceBottomClass }) => {

  const [getCategoryData, setGetCategoryData] = useState([]);
  useEffect(() => {
    // setLoader(true);

    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/api/categories/get`,
      };
      axios(config)
        .then(function (response) {
          // setLoader(false);
          console.log(response, "story");
          // setImgurl(response?.data?.imagePath);
          setGetCategoryData(response?.data?.data?.result);
          // setGetstories(response?.data?.story);
        })
        .catch((error) => {
          // setLoader(false);

          console.log(error);
        });
    } catch (error) {
      console.log(error);
      // setLoader(false);

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
    <div className={clsx("collections-area m-4", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="collection-wrap  pt-100 pb-70">
          <div className="collection-active">
          <SectionTitle
        titleText="Top Categories"
        positionClass="text-center"
      />
            {getCategoryData && (
              <Swiper options={settings}>
                {getCategoryData.map((single, key) => (
                  <SwiperSlide key={key}>
                    <CategoryFourSingle
                      data={single}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryfourSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CategoryfourSlider;
