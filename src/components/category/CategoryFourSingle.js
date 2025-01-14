import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../store/slices/selectedCategory-slice";

const CategoryFourSingle = ({ data, sliderClass }) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation()
    const selectedCategory = useSelector((state) => state.selectedCategoryId.selectedCategory);



  console.log('category==>data',data)

  const handleCatgory = (e,category) => { 
        // Navigate to the new URL
        navigate(`${process.env.PUBLIC_URL}/shop/1`, {
          state: { selectedCategory: category?._id }
        });
    
          if (selectedCategory === category?._id) {
            console.log("Already Selected");
            // setActiveSort(e)
          } else {
            dispatch(setSelectedCategory(category?._id));
            // setActiveSort(e)
          }
      
      };

  let testimage='/assets/img/banner/book7.jpg'
  return (
    <div className="collection-product">
      <div className="collection-img" style={{cursor: "pointer"}} onClick={() => handleCatgory(selectedCategory)}>
        {/* <Link to={``}> */}
          {/* <img src={`${BaseUrl.baseurl + '/'+ data?.media[0]?.file}`} alt="" /> */}
          <img 
          className="category_img" 
          src={data.media ? `${BaseUrl.baseurl + '/' + data.media.file}` : testimage} 
          style={{height: "400px"}}
          /> 
        {/* </Link> */}
      </div>
      <div className="collection-content text-center">
        {/* <span>{data.subtitle}</span> */}
        <h4 onClick={() => handleCatgory(selectedCategory)} style={{cursor: "pointer"}}>
          {/* <Link to={`/shop/${data?._id}`}>{data.title}</Link> */}
          {data.title}
        </h4>
        <div
          // to={process.env.PUBLIC_URL + data.link}
          onClick={() => handleCatgory(selectedCategory)}
          className="collection-btn"
          style={{cursor: "pointer"}}
        >
          {t("global.shop_now")}
        </div>
      </div>
    </div>
  );
};

CategoryFourSingle.propTypes = {
  data: PropTypes.shape({}),
  sliderClass: PropTypes.string
};

export default CategoryFourSingle;
