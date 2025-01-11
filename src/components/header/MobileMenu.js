import React, { useEffect, useState } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
import clsx from "clsx";
// import MobileWidgets from "./sub-components/MobileWidgets";

const MobileMenu = ({ iconWhiteClass, }) => {


  const { t } = useTranslation();
  const navigate = useNavigate()
  const Token = localStorage.getItem("Token")
  const UserId = localStorage.getItem("UserId")
  console.log('Token==>', Token)
  console.log('UserId==>', UserId)

  document.addEventListener("click", (e) => {
    document.querySelectorAll(".header-icon-dropdown").forEach((menu) => {
      if (!menu.previousElementSibling.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  });

  const handleClick = (e) => {
    document.querySelectorAll(".header-icon-dropdown").forEach((menu) => {
      if (menu !== e.currentTarget.nextSibling) {
        menu.classList.remove("active");
      }
    });
    e.currentTarget.nextSibling.classList.toggle("active");
  };



  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const token = JSON.parse(localStorage.getItem("Token"));
      try {
        const response = await axios.get(`${BaseUrl.baseurl}/api/user/get-all-users`, {
          headers: {
            token: token,
            // "Accept": "application/json",
            // 'Content-Type': 'multipart/form-data'
          },
        });
        if (response.data.status === true) {
          const users = response.data.data;
          const currentUser = users.find(user => user._id === JSON.parse(UserId))
          setProfileImage(currentUser.profileImage.file)
        } else {
          console.error("Error fetching profile image:", response);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');

    navigate('/')

    console.log("Logged out successfully");
  };



  document.addEventListener("click", (e) => {
    document.querySelectorAll(".header-icon-dropdown").forEach((menu) => {
      if (!menu.previousElementSibling.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  });


  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  // const { wishlistItems } = useSelector((state) => state.wishlist);
  // const { cartItems } = useSelector((state) => state.cart);



  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
      <button
        className="offcanvas-menu-close"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="pe-7s-close"></i>
      </button>
      <div className="offcanvas-wrapper">

        <div className="offcanvas-inner-content">
        <div className={clsx("header-right-wrap", iconWhiteClass)}>
            {/* Large Screen User Icon */}
            <div className="same-style account-setting d-none d-lg-block p-0">
              <button
                className="account-setting-active"
                onClick={e => handleClick(e)}
              // style={{ border: "1px solid red" }}
              >
                {!UserId ?
                  (<i className="pe-7s-user-female" style={{ fontSize: "35px" }} />)
                  :
                  (<img
                    src={`${BaseUrl.baseurl}/${profileImage}`}
                    style={{ width: "30px", height: "30px", borderRadius: "15px", objectFit: "cover" }}
                  />)
                }
              </button>
              <div className="account-dropdown header-icon-dropdown mt-lg-n5 mt-md-n2 mt-sm-0">
                <ul>
                  {Token == null ? (
                    <>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/login"}>{t("global.login")}</Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/signup"}>{t("global.signup")}</Link>
                      </li>
                    </>
                  ) : null}

                  {Token != null ? (
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={() => handleLogout()}
                    >
                      {t("global.logout")}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>

            {/* Small Screen User Icon */}
            <div className="same-style account-setting d-block d-lg-none p-0">
              <button
                className="account-setting-active"
                onClick={(e) => handleClick(e)}
                style={{ margin: "0px" }}
              >
                {!UserId ?
                  (<i className="pe-7s-user-female" style={{ fontSize: "35px" }} />)
                  :
                  (<img
                    src={`${BaseUrl.baseurl}/${profileImage}`}
                    style={{ width: "30px", height: "35px", objectFit: "cover" }}
                  />)
                }
              </button>
              <div className="account-dropdown header-icon-dropdown mt-lg-n5 mt-md-n2 mt-sm-0">
                <ul>
                  {Token == null ? (
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/login"}>{t("global.login")}</Link>
                    </li>
                  ) : null}

                  <li>
                    <Link to={process.env.PUBLIC_URL + "/signup"}>{t("global.signup")}</Link>
                  </li>
                  {Token != null ? (
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={() => handleLogout()}
                    >
                      {t("global.logout")}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>

          {/* mobile search */}
          {/* <MobileMenuSearch /> */}

          {/* mobile nav menu */}
          <MobileNavMenu />

          {/* mobile language and currency */}
          {/* <MobileLangCurChange /> */}

          {/* mobile widgets */}
          {/* <MobileWidgets /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
