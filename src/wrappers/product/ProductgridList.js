import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductShop";

const ProductGridList = ({ spaceBottomClass, ProductLenght ,products }) => {


  return (
    <Fragment>
      <ProductGridListSingle
        products={products}
        spaceBottomClass={spaceBottomClass}
        ProductLenght={ProductLenght}
      />
    </Fragment>
  );
};

export default ProductGridList;
