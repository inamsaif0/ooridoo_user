import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import axios from "axios";
import Swal from "sweetalert2";
import BaseUrl from "../../BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { cartFlagfunction } from "../../store/slices/productDetail-slice";

const HeaderOne = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const [CartData,setCartData]=useState([])

  const [FavoriteData,setFavoriteData]=useState([])

  console.log('CartData===>',CartData)
  console.log('FavoriteData===>',FavoriteData)
  const addCartFlag = useSelector((state) => state.productDetail.addcartflag);

     console.log('flagAddtoCart==>',addCartFlag)


  useEffect(() => {
    if (addCartFlag) {
      GetAllCartList();
      GetAllFavoriteList();
      dispatch(cartFlagfunction(false)); // Reset flag after fetching cart list
  }
    GetAllCartList();
    GetAllFavoriteList();
  }, [addCartFlag]);

  const GetAllCartList = () => {
    const token = JSON.parse(localStorage.getItem('Token'));
    try {
      // setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/api/cart/get-cart`,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };
      axios(config)
        .then(function (response) {
          console.log('responseReviews==>', response);
          setCartData(response?.data?.data)
        })
        .catch((error) => {
          // setLoader(false);
          console.log(error);
        });
    } catch (error) {
      // setLoader(false);
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
  };

  const GetAllFavoriteList = () => {
    const token = JSON.parse(localStorage.getItem('Token'));
    try {
      // setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/api/favourite/get-favourite`,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };
      axios(config)
        .then(function (response) {
          console.log('responseReviews==>', response);
          setFavoriteData(response?.data?.data)
        })
        .catch((error) => {
          // setLoader(false);
          console.log(error);
        });
    } catch (error) {
      // setLoader(false);
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
  };

  return (
    <header className={clsx("header-area clearfix", headerBgClass, headerPositionClass)}>
      {/* <div
        className={clsx(
          "header-top-area", 
          headerPaddingClass, top === "visible" ? "d-none d-lg-block" : "d-none", 
          borderStyle === "fluid-border" && "border-none" 
        )}
      >
        <div className={layout === "container-fluid" ? layout : "container"}> */}
          {/* header top */}
          {/* <HeaderTop borderStyle={borderStyle} />
        </div>
      </div> */}

      <div
        className={clsx(
          headerPaddingClass, 
          "sticky-bar header-res-padding clearfix", 
          scroll > headerTop && "stick"
        )}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logoIslamic.jpeg" logoClass="logo" />
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup cartItems={CartData} FavoriteData={FavoriteData} GetAllCartList={GetAllCartList} />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

HeaderOne.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderOne;
