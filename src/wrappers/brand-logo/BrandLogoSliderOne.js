import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import BaseUrl from "../../BaseUrl";
import SectionTitleFive from "../../components/section-title/SectionTitleFive";

const settings = {
  loop: false,
  autoplay: false,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 10
    },
    768: {
      slidesPerView: 4
    }
  }
};

const BrandLogoSliderOne = ({ spaceBottomClass, spaceTopClass, getCategoriesData ,GetHandleSubCategoryid }) => {


  const HandleSubCategory =(id) =>{

    console.log('ahmedid==>',id)
    GetHandleSubCategoryid(id)
  }
  // console.log('testcase1==>',getCategoriesData)

  return (
    <div className={clsx("brand-logo-area", spaceBottomClass, spaceTopClass)}>
      <div className="container">
        <div className="brand-logo-active">
          <h3 className="section-title-4">{getCategoriesData.length ? 'Sub Categories' : '' }</h3>
          {/* <SectionTitleFive titleText={'Sub Category'} /> */}
          {getCategoriesData[0]?.subcategories && (
            <Swiper options={settings}>
              {getCategoriesData[0]?.subcategories.map((single, key) => (
                <SwiperSlide key={key}>
                  <BrandLogoOneSingle
                    data={`${BaseUrl.baseurl}/${single?.subcategoryMedia?.file}`}
                    title={single?.title}
                    spaceBottomClass="mb-30"
                    onclick={()=>{HandleSubCategory(single._id)}}
                  />
                  {console.log('Single Subcategory Data:', single)}
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
  getCategoriesData: PropTypes.object.isRequired, // Ensure getCategoriesData is passed
};

export default BrandLogoSliderOne;
