import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass, role }) => {
  return (
    <div className={clsx(logoClass)}>
      <Link to={process.env.PUBLIC_URL + role === 'professional' ? "/professional/home" : "/"}>
        <img
          alt="logo"
          src={process.env.PUBLIC_URL + imageUrl}
          // className={"w-100"}
          // style={{width:'50%'}}
          style={{width:'60%',height:'60%'}}
        />
      </Link>
    </div>
  );
};

// width: 60%;
//     height: 60%;
//     /* height: 100px; */
//     /* width: 200px;

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
