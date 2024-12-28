import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FooterCopyright = ({ spaceBottomClass, colorClass }) => {

  const {t} = useTranslation()

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
          {t("footer.copyright.line_1")}
        </a>
        .<br /> {t("footer.copyright.line_2")}
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
