import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getSortParams ,setSelectedCategory}) => {

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

  const handleCheckbox = (e,category) =>{

    console.log('checkmark==>',category)

    setSelectedCategory(category?._id)

    setActiveSort(e)

  }



  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
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
