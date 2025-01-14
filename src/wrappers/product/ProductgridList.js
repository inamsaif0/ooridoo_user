import React, { Fragment } from "react";
import ProductGridListSingle from "../../components/product/ProductShop";

const ProductGridList = ({ spaceBottomClass, ProductLenght ,products, categories }) => {


  return (
    <Fragment>
      <ProductGridListSingle
        products={products}
        spaceBottomClass={spaceBottomClass}
        ProductLenght={ProductLenght}
        categories={categories}
        
      />
    </Fragment>
  );
};

export default ProductGridList;
