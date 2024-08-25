import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductShop";

const ProductGridList = ({ spaceBottomClass, ProductLenght }) => {
  return (
    <Fragment>
      <ProductGridListSingle
        spaceBottomClass={spaceBottomClass}
        ProductLenght={ProductLenght}
      />
    </Fragment>
  );
};

export default ProductGridList;
