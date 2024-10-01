import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import ServicesSlider from "../../components/services";

const ProfessionalServices = (spaceTopClass, spaceBottomClass, bgColorClass) => {
  return (
    <>
      <div
        className={clsx(
          "product-area",
          spaceTopClass,
          spaceBottomClass,
          bgColorClass
        )}
      >
        <div className="container mt-5">

          <ServicesSlider title={'Popular Services'}/>
          <ServicesSlider title={'Home Design & Remodeling'}/>
          <ServicesSlider title={'Outdoor & Garden'}/>
          <ServicesSlider title={'Home Improvement'}/>
          <ServicesSlider title={'Home Services'}/>
          <ServicesSlider title={'Cleaning Services'}/>
          {/* <SectionTitle titleText="Browse All Professionals" positionClass="text-center"/> */}
        </div>
      </div>
      <style>
        { }
      </style>
    </>
  );
};
ProfessionalServices.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};
export default ProfessionalServices;
