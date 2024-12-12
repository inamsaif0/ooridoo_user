import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import axios from "axios";
import BaseUrl from "../../BaseUrl";

const IconGroup = ({ iconWhiteClass, cartItems, FavoriteData, GetAllCartList }) => {

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

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  // const { wishlistItems } = useSelector((state) => state.wishlist);
  // const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('Token');
    localStorage.removeItem('UserId');

    navigate('/')

    console.log("Logged out successfully");
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


  return (
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
              style={{width: "30px", height: "35px", objectFit: "cover"}}
            />)
          }
        </button>
        <div className="account-dropdown header-icon-dropdown mt-lg-n5 mt-md-n2 mt-sm-0">
          <ul>
            {Token == null ? (
              <li>
                <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
              </li>
            ) : null}

            <li>
              <Link to={process.env.PUBLIC_URL + "/signup"}>Sign Up</Link>
            </li>
            {Token != null ? (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleLogout()}
              >
                Log Out
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
              style={{width: "30px", height: "35px", objectFit: "cover"}}
            />)
          }
        </button>
        <div className="account-dropdown header-icon-dropdown mt-lg-n5 mt-md-n2 mt-sm-0">
          <ul>
            {Token == null ? (
              <li>
                <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
              </li>
            ) : null}

            <li>
              <Link to={process.env.PUBLIC_URL + "/signup"}>Sign Up</Link>
            </li>
            {Token != null ? (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => handleLogout()}
              >
                Log Out
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {/* Wishlist */}
      <div className="same-style header-wishlist py-1">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" style={{ fontSize: "30px" }} />
          <span
            className="count-style"
            style={{ display: FavoriteData && FavoriteData.length ? "block" : "none" }}
          >
            {FavoriteData && FavoriteData.length ? FavoriteData.length : 0}
          </span>
        </Link>
      </div>

      {/* Cart */}
      <div className="same-style cart-wrap d-none d-lg-block py-1">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" style={{ fontSize: "32px" }} />
          <span
            className="count-style"
            style={{ display: cartItems && cartItems.length > 0 ? "block" : "none" }}
          >
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        <MenuCart cartItems={cartItems} GetAllCartList={GetAllCartList} />
      </div>

      {/* Mobile Cart */}
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" style={{ fontSize: "32px" }} />
          <span
            className="count-style"
            style={{ display: cartItems && cartItems.length > 0 ? "block" : "none" }}
          >
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>

      {/* Mobile Menu Trigger */}
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
          <i className="pe-7s-menu" style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>

  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
