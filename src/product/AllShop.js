import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LayoutOne from "../layouts/LayoutOne";
import NewSofa from "../assets/img/newSofa.png";
import BaseUrl from "../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";

const AllShop = () => {
  const [getShop, setGetShop] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const { slug } = useParams("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}shops`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.imagePath);
          setGetShop(response?.data?.shop);
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
  return (
    <LayoutOne>
      <div className="container my-2">
        <h2>{getShop?.shop?.name}</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="row my-2">
              {getShop !== [] ? (
                getShop?.map((e) => {
                  return (
                    <>
                      <br />
                      <div className="col-md-4 mb-3">
                        <div className="bg-light">
                          <Link to={`/product/${e.slug}`}>
                            <h4 className="pt-2  ps-2">{e?.name}</h4>
                            <img
                              src={e?.image ? imgurl + e?.image : NewSofa}
                              alt=""
                              height={200}
                              className="w-100 mb-2"
                            />
                          </Link>
                        </div>
                        {e?.categories.lenght !== 0 ? (
                          e?.categories.map((e) => (
                            <Link
                              to={`/Shop/${e.slug}`}
                              onClick={() => {
                                localStorage.setItem("true", true);
                              }}
                            >
                              <p className="mt-2 text-capitalize">{e.name}</p>
                            </Link>
                          ))
                        ) : (
                          <h5>No Data Found</h5>
                        )}
                      </div>
                    </>
                  );
                })
              ) : (
                <h5 className="text-center my-5"> No Data Found</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default AllShop;
