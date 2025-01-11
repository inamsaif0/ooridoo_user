import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../../helpers/language-selector";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>
            {t("Home")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Shop")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("Contact us")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("Categories")}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Books & Media")}
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Health & Beauty")}
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Health & Beauty")}
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Hajj & Umrah")}
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Home Decor")}
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                {t("Clothing")}
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Brands")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Events")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop/1"}>
            {t("Offers")}
          </Link>
        </li> */}
        <li className="mt-5">
        </li>
        {/* <li className="mt-5">
          <LanguageSelector />
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
