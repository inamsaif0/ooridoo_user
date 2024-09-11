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

const Checkout = () => {
  let cartTotalPrice = 0;
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate()

  const [CartData,setCartData]=useState([])

  console.log('CartData==>CheckoutData==>',CartData)

  useEffect(() => {
    GetAllCartList();
    // GetAllFavoriteList();
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
          let OriginalData=response?.data?.data

          console.log('OriginalData==>',OriginalData)

          const transformedData = {
            products: OriginalData.map(item => ({
              productId: item.productId._id,
              quantity: item.count,
              name:item.productId?.title,
              unitPrice: item.productId.price,
              totalPrice: item.productId.price * item.count
            }))
          };

          const updatedCartData = transformedData?.products?.map(({ name, ...rest }) => rest);

          console.log('updatedCartData==>',updatedCartData)
    
    
          const totalPrice = updatedCartData?.reduce((acc, item) => {
            const itemPrice = item?.totalPrice || 0; // Assuming price is stored in item.productId.price
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
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.address.trim()) {
      errors.address = "Street address is required";
    }

    if (!formData.postcode.trim()) {
      errors.postcode = "Postcode is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
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
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <form onSubmit={handleSubmit}>
                  {/* <form onSubmit={handleSubmit}> */}
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
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
                          <label>Last Name</label>
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
                          <label>Street Address</label>
                          <input
                            className="billing-address"
                            placeholder="House number and street name"
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
                          <label>Postcode / ZIP</label>
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
                          <label>Phone</label>
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
                          <label>Email Address</label>
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
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
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
                  <h3>Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
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
                                  {cartItem?.name} ({`${cartItem?.quantity} x${cartItem?.unitPrice} `}) 
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
                                      {cartItem?.totalPrice}
                                      {/* {cartItem?.totalPrice} */}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>₩{TotalPriceSum?.toFixed(2)}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method"></div>
                  </div>
                  <div className="place-order mt-25">
                    <button className="btn-hover" type="button" onClick={()=>{handleSubmit()}} >Place Order</button>
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
