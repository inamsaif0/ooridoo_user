import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart } from "../../store/slices/cart-slice";
import { cartItemStock } from "../../helpers/product";
import Swal from "sweetalert2";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";
import { cartFlagfunction, setProductsDetail } from "../../store/slices/productDetail-slice";
import { useTranslation } from "react-i18next";

const Cart = () => {
  let cartTotalPrice = 0;

  const { t } = useTranslation();
  const [quantityCount] = useState(1);
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const navigate = useNavigate()
  // const currency = useSelector((state) => state.currency);
  // const { cartItems } = useSelector((state) => state.cart);

  const [CartData, setCartData] = useState([])

  useEffect(() => {
    // GetAllCartList();
    GetAllCartList();
  }, []);

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

  const totalPrice = CartData.reduce((acc, item) => {
    const itemPrice = item?.productId?.price || 0; // Assuming price is stored in item.productId.price
    return acc + itemPrice * item?.count;
  }, 0);

  console.log('CartData==>', CartData)


  const handleAddtoCart = async (e, item) => {
    // e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));
    console.log('userID', UserId, 'Token', token,)
    console.log('data==>', item)
    if (token == undefined) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login-signup')
      return
    }

    const requestBody = {
      cartId: item,
      count: e + 1,
    }
    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/cart/update-cart-count`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        GetAllCartList()
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true))
        // handleRemoveFavorite(item?._id)
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

  const handleDetailPage = (e, item) => {

    console.log('e==>data', e)
    console.log('e==>item', item)

    dispatch(setProductsDetail(e))

    navigate('/productDetail')
  }



  const handleRemovetoCart = async (e, item) => {
    // e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));
    console.log('userID', UserId, 'Token', token,)
    console.log('data==>', item)
    if (token == undefined) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login-signup')
      return
    }

    if (e > 1) {
      const requestBody = {
        cartId: item,
        count: e - 1,
      }
      try {
        // setLoader(true);

        // const token = JSON.parse(localStorage.getItem('Token'));
        // if (!token) throw new Error("Authentication token is missing");

        const config = {
          method: "POST",
          url: `${BaseUrl.baseurl}/api/cart/update-cart-count`,
          data: requestBody,
          headers: {
            token: token,
            "Accept": "application/json",
          },
        };

        const response = await axios(config);
        console.log('==>cart==>api', response)
        if (response?.data?.status === true) {
          GetAllCartList()
          toast.success(response?.data?.message);
          // handleRemoveFavorite(item?._id)
          dispatch(cartFlagfunction(true))
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
    } else {
      handleRemoveFavorite(item)
      GetAllCartList()
    }
  }

  const handleRemoveFavorite = async (e) => {
    console.log('item==>id', e)
    const token = JSON.parse(localStorage.getItem('Token'));
    const requestBody = {
      cartId: e,
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
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true))
        GetAllCartList()
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






  return (
    <Fragment>
      <SEO
        titleTemplate="Cart"
        description="Cart page of Ooridoo"
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("header.icon_group.cart.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("header.icon_group.cart.breadcrumb.cart"), path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {CartData && CartData.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">{t("header.icon_group.cart.heading")}</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>{t("header.icon_group.cart.image")}</th>
                            <th>{t("header.icon_group.cart.product_name")}</th>
                            <th>{t("header.icon_group.cart.unit_price")}</th>
                            <th>{t("header.icon_group.cart.quantity")}</th>
                            <th>{t("header.icon_group.cart.subtotal")}</th>
                            <th>{t("header.icon_group.cart.action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {CartData.map((cartItem, key) => {
                            console.log(cartItem)
                            const itemSubtotal = cartItem?.productId?.price * cartItem?.count || 0; // Calculate subtotal for each item
                            // const discountedPrice = getDiscountPrice(
                            //   cartItem.price,
                            //   cartItem.discount
                            // );
                            // const finalProductPrice = (
                            //   cartItem.price * currency.currencyRate
                            // ).toFixed(2);
                            // const finalDiscountedPrice = (
                            //   discountedPrice * currency.currencyRate
                            // ).toFixed(2);

                            // discountedPrice != null
                            //   ? (cartTotalPrice +=
                            //       finalDiscountedPrice * cartItem.quantity)
                            //   : (cartTotalPrice +=
                            //       finalProductPrice * cartItem.quantity);
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail" onClick={() => handleDetailPage(cartItem?.productId)}>
                                  <Link
                                  // to={
                                  //   process.env.PUBLIC_URL +
                                  //   "/product/" +
                                  //   cartItem._id
                                  // }
                                  // process.env.PUBLIC_URL +
                                  // "/productDetail"
                                  // cartItem.id
                                  >
                                    <img
                                      className="img-fluid"
                                      // src={
                                      //   process.env.PUBLIC_URL +
                                      //   cartItem.image[0]
                                      // }
                                      src={`${BaseUrl.baseurl}${'/'}${cartItem?.productId?.media[0]?.file}`}
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem?.productId?.title}
                                  </Link>
                                  {/* {cartItem.selectedProductColor &&
                                  cartItem.selectedProductSize ? (
                                    <div className="cart-item-variation">
                                      <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span>
                                      <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )} */}
                                </td>

                                <td className="product-price-cart">
                                  {/* {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {currency.currencySymbol +
                                          finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {currency.currencySymbol +
                                          finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {currency.currencySymbol +
                                        finalProductPrice}
                                    </span>
                                  )} */}
                                  <span className="amount">
                                    {cartItem?.productId?.price}
                                  </span>
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        // dispatch(decreaseQuantity(cartItem))
                                        handleRemovetoCart(cartItem?.count, cartItem?._id)
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem?.count}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        // dispatch(addToCart({
                                        //   ...cartItem,
                                        //   quantity: quantityCount
                                        // }))
                                        handleAddtoCart(cartItem?.count, cartItem?._id)
                                        // handleAddtoCart(cartItem?.count,cartItem?.productId?._id)
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity &&
                                        cartItem.quantity >=
                                        cartItemStock(
                                          cartItem,
                                          cartItem.selectedProductColor,
                                          cartItem.selectedProductSize
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {/* {totalPrice} */}
                                  {itemSubtotal}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      // dispatch(deleteFromCart(cartItem.cartItemId))
                                      handleRemoveFavorite(cartItem._id)
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link
                          to={process.env.PUBLIC_URL + "/shop/1"}
                        >
                          {t("header.icon_group.cart.continue_shopping")}
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => navigate('/checkout')}>
                          {t("header.icon_group.cart.view_checkout")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* cart Item */}
                {/* <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Estimate Shipping And Tax
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          Enter your destination to get a shipping estimate.
                        </p>
                        <div className="tax-select-wrapper">
                          <div className="tax-select">
                            <label>* Country</label>
                            <select className="email s-email s-wid">
                              <option>Bangladesh</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select">
                            <label>* Region / State</label>
                            <select className="email s-email s-wid">
                              <option>Bangladesh</option>
                              <option>Albania</option>
                              <option>Åland Islands</option>
                              <option>Afghanistan</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div className="tax-select">
                            <label>* Zip/Postal Code</label>
                            <input type="text" />
                          </div>
                          <button className="cart-btn-2" type="submit">
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required name="name" />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products{" "}
                        <span>
                          {currency.currencySymbol + cartTotalPrice.toFixed(2)}
                        </span>
                      </h5>

                      <h4 className="grand-totall-title">
                        Grand Total{" "}
                        <span>
                          {currency.currencySymbol + cartTotalPrice.toFixed(2)}
                        </span>
                      </h4>
                      <Link to={process.env.PUBLIC_URL + "/checkout"}>
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div> */}
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                    {t("header.icon_group.cart.empty_cart")} <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/AllShop"}>
                      {t("header.icon_group.cart.shop_now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Cart;
