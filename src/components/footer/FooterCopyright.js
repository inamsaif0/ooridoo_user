import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const FooterCopyright = ({ spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
      <div>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={"/assets/img/logo/logoIslamic.jpeg"} className={"w-100"} />
        </Link>
      </div>
      <p className="mt-5"> 
        &copy; {new Date().getFullYear()}{" "}
        <a
          // href="https:// HnhTechSolutions.com"
          href="/#/"
          // rel="noopener noreferrer"
          // target="_blank"
        >
          Ooridoo
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
