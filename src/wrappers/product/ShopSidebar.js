import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
 
  getIndividualColors,

} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";


const ShopSidebar = ({ products, getSortParams, sideSpaceClass,setsubcategoryId ,selectedCategory ,setSelectedCategory, searchQuery,setSearchQuery, GetHandleSubCategoryid, subCategoryId}) => {

  

  // console.log('MyProductCategory',MyProductCategory)
  console.log('products==>',products)

  // const uniqueCategories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);
 

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      {/* <ShopSearch /> */}
      <ShopSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>

      {/* filter by categories */}
      <ShopCategories
        GetHandleSubCategoryid={GetHandleSubCategoryid}
        categories={products}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        getSortParams={getSortParams}
        setsubcategoryId={setsubcategoryId}
        subCategoryId={subCategoryId}
      />

      {/* filter by color */}
      {/* <ShopColor colors={uniqueColors} getSortParams={getSortParams} /> */}

     
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
