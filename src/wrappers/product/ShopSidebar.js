import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
 
  getIndividualColors,

} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
import { useState, useEffect } from "react";


const ShopSidebar = ({ products, getSortParams, sideSpaceClass,setsubcategoryId ,selectedCategory ,setSelectedCategory, searchQuery,setSearchQuery, GetHandleSubCategoryid, subCategoryId}) => {

  

  // console.log('MyProductCategory',MyProductCategory)
  console.log('products==>',products)

  // const uniqueCategories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      {/* <ShopSearch /> */}
      <ShopSearch setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>

      {/* filter by categories */}
      {screenWidth > '576' && <ShopCategories
        GetHandleSubCategoryid={GetHandleSubCategoryid}
        categories={products}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        getSortParams={getSortParams}
        setsubcategoryId={setsubcategoryId}
        subCategoryId={subCategoryId}
      />}

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
