import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import CategoryfourSlider from "../../wrappers/category/CategoryFourSlider";
import CategoryFiveGrid from "../../wrappers/category/CategoryFiveGrid";
import SliderBanner from "../../wrappers/slider-banner/SliderBanner";

const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of Ooridoo"
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      > 

        
        {/* hero slider */}
        <HeroSliderOne />

{/* related product slider */}
{/* <RelatedProductSlider
  spaceBottomClass="pb-95"
  category={product.category[0]}
/> */}

        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}
        {/* <CategoryfourSlider /> */}
        {/* <CategoryFiveGrid /> */}
        {/* slider for new arrival */}
        <SliderBanner />
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
