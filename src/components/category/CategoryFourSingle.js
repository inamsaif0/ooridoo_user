import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseUrl from "../../BaseUrl";
import { useTranslation } from "react-i18next";

const CategoryFourSingle = ({ data, sliderClass }) => {


  const { t } = useTranslation()

  console.log('category==>data',data)

  let testimage='/assets/img/banner/book7.jpg'
  return (
    <div className="collection-product">
      <div className="collection-img">
        <Link to={`/shop/${data?._id}`}>
          {/* <img src={`${BaseUrl.baseurl + '/'+ data?.media[0]?.file}`} alt="" /> */}
          <img className="category_img" src={data.media ? `${BaseUrl.baseurl + '/' + data.media.file}` : testimage} /> 
        </Link>
      </div>
      <div className="collection-content text-center">
        {/* <span>{data.subtitle}</span> */}
        <h4>
          <Link to={`/shop/${data?._id}`}>{data.title}</Link>
        </h4>
        <Link
          // to={process.env.PUBLIC_URL + data.link}
          to={`/shop/${data?._id}`}
          className="collection-btn"
        >
          {t("global.shop_now")}
        </Link>
      </div>
    </div>
  );
};

CategoryFourSingle.propTypes = {
  data: PropTypes.shape({}),
  sliderClass: PropTypes.string
};

export default CategoryFourSingle;
