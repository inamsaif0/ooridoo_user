import PropTypes from "prop-types";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useEffect, useState } from "react";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import book1 from "../../assets/img/books/book1.jpg"
import book2 from "../../assets/img/books/book2.jpg"
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedCategory, setSelectedCategory } from "../../store/slices/selectedCategory-slice";
import { setActiveSort } from "../../helpers/product";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  const [getidea, setGetidea] = useState([]);
  const [getprofessional, setGetprofessional] = useState([]);
  const [getshop, setGetShop] = useState([]);
  const [getCategories, setgetCategories] = useState([]);
  const selectedCategory = useSelector((state) => state.selectedCategoryId.selectedCategory);
   

  const { slug } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      var config = {
        method: "get",
        // url: `${BaseUrl.baseurl}getheader`,
        url:`${BaseUrl.baseurl}/api/categories/getAllCategories`
      };
      axios(config)
        .then(function (response) {
          console.log(response?.data, "setGetheader");
          setgetCategories(response?.data?.data);
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

  const navigate = useNavigate();

  const handleCatgory = (e,category) => { 
    e.preventDefault();
    // Navigate to the new URL
    navigate(`${process.env.PUBLIC_URL}/shop/1`);


    if (selectedCategory === category?._id) {
      console.log("Already Selected");
      // setActiveSort(e)
    } else {
      setTimeout(() => {   
        dispatch(setSelectedCategory(category?._id));
        // setActiveSort(e)
      }, 1000);
    }
  
  };
  

//   useEffect(() => {
//     // Reset the selected category when the route changes
//     dispatch(resetSelectedCategory());
// }, [location.pathname]);

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
                            style={{color: `${location.pathname === "/" && "#e4b530"}`}}
                            to={process.env.PUBLIC_URL + `/`}
                          >
                            {t("header.nav.home")}
                           
                          </Link>
                        </li>

                        <li className="mega-menu-title">
                          <Link
                            style={{color: `${location.pathname.includes("shop") && "#e4b530"}`}}
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                            {t("header.nav.shop")}
                           
                          </Link>
                        </li>
                     
                        {/* {getCategories?.slice(0, 1).map((category, index) => (
        <li key={index}>
          <Link to={`${process.env.PUBLIC_URL}/shop/${category?._id}`}>
          Shop
          </Link>
        </li>
      ))} */}


                        <li className="mega-menu-title">
                          <Link
                            style={{color: `${location.pathname.includes("contact") && "#e4b530"}`}}
                            to={process.env.PUBLIC_URL + `/contact`}
                          >
                            {t("header.nav.contact_us")}
                           
                          </Link>
                        </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop/1"}>
              {t("header.nav.categories")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link> 
              <ul className="mega-menu mega-menu-padding">
                <li className="w-100">
                  <ul className="d-flex justify-content-center gap-5">
                  {/* style={{ maxWidth: "1280px", width: "100%" }} */}
                    <li className="">
                      <ul>
                        {/* part one */}
                        <li className="mb-lg-1 mb-xl-3">
                          <ul className="d-flex gap-3 justify-content-end">
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
                            {getCategories?.slice(0, 4).map((category, index) => (
                                <li key={index}>
                                  {console.log(category.media.file)}
                                  {/* <Link to={`${process.env.PUBLIC_URL}/shop/${category?._id}`}>
                                  {category?.media?.[0]?.file && console.log(category.media[0].file)}
                                    {t(category.title)}
                                  </Link> */}
                                  {/* <Link to={`${process.env.PUBLIC_URL}/shop/1`} onClick={() => handleCatgory(category)}s> */}
                                    <div 
                                      className="category-list-item"
                                      style={{cursor: "pointer"}} 
                                      onClick={(e) => handleCatgory(e,category)}
                                    >
                                      <img
                                        src={category?.media?.file && `${BaseUrl.baseurl}/${category.media.file}`}
                                        // src={book1}
                                        className="w-100 h-100"
                                        alt=""
                                        />
                                        <p>

                                        {t(category.title)}         
                                        </p>
                                    </div>
                                  {/* </Link> */}
                                </li>
                              ))}
                          </ul>
                        </li>

                        {/* part two */}
                        <li>
                          <ul className="d-flex gap-3 justify-content-end">
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

                            {getCategories?.slice(4, 8).map((category, index) => (
                              <li key={index}>
                                <div 
                                      className="category-list-item"
                                      style={{cursor: "pointer"}} 
                                      onClick={(e) => handleCatgory(e,category)}
                                    >
                                      <img
                                        src={category?.media?.file && `${BaseUrl.baseurl}/${category.media.file}`}
                                        // src={book1}
                                        className="w-100 h-100"
                                        alt=""
                                        />
                                        <p>

                                        {t(category.title)}         
                                        </p>
                                    </div>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* image */}
                    <li className="">
                      <ul>
                        {getCategories?.slice(8, 9).map((category, index) => (
                              <li key={index} className="mega-menu-img">
                                  <div 
                                    style={{cursor: "pointer"}} 
                                    onClick={(e) => handleCatgory(e,category)}
                                  >
                                    <img
                                      src={category?.media?.file && `${BaseUrl.baseurl}/${category.media.file}`}
                                      style={{width: "400px", height: "330px"}}
                                      alt=""
                                    />
                                        <p>
                                          {t(category.title)}
                                        </p>   
                                  </div>
                              </li>
                            ))}
                      </ul>
                    </li>
                  </ul> 
                </li>

              </ul>
          </li>


                        {/* <li className="mega-menu-title">
                          <Link
                            to={process.env.PUBLIC_URL + `/shop/1`}
                          >
                            Brands
                           
                          </Link>
                        </li> */}

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
