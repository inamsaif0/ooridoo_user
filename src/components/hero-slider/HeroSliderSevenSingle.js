import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseUrl from "../../BaseUrl";

const HeroSliderSevenSingle = ({ data }) => {

  console.log('data==>',data)
  
  let subtitle ="Book Shop <br /> Find Your Book"
  return (
    <div
      className="single-slider-2 slider-height-18 d-flex align-items-center slider-overly-res bg-cover"
      style={{
        // backgroundImage: `url(${process.env.PUBLIC_URL + data.image})`,
        backgroundImage:`url(${BaseUrl.baseurl + '/'+ data?.media[0]?.file})`,
       backgroundPosition:'center',
       backgroundSize:'cover'
      }}
    >
      <div className="slider-content-7 slider-animated-1 ml-70">
        <h3 className="animated text-warning">{data.title}</h3>
        <h1
          className="animated text-white"
          // dangerouslySetInnerHTML={{ __html: data.subtitle }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        <div className="slider-btn-9 btn-hover">
          {/* <Link className="animated" to={data.url}> */}
          <Link className="animated  btn-lg btn-warning btn btn-primary" 
          // to={data.url}
          to={`/shop/${data?._id}`}
          
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

HeroSliderSevenSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderSevenSingle;
