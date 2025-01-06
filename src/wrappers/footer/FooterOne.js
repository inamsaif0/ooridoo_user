import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import { useTranslation } from "react-i18next";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {

  const {t} = useTranslation()

  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass)}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logo.png"
              spaceBottomClass="mb-30"
            />
          </div>
          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>{t("footer.about.line_1")}</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>{t("footer.about.line_2")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>{t("footer.about.line_3")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>{t("footer.about.line_4")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>{t("footer.about.line_5")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"}`}
          >
            <div className={`${sideMenu ? "footer-widget mb-30 ml-95" : "footer-widget mb-30 ml-50"}`}>
              <div className="footer-title">
                <h3>{t("footer.useful_links.line_1")}</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>{t("footer.useful_links.line_2")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/refund-policy"}>{t("footer.useful_links.line_3")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>{t("footer.useful_links.line_4")}</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "#/"}>{t("footer.useful_links.line_5")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"}`}
          >
            <div className={`${sideMenu ? "footer-widget mb-30 ml-145" : "footer-widget mb-30 ml-75"}`}>
              <div className="footer-title">
                <h3>{t("footer.follow_us.line_1")}</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="//www.facebook.com" target="_blank" rel="noopener noreferrer">{t("footer.follow_us.line_2")}</a>
                  </li>
                  <li>
                    <a href="//www.twitter.com" target="_blank" rel="noopener noreferrer">{t("footer.follow_us.line_3")}</a>
                  </li>
                  <li>
                    <a href="//www.instagram.com" target="_blank" rel="noopener noreferrer">{t("footer.follow_us.line_4")}</a>
                  </li>
                  <li>
                    <a href="//www.youtube.com" target="_blank" rel="noopener noreferrer">{t("footer.follow_us.line_5")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-3 col-sm-8" : "col-lg-4 col-sm-6"}`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
        <hr />
        {/* Company Information Section */}
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="footer-widget mb-30">
              <div className="footer-info flex-wrap " style={{ display: "flex", flexWrap: "wrap" }}>
                <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, textAlign: "center" , flexWrap: "wrap" }}>
                  <li style={{ marginRight: "10px" }}>Ooridoo</li>
                  <li style={{ marginRight: "10px" }}>|</li>
                  <li style={{ marginRight: "10px" }}>Fardeheb Jalil Tawfiq</li>
                  <li style={{ marginRight: "10px" }}>|</li>
                  <li style={{ marginRight: "10px" }}>508-13-09975</li>
                  <li style={{ marginRight: "10px" }}>|</li>
                  <li style={{ marginRight: "10px" }}>{t("contact.address.line2")}</li>
                  <li style={{ marginRight: "10px" }}>|</li>
                  <li style={{ marginRight: "10px" }}>010-3322-9798</li>
                  <li style={{ marginRight: "10px" }}>|</li> 
                  <li>
                    <a href="mailto:jfardeheb@yahoo.fr">jfardeheb@yahoo.fr</a>
                  </li>
                  <li style={{ marginRight: "10px" }}>|</li>
                  <li>
                    <a href="http://www.ooridoo.com" target="_blank" rel="noopener noreferrer">
                      www.ooridoo.com
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
