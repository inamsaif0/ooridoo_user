import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDiscountPrice } from "../../../helpers/product";
import { deleteFromCart } from "../../../store/slices/cart-slice"
import BaseUrl from "../../../BaseUrl";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";

const MenuCart = ({cartItems:ahmed ,GetAllCartList}) => {

  const { t } = useTranslation();
  console.log('cartItems==>ahmed',ahmed)
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  // const { cartItems } = useSelector((state) => state.cart);
  let cartTotalPrice = 0;


  function convertToNumber(value) {
    if (typeof value === "string") {
        // Remove commas and convert to number
        return parseFloat(value.replace(/,/g, ""));
    }
    // If it's already a number, return it as is
    return value;
  }

  function formatWithCommas(value) {
    if (typeof value === "number") {
        return value.toLocaleString(); // Adds commas for thousands separator
    } else if (typeof value === "string" && !isNaN(value.replace(/,/g, ""))) {
        return parseFloat(value.replace(/,/g, "")).toLocaleString();
    }
    throw new Error("Invalid input: must be a number or numeric string");
  }

  const handleRemoveCart = async(e) =>{
    console.log('item==>id',e)
    const token = JSON.parse(localStorage.getItem('Token'));
    const requestBody={
      cartId:e,
    }
    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/cart/remove-from-cart`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api',response)
      if (response?.data?.status === true) {
        GetAllCartList()
        toast.success(response?.data?.message);
      } else {
        // setLoader(false);
        toast.error(response?.data?.message || "Failed to add review.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message || "Something went wrong!",
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } finally {
      // setLoader(false);
    }



  }

  const totalPrice = ahmed.reduce((acc, item) => {
    const itemPrice = convertToNumber(item?.productId?.price) || 0; // Assuming price is stored in item.productId.price
    return acc + itemPrice * item?.count;
  }, 0);

  console.log('total==>',totalPrice)


  return (
    <div className="shopping-cart-content header-icon-dropdown">
      {ahmed && ahmed.length > 0 ? (
        <Fragment>
          <ul>
            {ahmed.map((item) => {
              // const discountedPrice = getDiscountPrice(
              //   item.price,
              //   item.discount
              // );
              // const finalProductPrice = (
              //   item.price * currency.currencyRate
              // ).toFixed(2);
              // const finalDiscountedPrice = (
              //   discountedPrice * currency.currencyRate
              // ).toFixed(2);

              // discountedPrice != null
              //   ? (cartTotalPrice += finalDiscountedPrice * item.quantity)
              //   : (cartTotalPrice += finalProductPrice * item.quantity);

              // const finalProductPrice = (
              //     item.price * currency.currencyRate
              //   ).toFixed(2);
      

              return (
                <li className="single-shopping-cart" key={item?._id}>
                  <div className="shopping-cart-img">
                    <Link 
                    // to={process.env.PUBLIC_URL + "/product/" + item?.productId?.media[0]?.file}
                    to={process.env.PUBLIC_URL + "#/"}
                    >
                      <img
                        alt=""
                        src={`${BaseUrl.baseurl}${'/'}${item?.productId?.media[0]?.file}` }
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        // to={process.env.PUBLIC_URL + "/product/" + item.id}
                        to={process.env.PUBLIC_URL + "#/"}
                      >
                        {" "}
                        {item?.productId?.title}{" "}
                      </Link>
                    </h4>
                    <h6>Qty: {item?.count}</h6>
                    {/* <span>
                      {discountedPrice !== null
                        ? currency.currencySymbol + finalDiscountedPrice
                        : currency.currencySymbol + finalProductPrice}
                    </span> */}
                    {/* {item.selectedProductColor &&
                    item.selectedProductSize ? (
                      <div className="cart-item-variation">
                        <span>Color: {item.selectedProductColor}</span>
                        <span>Size: {item.selectedProductSize}</span>
                      </div>
                    ) : (
                      ""
                    )} */}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => 
                        handleRemoveCart(item._id)
                      // dispatch(deleteFromCart(item.cartItemId))
                      }>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              {`${t("global.total")} : `}
              <span className="shop-total">
              ₩{formatWithCommas(convertToNumber(totalPrice))}
                {/* {totalPrice?.toFixed(2)} */}
                {/* ahmed */}
              </span> 
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              {t("global.viewcart")}
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              {t("global.checkout")}
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">{t("global.empty_cart")}</p>
      )}
    </div>
  );
};

export default MenuCart;
