import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useEffect, useState } from "react";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  const [getidea, setGetidea] = useState([]);
  const [getprofessional, setGetprofessional] = useState([]);
  const [getshop, setGetShop] = useState([]);
  const [getCategories, setgetCategories] = useState([]);

  const { slug } = useParams();
  useEffect(() => {
    try {
      var config = {
        method: "get",
        // url: `${BaseUrl.baseurl}getheader`,
        url:`${BaseUrl.baseurl}/api/categories/get`
      };
      axios(config)
        .then(function (response) {
          console.log(response?.data?.data?.result, "setGetheader");
          setgetCategories(response?.data?.data?.result);
          // setGetprofessional(response?.data?.professionalCategory);
          // setGetShop(response?.data?.shop);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message,
        animation: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  }, [slug]);

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/`}
                          >
                            Home
                           
                          </Link>
                        </li>

                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                            Shop
                           
                          </Link>
                        </li>

                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/contact`}
                          >
                            Contact us
                           
                          </Link>
                        </li>
                        <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
              {t("Categories")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              {/* part one */}
              <li>
                <ul>
                  {/* <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                      {t("Books & Media")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                      {t("Health & Beauty")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                      {t("Health & Beauty")}
                    </Link>
                  </li> */}
                   {getCategories?.slice(0, 2).map((category, index) => (
        <li key={index}>
          <Link to={`${process.env.PUBLIC_URL}/shop/${category?._id}`}>
            {t(category.title)}
          </Link>
        </li>
      ))}
                </ul>
              </li>

              {/* part two */}
              <li>
                <ul>
                  {/* <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                      {t("Hajj & Umrah")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/2"}>
                      {t("Home Decor")}
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shop/3"}>
                      {t("Clothing")}
                    </Link>
                  </li> */}

{getCategories?.slice(2, 4).map((category, index) => (
        <li key={index}>
          <Link to={`${process.env.PUBLIC_URL}/shop/${category?._id}`}>
            {t(category.title)}
          </Link>
        </li>
      ))}
                </ul>
              </li>

               {/* image */}
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={process.env.PUBLIC_URL + "/shop/2"}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/banner/book1.jpg"
                        }
                        height={240}
                        width={240}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </li>


                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                            Brands
                           
                          </Link>
                        </li>

                        {/* <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                            Events
                           
                          </Link>
                        </li>

                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                           Offers
                           
                          </Link>
                        </li> */}
          {/* <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {t("Get Ideas")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>

            <ul className="mega-menu mega-menu-padding">
              {getidea.map((e) => {
                return (
                  <>
                    <li>
                      <ul>
                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/Photos/${e?.slug}`}
                          >
                            {e?.name}
                          </Link>
                        </li>
                        {e?.sub_categories?.map((e) => {
                          return (
                            <>
                              <li>
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    `/Photos/Details/${e?.slug}`
                                  }
                                >
                                  {e?.name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>
          <li>
            <Link
              to={process.env.PUBLIC_URL + "/professional/findProfessional"}
            >
              {" "}
              {t("Find Professionals")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              {getprofessional.map((e) => {
                return (
                  <>
                    <li>
                      <ul>
                        <li className="mega-menu-title">
                          <Link to={process.env.PUBLIC_URL + "/"}>
                            {e?.name}
                          </Link>
                        </li>
                        {e?.services?.map((e) => {
                          return (
                            <>
                              <li>
                                <Link
                                  to={
                                    process.env.PUBLIC_URL +
                                    "/professional/list"
                                  }
                                >
                                  {e?.name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/AllShop"}>
              {" "}
              {t("Shop Product")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              {getshop.map((e) => {
                return (
                  <>
                    <li>
                      <ul>
                        <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/product/${e.slug}`}
                          >
                            {e?.name}
                          </Link>
                        </li>

                        {e?.categories?.map((e) => {
                          return (
                            <>
                              <li>
                                <Link
                                  to={
                                    process.env.PUBLIC_URL + `/Shop/${e.slug}`
                                  }
                                  onClick={() => {
                                    localStorage.setItem("true", true);
                                  }}
                                >
                                  {e?.name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>          */}
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
