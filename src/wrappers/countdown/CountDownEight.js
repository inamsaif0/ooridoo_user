import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";
import { useTranslation } from "react-i18next";

const CountDownEight = ({
  backgroundImage,
  dateTime,
  spaceTopClass,
  spaceBottomClass
}) => {

  const { t } = useTranslation();

  return (
    <div
      className={clsx("funfact-area funfact-valentine bg-img", spaceTopClass, spaceBottomClass)}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ms-auto me-auto">
            <div className="funfact-content text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <CountdownTimer date={dateTime} />
              </div>
              <div className="funfact-btn btn-only-round funfact-btn-red-2 btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {t("global.shop_now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownEight.propTypes = {
  backgroundImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownEight;
