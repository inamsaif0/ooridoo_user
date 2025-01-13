import PropTypes from "prop-types";
import { setActiveLayout } from "../../helpers/product";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { setSelectedCategory } from "../../store/slices/selectedCategory-slice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
  setSelectedLanguage,
  layout,
  categories,
  selectedCategory,
  getSortParams,
  authors,
  currentData
}) => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("count product",currentData)

  const baseDropdown = [
    {value: "default", label: "Default"}
  ]

  const languageDropdown = [
    { value: "default", label: t("global.filter_by_language") },
    { value: "arabic", label: "Arabic" },
    { value: "english", label: "English" },
    { value: "korean", label: "Korean" }
  ];

  const sortDropdown = [
    {value: "default", label: t("global.sort_by_price")},
    {value: "priceLowToHigh", label: "Price: Low to High"},
    {value: "priceHighToLow", label: "Price: High to Low"}
  ]

  // const authorsDropdown = authors.map(author => ({
  //   value: author,
  //   label: author
  // }));

  // const authorsFinalDropdown = [...baseDropdown, ...authorsDropdown]

  const authorsDropdown = [
    {value: "default", label: t("global.filter_by_author")},
    {value: "Jamshed", label: "Jamshed"},
    {value: "Salman Ahmed", label: "Salman Ahmed"},
  ]

  // const isBook = !!categories.find(category => category.title.toLowerCase().includes("books"));

  const category = categories.find(category => category._id == selectedCategory);
  const bookTitle = category?.title

  const filterProducts = currentData?.filter((product) => product.category === selectedCategory)

  const count = filterProducts?.length

  // console.log("count product",typeof(productCount))

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Update layout based on screen size
      if (screenWidth < 600) {
        getLayout("grid two-column")
      } else {
        getLayout("grid three-column")
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the listener on unmount
    };
  }, []);

  useEffect(() => {
    if (location.state?.selectedCategory) {
      dispatch(setSelectedCategory(location.state.selectedCategory));
    }
  }, [location.state, dispatch]);


  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        {(bookTitle?.toLowerCase().includes("books") && count !== 0) &&  <div className="shop-select mb-4 mb-sm-0">
          <select
            onChange={e => setSelectedLanguage(e.target.value)}
          >
            {languageDropdown.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>}
        <div className="shop-select mb-4 mb-sm-0">
          <select
            onChange={e => getSortParams("filterSort",e.target.value)}
          >
            {sortDropdown.map((sort) => (
              <option key={sort.value} value={sort.value}>
                {sort.label}
              </option>
            ))}
          </select>
        </div>
        {(bookTitle?.toLowerCase().includes("books") && count !== 0) && <div className="shop-select mb-4 mb-sm-0">
          <select
            onChange={e => getSortParams("authorname",e.target.value)}
          >
            {authorsDropdown.map((author) => (
              <option key={author.value} value={author.value}>
                {author.label}
              </option>
            ))}
          </select>
        </div>}
        {/* <p>
          {t("global.showing_of_results.line1")} {sortedProductCount} {t("global.showing_of_results.line2")} {productCount} {t("global.showing_of_results.line3")}
        </p> */}
      </div>

      <div className="shop-tab">
        <button
          onClick={e => {
            getLayout("grid two-column"); // Set to show 2 cards on small screens
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" style={{color: `${layout === "grid two-column" ? "#e7b833" : "#606060"}`}} />
        </button>
        <button
          onClick={e => {
            getLayout("grid three-column"); // Set to show 1 cards on medium and larger screens
            setActiveLayout(e);
          }}
        >
          <i className='fa fa-th' style={{color: `${layout === "grid three-column" ? "#e7b833" : "#606060"}`}} />
        </button>
        {/* Uncomment if needed
        <button
          onClick={e => {
            getLayout("list");
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-list-ul" />
        </button> */}
      </div>
    </div>
  );
};

ShopTopAction.propTypes = {
  getFilterSortParams: PropTypes.func,
  getLayout: PropTypes.func,
  productCount: PropTypes.number,
  sortedProductCount: PropTypes.number,
  setSelectedLanguage: PropTypes.func // Added missing prop type
};

export default ShopTopAction;
