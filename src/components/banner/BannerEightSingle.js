import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerEightSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content banner-pink">
        <h3 className="text-white mb-4" >{data.title}</h3>
        {/* <h4 className="text-white">
            {data.subtitle} <span className="text-black" >{data.price}</span>
          </h4> */}
        <Link to={process.env.PUBLIC_URL + data.link} style={{ color: "#FFC722", border: "1px solid #FFC722" }} >
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerEightSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BannerEightSingle;
