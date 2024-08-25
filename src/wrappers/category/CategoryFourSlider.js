import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import categoryData from "../../data/category/category-four.json";
import CategoryFourSingle from "../../components/category/CategoryFourSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle.js";

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
  return (
    <div className={clsx("collections-area m-4", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="collection-wrap  pt-100 pb-70">
          <div className="collection-active">
          <SectionTitle
        titleText="Top Categories"
        positionClass="text-center"
      />
            {categoryData && (
              <Swiper options={settings}>
                {categoryData.map((single, key) => (
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
