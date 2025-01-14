import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Swal from "sweetalert2";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  let cartTotalPrice = 0;
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { t } = useTranslation();
 
  const navigate = useNavigate()

  const [CartData,setCartData]=useState([])

  console.log('CartData==>CheckoutData==>',CartData)

  useEffect(() => {
    GetAllCartList();
    // GetAllFavoriteList();
  }, []);


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
          let OriginalData=response?.data?.data

          console.log('OriginalData==>',OriginalData)

          const transformedData = {
            products: OriginalData.map(item => ({
              productId: item.productId._id,
              quantity: item.count,
              name:item.productId?.title,
              unitPrice: convertToNumber(item.productId.price),
              totalPrice: convertToNumber(item.productId.price) * (item.count)
            }))
          };

          const updatedCartData = transformedData?.products?.map(({ name, ...rest }) => rest);

          console.log('updatedCartData==>',updatedCartData)
    
    
          const totalPrice = updatedCartData?.reduce((acc, item) => {
            const itemPrice = (item?.totalPrice) || 0; // Assuming price is stored in item.productId.price
            return acc + itemPrice ;
          }, 0);
    
          // console.log('totalPrice==>',totalPrice)
    
          setTotalPriceSum(totalPrice)

          setCartData(transformedData)
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

  // State for form fields and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: ""
  });

  const [errors, setErrors] = useState({});

  const [Loader, setLoader] = useState(false)

  const [TotalPriceSum,setTotalPriceSum] =useState()

  console.log('TotalPriceSum==>',TotalPriceSum)

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({ ...errors, [name]: "" });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = t("checkout_form.formErrors.firstName");
    }

    if (!formData.lastName.trim()) {
      errors.lastName = t("checkout_form.formErrors.lastName");
    }

    if (!formData.address.trim()) {
      errors.address = t("checkout_form.formErrors.streetAddress");
    }

    if (!formData.postcode.trim()) {
      errors.postcode = t("checkout_form.formErrors.postcode");
    }

    if (!formData.phone.trim()) {
      errors.phone = t("checkout_form.formErrors.phone.required");
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = t("checkout_form.formErrors.phone.invalid");
    }

    if (!formData.email.trim()) {
      errors.email = t("checkout_form.formErrors.email.required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t("checkout_form.formErrors.email.invalid");
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async () => {
    // e.preventDefault();

    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));
    if(token == undefined){
      toast.error( "Please Login to add review.");
      navigate('/login-signup')
      return
    }


    if (validateForm()) {
      // Proceed with form submission (e.g., send data to server)
      console.log("Form submitted successfully", formData);

      const updatedCartData = CartData?.products?.map(({ name, ...rest }) => rest);

      console.log('updatedCartData==>',updatedCartData)


      // const totalPrice = updatedCartData?.reduce((acc, item) => {
      //   const itemPrice = item?.totalPrice || 0; // Assuming price is stored in 
      //   return acc + itemPrice ;
      // }, 0);

      // console.log('totalPrice==>',totalPrice)

      // setTotalPriceSum(totalPrice)
 
       
      
      const requestBody = {
        amount:TotalPriceSum,
        ShippingAddress:formData.address,
        Zipcode:formData.postcode,
        userId:UserId,
        // products: [                
        //   {
        //     productId: "60d21b4667d0d8992e610c85", 
        //     quantity: 2,            
        //     unitPrice: 500,                 
        //   totalPrice: 1000
        //   }
        // ],
        products:updatedCartData
      };
  
      try {
        setLoader(true);
  
        // const token = JSON.parse(localStorage.getItem('Token'));
        // if (!token) throw new Error("Authentication token is missing");
  
        const config = {
          method: "POST",
          url: `${BaseUrl.baseurl}/api/order/checkout`,
          data: requestBody,
          headers: {
            token: token,
            "Accept": "application/json",
          },
        };
  
        const response = await axios(config);
        if (response?.data?.status === true) {
          console.log('response==>checkoutapi==>',response?.data?.data)
          toast.success(response?.data?.message);
          window.location.href = response?.data?.data?.paymentData?.checkout?.url;
          // navigate(response?.data?.data?.paymentData?.checkout?.url)
          // fetchReviews()
          setFormData({
            ...formData,
            customError: false,
          });
        } else {
          setLoader(false);
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
        setLoader(false);
      }



    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Fragment>
      <SEO titleTemplate="Checkout" description="Checkout page of Ooridoo" />
      <LayoutOne headerTop="visible">
        <Breadcrumb
          pages={[
            { label: t("checkout_form.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("checkout_form.breadcrumb.checkout"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>{t("checkout_form.title.billingDetails")}</h3>
                  <form onSubmit={handleSubmit}>
                  {/* <form onSubmit={handleSubmit}> */}
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.firstName")}</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                          {errors.firstName && (
                            <p className="error">{errors.firstName}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.lastName")}</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                          {errors.lastName && (
                            <p className="error">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.streetAddress")}</label>
                          <input
                            className="billing-address"
                            placeholder={t("checkout_form.formPlaceholders.streetAddress")}
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                          {errors.address && (
                            <p className="error">{errors.address}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.postcode")}</label>
                          <input
                            type="text"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                          />
                          {errors.postcode && (
                            <p className="error">{errors.postcode}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.phone")}</label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          {errors.phone && (
                            <p className="error">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("checkout_form.formLabels.email")}</label>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      {/* <h4>{t("checkout_form.formLabels.orderNotes")}</h4> */}
                      <div className="additional-info">
                        <label><h5>{t("checkout_form.formLabels.orderNotes")}</h5></label>
                        <textarea
                          placeholder={t("checkout_form.formLabels.orderNotesPlaceholder")}
                          name="orderNotes"
                          value={formData.orderNotes}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    {/* <div className="place-order mt-25">
                      <button type="submit" className="btn-hover">
                        Place Order
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="your-order-area">
                  <h3>{t("checkout_form.order_details.heading")}</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>{t("checkout_form.order_details.product")}</li>
                          <li>{t("checkout_form.order_details.total")}</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          {CartData?.products?.map((cartItem, key) => {
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
                              <li key={key}>
                                <span className="order-middle-left">
                                  {cartItem?.name} ({`${cartItem?.quantity} x ${(cartItem?.unitPrice)}`}) 
                                  
                                   {/* {cartItem?.quantity} */}
                                  {/* {cartItem?.name} X {cartItem?.quantity} */}
                                </span>{" "}
                                <span className="order-price">
                                  {/* {discountedPrice !== null
                                    ? currency.currencySymbol +
                                      (
                                        finalDiscountedPrice * cartItem.quantity
                                      ).toFixed(2)
                                    : currency.currencySymbol +
                                      (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2)} */}
                                      ₩{formatWithCommas(convertToNumber(cartItem?.totalPrice))}
                                      {/* {cartItem?.totalPrice} */}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">{t("checkout_form.order_details.shipping")}</li>
                          <li>{t("checkout_form.order_details.free_shipping")}</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">{t("checkout_form.order_details.total")}</li>
                          <li>₩{formatWithCommas(Number(TotalPriceSum))}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover" type="button" onClick={()=>{handleSubmit()}} >{t("checkout_form.order_details.place_order")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
