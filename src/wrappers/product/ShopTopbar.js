import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ShopTopAction from "../../components/product/ShopTopAction";

const ShopTopbar = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
  setSelectedLanguage,
  layout,
  categories,
  selectedCategory,
  getSortParams,
  authors
}) => {
  return (
    <Fragment>
      {/* shop top action */}
      <ShopTopAction
        layout={layout}
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
        setSelectedLanguage={setSelectedLanguage}
        categories={categories}
        selectedCategory={selectedCategory}
        getSortParams={getSortParams}
        authors={authors}
      />
    </Fragment>
  );
};

ShopTopbar.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number
};

export default ShopTopbar;
