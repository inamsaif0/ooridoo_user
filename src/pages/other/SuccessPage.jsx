import { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { toast } from "react-toastify";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import Swal from "sweetalert2";

const SuccessPage = () => {
//   let { pathname } = useLocation();

//   const {location ,pathname } = useLocation();
  
//   useEffect(() => {
//     GetAllCartList();
//     // GetAllFavoriteList();
//   }, []);

//   const GetAllCartList = () => {
//     const token = JSON.parse(localStorage.getItem('Token'));
//     try {
//       // setLoader(true);
//       var config = {
//         method: "get",
//         url: `${BaseUrl.baseurl}/api/order/complete-order?orderId=${orderId}&paymentId=${paymentKey}`,
//         headers: {
//           token: token,
//           "Accept": "application/json",
//         },
//       };
//       axios(config)
//         .then(function (response) {
//           console.log('responseReviews==>', response);
//           toast.success(response?.data?.message)
  

//         //   setCartData(transformedData)
//         })
//         .catch((error) => {
//           // setLoader(false);
//           console.log(error);
//         });
//     } catch (error) {
//       // setLoader(false);
//       console.log(error);
//       Swal.fire({
//         showCloseButton: true,
//         toast: true,
//         icon: "error",
//         title: error?.response?.data?.message,
//         animation: true,
//         position: "top-right",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener("mouseenter", Swal.stopTimer);
//           toast.addEventListener("mouseleave", Swal.resumeTimer);
//         },
//       });
//     }
//   };
const location = useLocation(); // Destructure useLocation to get location object
  const searchParams = new URLSearchParams(location.search);

const orderId = searchParams.get('orderId');
const paymentKey = searchParams.get('paymentKey');
const amount = searchParams.get('amount');

useEffect(() => {
  if (orderId && paymentKey) {
    GetAllCartList();
  }
}, [orderId, paymentKey]);

const GetAllCartList = () => {
  const token = JSON.parse(localStorage.getItem('Token'));
  try {
    var config = {
      method: "get",
      url: `${BaseUrl.baseurl}/api/order/complete-order?orderId=${orderId}&paymentId=${paymentKey}`,
      headers: {
        token: token,
        "Accept": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        console.log('responseReviews==>', response);
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          showCloseButton: true,
          toast: true,
          icon: "error",
          title: error?.response?.data?.message,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      });
  } catch (error) {
    console.log(error);
    Swal.fire({
      showCloseButton: true,
      toast: true,
      icon: "error",
      title: error.message,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
};

  return (
    <Fragment>
      <SEO
        titleTemplate="Not Found"
        description="404 of Ooridoo"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Success page"}
          ]} 
        />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                {/* <div>
      <h4>Payment Success</h4>
      <p>Order ID: {orderId}</p>
      <p>Payment Key: {paymentKey}</p>
      <p>Amount: {amount}</p>
    </div> */}
                  {/* <h1>200</h1> */}
                  <h2>Payment Completed Successfully</h2>
                  {/* <h2>OPPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <form className="searchform mb-50">
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                  </form> */}
                  <Link to={"/shop/1"} className="error-btn">
                    Continue Shopping!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default SuccessPage;
