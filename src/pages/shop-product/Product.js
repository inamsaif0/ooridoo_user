import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import { useTranslation } from "react-i18next";

const Product = () => {
  let { pathname } = useLocation();
  const {t} = useTranslation()

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of Ooridoo"
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("shop.product_page.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("shop.product_page.breadcrumb.shop_product"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
        />

        {/* product description tab */}
        <ProductDescriptionTab spaceBottomClass="pb-90" />

        {/* related product slider */}
        <RelatedProductSlider spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
