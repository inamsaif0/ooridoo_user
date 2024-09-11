import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerOneSingle = ({ data, spaceBottomClass }) => {
  return (
      <div className={clsx("single-banner", spaceBottomClass)}>
        <Link to={process.env.PUBLIC_URL + 'shop/1'}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div className="banner-content">
          <h3 className="text-white" >{data.title}</h3>
          {/* <h4 className="text-white">
            {data.subtitle} <span className="text-warning" >{data.price}</span>
          </h4> */}
          <Link to={process.env.PUBLIC_URL + 'shop/1'}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BannerOneSingle;
