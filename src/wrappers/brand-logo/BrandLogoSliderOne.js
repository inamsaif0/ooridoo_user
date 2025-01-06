import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import BaseUrl from "../../BaseUrl";

const settings = {
  loop: false,
  autoplay: false,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
};

const BrandLogoSliderOne = ({
  spaceBottomClass,
  spaceTopClass,
  getCategoriesData,
  GetHandleSubCategoryid,
  setsubcategoryId,
  subCategoryId,
  setChildSubCategory,
  setReChildSubCategory,
  selectedCategory,
}) => {
  const [currentSubcategories, setCurrentSubcategories] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const currentCategory = getCategoriesData.find(
      (category) => category._id === selectedCategory
    );
    if (currentCategory?.subcategoryId?.length) {
      setCurrentSubcategories(currentCategory.subcategoryId);
    } else {
      setCurrentSubcategories([]);
    }
    // GetHandleSubCategoryid([]);
    setClickCount(0); // Reset click count on category change
  }, [getCategoriesData, selectedCategory]);

  const handleSubCategoryClick = (subcategory) => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount === 1) {
        GetHandleSubCategoryid(subcategory._id);
        setChildSubCategory([]);
        setReChildSubCategory([]);
      } else if (newCount === 2) {
        setChildSubCategory(subcategory?._id);
        setReChildSubCategory([]);
      } else if (newCount === 3) {
        setReChildSubCategory(subcategory?._id);
      }

      return newCount;
    });

    if (subcategory.subcategoryId?.length) {
      setCurrentSubcategories(subcategory.subcategoryId);
    }
  };

  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <div className="container">
        <div className="brand-logo-active">
          {currentSubcategories.length > 0 && (
            <>
              <h3 className="section-title-4">Sub Categories</h3>
              <Swiper options={settings}>
                {currentSubcategories.map((subcategory) => (
                  <SwiperSlide
                    key={subcategory._id}
                    className="brand-logo-slide"
                  >
                    <BrandLogoOneSingle
                      data={`${BaseUrl.baseurl}/${subcategory.media?.file}`}
                      title={subcategory.title}
                      spaceBottomClass="mb-30"
                      onclick={() => handleSubCategoryClick(subcategory)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  getCategoriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  GetHandleSubCategoryid: PropTypes.func.isRequired,
  setsubcategoryId: PropTypes.func,
  subCategoryId: PropTypes.string,
  setChildSubCategory: PropTypes.func.isRequired,
  setReChildSubCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default BrandLogoSliderOne;
