import PropTypes from "prop-types";
import { setActiveLayout } from "../../helpers/product";
import { useEffect, useState } from "react";

const ShopTopAction = ({
  getLayout,
  getFilterSortParams,
  productCount,
  sortedProductCount,
  setSelectedLanguage,
  layout
}) => {
  const languageDropdown = [
    { value: "arabic", label: "Arabic" },
    { value: "english", label: "English" },
    { value: "korean", label: "Korean" }
  ];


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


  return (
    <div className="shop-top-bar mb-35">
      <div className="select-shoing-wrap">
        <div className="shop-select">
          <select
            onChange={e => setSelectedLanguage(e.target.value)}
          >
            {languageDropdown.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        <p>
          Showing {sortedProductCount} of {productCount} result
        </p>
      </div>

      <div className="shop-tab">
        <button
          onClick={e => {
            getLayout("grid two-column"); // Set to show 2 cards on small screens
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th-large" />
        </button>
        <button
          onClick={e => {
            getLayout("grid three-column"); // Set to show 1 cards on medium and larger screens
            setActiveLayout(e);
          }}
        >
          <i className="fa fa-th" />
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
