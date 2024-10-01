import { Fragment } from "react";
import SEO from "../../../components/seo";
import ProfessionalLayout from "../../../layouts/professionalLayout";
import HeroSliderOne from "../../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../../wrappers/product/TabProduct";
import BlogFeatured from "../../../wrappers/blog-featured/BlogFeatured";

const ProfessionalHome = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Professional Home"
        description="Professional home of Ooridoo"
      />
      <ProfessionalLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />


        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
            
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </ProfessionalLayout>
    </Fragment>
  );
};

export default ProfessionalHome;
