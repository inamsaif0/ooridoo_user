import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {

  const {t} = useTranslation();

  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          {/* <h5>Who Are We</h5> */}
          <h1>{t("about_us.section_with_text.heading")}</h1>
          <p>
          {t("about_us.section_with_text.line1")}
          <br/>
          <br/>
          {t("about_us.section_with_text.line2")}
          <br/>
          <br/>
          {t("about_us.section_with_text.line3")}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
