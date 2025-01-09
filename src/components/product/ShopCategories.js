import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { removeActiveSort, setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getSortParams ,setSelectedCategory, setsubcategoryId, selectedCategory, GetHandleSubCategoryid, subCategoryId}) => {

  const myCategory=[
      "Books & Media",
      "Health & Beauty",
      "Kids Corner",
      "Hajj & Umrah",
      'Home Decor',
      'Clothing'
  ]


  console.log('getSortParams==>',getSortParams)


  console.log('categories==>',categories)

  useEffect(() => {
    if (selectedCategory) {
      getSortParams("category", selectedCategory);
    }
  }, [selectedCategory]);

  const handleCheckbox = (e, category) => {
    if (selectedCategory === category?._id) {
      // If the clicked category is already selected, reset the subcategory state
      // setsubcategoryId(null);
      // setsubcategoryId(null);
      // GetHandleSubCategoryid([]);
      // setSelectedCategory("");
      // setActiveSort(e);
      // removeActiveSort()
      console.log("THis is already selected",category?._id)
      // setSelectedCategory(category?._id);
      // Fetch and display the main category products
      getSortParams("category", category?._id);
    } else {
      setSelectedCategory(category?._id);
      console.log("THis is not already selected",category?._id)
      setActiveSort(e);
    }
  };

  // const handleCheckbox = (e,category) =>{

  //   console.log('checkmark==>',category)

  //   setSelectedCategory(category?._id)

  //   setsubcategoryId("")

  //   setActiveSort(e)

  // }
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul 
            style={{
              maxHeight: "300px", // Limit the height for the scrollbar
              overflowY: "auto",  // Add vertical scrollbar when content exceeds the height
              paddingRight: "10px" // Adjust padding to avoid scrollbar overlapping
            }}
          >
            {/* <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li> */}
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      // onClick={e => {

                      //   console.log('e===>',e.target)
                      //   // getSortParams("category", category.name);
                      //   setActiveSort(e);
                      // }}
                      onClick={(e)=>{handleCheckbox(e,category)}}
                    >
                      {" "}
                      <span className="checkmark" /> {category?.title}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
