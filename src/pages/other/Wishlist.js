import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromWishlist, deleteAllFromWishlist } from "../../store/slices/wishlist-slice"
import axios from "axios";
import Swal from "sweetalert2";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";
import { cartFlagfunction, setProductsDetail } from "../../store/slices/productDetail-slice";
import { useTranslation } from "react-i18next";

const Wishlist = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const { t } = useTranslation()
  const navigate = useNavigate()

  const currency = useSelector((state) => state.currency);
  // const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  const [FavoriteData, setFavoriteData] = useState([])

  useEffect(() => {
    // GetAllCartList();
    GetAllFavoriteList();
  }, []);

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


  const handleRemoveFavorite = async (e) => {
    console.log('item==>id', e)
    const token = JSON.parse(localStorage.getItem('Token'));
    const requestBody = {
      favouriteId: e,
    }
    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/favourite/remove-from-favourite`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        dispatch(cartFlagfunction(true))
        GetAllFavoriteList()
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


  const handleAddtoCart = async (e, item) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));
    console.log('userID', UserId, 'Token', token,)
    console.log('data==>', item)
    if (token == undefined) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login-signup')
      return
    }

    console.log('item==>', item)

    const requestBody = {
      productId: item?.productId?._id,
      userId: UserId,
    }

    // 66e5379b90ab9d205a31ea85

    console.log('RequestBody===>', requestBody)


    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/cart/add-to-cart`,
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
        handleRemoveFavorite(item?._id)
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


  }

  const handleDetailPage = (e, item) => {

    console.log('e==>data', e)

    dispatch(setProductsDetail(e))

    navigate('/productDetail')
  }





  return (
    <Fragment>
      <SEO
        titleTemplate="Wishlist"
        description="Wishlist page of Ooridoo"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("header.icon_group.wishlist.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("header.icon_group.wishlist.breadcrumb.wishlist"), path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {FavoriteData && FavoriteData?.length > 0 ? (
              <Fragment>
                <h3 className="cart-page-title">{t("header.icon_group.wishlist.heading")}</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>{t("header.icon_group.wishlist.image")}</th>
                            <th>{t("header.icon_group.wishlist.product_name")}</th>
                            <th>{t("header.icon_group.wishlist.unit_price")}</th>
                            <th>{t("global.addtocart")}</th>
                            <th>{t("header.icon_group.wishlist.action")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {FavoriteData.map((wishlistItem, key) => {
                            console.log(wishlistItem)
                            // const discountedPrice = getDiscountPrice(
                            //   wishlistItem.price,
                            //   wishlistItem.discount
                            // );
                            // const finalProductPrice = (
                            //   wishlistItem.price * currency.currencyRate
                            // ).toFixed(2);
                            // const finalDiscountedPrice = (
                            //   discountedPrice * currency.currencyRate
                            // ).toFixed(2);
                            // const cartItem = cartItems.find(
                            //   item => item.id === wishlistItem.id
                            // );
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail" onClick={() => handleDetailPage(wishlistItem.productId)}
                                >
                                  <Link
                                  // to={
                                  //   process.env.PUBLIC_URL +
                                  //   "/productDetail"}
                                  // to={
                                  // process.env.PUBLIC_URL +
                                  // "/product/" +
                                  // wishlistItem._id
                                  // }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={`${BaseUrl.baseurl}${'/'}${wishlistItem?.productId?.media[0]?.file}`}
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  {/* <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      wishlistItem.id
                                    }
                                  >
                                    {wishlistItem.name}
                                  </Link> */}
                                  {wishlistItem?.productId?.title}
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
                                    {wishlistItem?.productId?.price}
                                  </span>

                                </td>

                                {/* <td className="product-wishlist-cart">
                                  {wishlistItem.affiliateLink ? (
                                    <a
                                      href={wishlistItem.affiliateLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {" "}
                                      Buy now{" "}
                                    </a>
                                  ) 
                                  : wishlistItem.variation &&
                                    wishlistItem.variation.length >= 1 ? (
                                    <Link
                                      to={`${process.env.PUBLIC_URL}/product/${wishlistItem.id}`}
                                    >
                                      Select option
                                    </Link>
                                  ) 
                                  : wishlistItem.stock &&
                                    wishlistItem.stock > 0 ? (
                                    <button
                                      onClick={() =>
                                        dispatch(addToCart(wishlistItem))
                                      }
                                      className={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                          ? "active"
                                          : ""
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                      }
                                      title={
                                        wishlistItem !== undefined
                                          ? "Added to cart"
                                          : "Add to cart"
                                      }
                                    >
                                      {cartItem !== undefined &&
                                      cartItem.quantity > 0
                                        ? "Added"
                                        : "Add to cart"}
                                    </button>
                                  ) : (
                                    <button disabled className="active">
                                      Out of stock
                                    </button>
                                  )}
                                </td> */}
                                <td className="product-wishlist-cart">
                                  <button onClick={(e) => { handleAddtoCart(e, wishlistItem) }} className="active"  >
                                    {t("global.addtocart")}
                                  </button>
                                </td>
                                {/* <td>hello</td> */}

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      // dispatch(deleteFromWishlist(wishlistItem.id))
                                      handleRemoveFavorite(wishlistItem._id)
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
                          {t("header.icon_group.wishlist.continue_shopping")}
                        </Link>
                      </div>
                      {/* <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromWishlist())}>
                          Clear Wishlist
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                      {t("header.icon_group.wishlist.empty_wishlist")} <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop/1"}>
                        {t("header.icon_group.wishlist.add_items")}
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

export default Wishlist;
