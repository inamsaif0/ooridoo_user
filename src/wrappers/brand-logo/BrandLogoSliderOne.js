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
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

const BrandLogoSliderOne = (
  { spaceBottomClass, 
    spaceTopClass, 
    getCategoriesData, 
    GetHandleSubCategoryid, 
    setsubcategoryId, 
    subCategoryId,
    setChildSubCategory,
    setReChildSubCategory 
  }) => {
  const [currentSubcategories, setCurrentSubcategories] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  console.log('subCategoryId==>',subCategoryId)

  useEffect(() => {
    // Initialize with level 0 subcategories
    if (getCategoriesData.length && getCategoriesData[0].subcategoryId) {
      setCurrentSubcategories(getCategoriesData[0].subcategoryId);
    }
  }, [getCategoriesData]);

  const handleSubCategoryClick = (subcategory) => {
    setClickCount(clickCount + 1);
    if (subcategory.subcategoryId && subcategory.subcategoryId.length > 0) {
      // Update to display clicked subcategory's children
      setCurrentSubcategories(subcategory.subcategoryId);
    } 
    if(clickCount === 0) { 
    GetHandleSubCategoryid(subcategory._id);
    } else if(clickCount === 1) {
      setChildSubCategory(subcategory?._id);
    } else if(clickCount === 2) { 
      setReChildSubCategory(subcategory?._id);
    }
  };

  // const resetsubcategory = () => {
  //   if (getCategoriesData.length && getCategoriesData[0].subcategoryId) {
  //     setCurrentSubcategories(getCategoriesData[0].subcategoryId);
  //   }
  //   setsubcategoryId(null);
  // };

  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <div className="container">
        <div className="brand-logo-active">
          {/* <button onClick={resetsubcategory}>reset subcategory</button> */}
          <h3 className="section-title-4">
            {currentSubcategories.length ? "Sub Categories" : ""}
          </h3>
          {currentSubcategories.length > 0 && (
            <Swiper options={settings}>
              {currentSubcategories.map((subcategory, index) => (
                <SwiperSlide key={index} className="brand-logo-slide "> 
                  <BrandLogoOneSingle
                    data={`${BaseUrl.baseurl}/${subcategory.media?.file}`}
                    title={subcategory.title}
                    spaceBottomClass="mb-30"
                    onclick={() => handleSubCategoryClick(subcategory)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  getCategoriesData: PropTypes.array.isRequired,
  GetHandleSubCategoryid: PropTypes.func.isRequired,
};

export default BrandLogoSliderOne;
