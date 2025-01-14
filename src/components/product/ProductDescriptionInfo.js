import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "./sub-components/ProductRating";
import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { Fragment } from "react";
import ShortDescription from "./ShortDescription";

const ProductDescriptionInfo = () => {
  const [getProduct, setGetProduct] = useState([]);
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const subs = () => {
    setCount(count - 1);
  };
  const { slug } = useParams("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}productFilter?product_name=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setGetProduct(response?.data?.products);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
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
  }, [slug]);
  console.log(count, "count");
  return (
    <div className="product-details-content ml-70">
      {getProduct
        ? getProduct.map((e) => {
            return (
              <>
                <h2>{e?.name}</h2>
                <div className="product-details-price">
                  <i className="fa fa-dollar"> </i>
                  {e.sale_price !== 0 || e.sale_price !== null ? (
                    <Fragment>
                      <span>{e.sale_price}</span>{" "}
                      <span className="old">{e.regular_price}</span>
                    </Fragment>
                  ) : (
                    <span>{e.regular_price}</span>
                  )}
                </div>
                <Rating />
                <div className="pro-details-list">
                  <ShortDescription description={e.description} />
                </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={subs}>
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={count}
                      readOnly
                    />
                    <button className="inc qtybutton" onClick={add}>
                      +
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    {e?.in_stock === 0 ? (
                      <button disabled className="active">
                        Out of Stock
                      </button>
                    ) : (
                      <Link to={`${process.env.PUBLIC_URL}/checkout`}>
                        <i className="pe-7s-cart"></i>
                        Add To Cart
                      </Link>
                    )}
                  </div>
                  <div className="pro-details-wishlist">
                    <button className="" title={"Add to wishlist"}>
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                  <div className="pro-details-compare">
                    <button title={"Add to compare"}>
                      <i className="pe-7s-shuffle" />
                    </button>
                  </div>
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};

export default ProductDescriptionInfo;
