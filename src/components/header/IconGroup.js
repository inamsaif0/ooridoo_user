import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";

const IconGroup = ({ iconWhiteClass ,cartItems ,FavoriteData ,GetAllCartList}) => {

          const navigate =useNavigate()
          const Token = localStorage.getItem("Token")
          console.log('Token==>',Token)
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
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        {/* signup */}
        <div className="account-dropdown">
          <ul>
           {Token == null ? (  <li>
              <Link to={process.env.PUBLIC_URL + "/login-signup"}>Login</Link>
            </li>): null} 
          
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-signup"}>
                Sign Up
              </Link>
            </li>
            {Token != null ? ( 
              <li style={{cursor:'pointer'}} onClick={()=>{handleLogout()}} >
              Log Out
           </li>
            ): null} 
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
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {FavoriteData && FavoriteData.length ? FavoriteData.length : 0}
          </span>
        </Link>
      </div>
      {/* cart */}
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart cartItems={cartItems} GetAllCartList={GetAllCartList} />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
