import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";

const IconGroup = ({ iconWhiteClass, cartItems, FavoriteData, GetAllCartList }) => {

  const navigate = useNavigate()
  const Token = localStorage.getItem("Token")
  console.log('Token==>', Token)
  const handleClick = e => {
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
  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)} >
      {/* <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
      <div className="same-style account-setting d-none d-lg-block p-0  "   >
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
          style={{ marginTop: "0px" }}
        // style={{ border: "1px solid red" }}
        >
          <i className="pe-7s-user-female" style={{ fontSize: "35px" }} />
        </button>
        {/* signup */}
        <div className="account-dropdown"
          style={{ marginTop: "-45px" }}
        >
          <ul>
            {Token == null ? (<li>
              <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
            </li>) : null}

            <li>
              <Link to={process.env.PUBLIC_URL + "/signup"}>
                Sign Up
              </Link>
            </li>
            {Token != null ? (
              <li style={{ cursor: 'pointer' }} onClick={() => { handleLogout() }} >
                Log Out
              </li>
            ) : null}
            {/* <li onClick={()=>{handleLogout()}} >
               Log Out
            </li> */}
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/profile"}>
                my account
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* whistlist */}
      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareItems && compareItems.length ? compareItems.length : 0}
          </span>
        </Link>
      </div> */}
      <div className="d-flex items-center" style={{ alignItems: "center" }}>


        <div className="same-style header-wishlist py-1" >
          <Link to={process.env.PUBLIC_URL + "/wishlist"}>
            <i className="pe-7s-like" style={{ fontSize: "30px" }} />
            <span className="count-style" style={{ display: FavoriteData && FavoriteData.length ? "block" : "none" }}>
              {FavoriteData && FavoriteData.length ? FavoriteData.length : 0}
            </span>
          </Link>
        </div>
        {/* cart */}
        <div className="same-style cart-wrap d-none d-lg-block py-1">
          <button className="icon-cart" onClick={e => handleClick(e)}>
            <i className="pe-7s-shopbag" style={{ fontSize: "32px" }} />
            <span className="count-style" style={{ display: cartItems && cartItems.length > 0 ? "block" : "none" }}>
              {cartItems && cartItems.length ? cartItems.length : 0}
            </span>
          </button>
          {/* menu cart */}
          <MenuCart cartItems={cartItems} GetAllCartList={GetAllCartList} />
        </div>
        <div className="same-style cart-wrap d-block d-lg-none">
          <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
            <i className="pe-7s-shopbag" style={{ fontSize: "32px" }} />
            <span className="count-style" style={{ display: cartItems && cartItems.length > 0 ? "block" : "none" }}>
              {cartItems && cartItems.length ? cartItems.length : 0}
            </span>
          </Link>
        </div>

        <div className="same-style mobile-off-canvas d-block d-lg-none">
          <button
            className="mobile-aside-button"
            onClick={() => triggerMobileMenu()}
          >
            <i className="pe-7s-menu" style={{ fontSize: "30px" }} />
          </button>
        </div>
      </div>

    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
