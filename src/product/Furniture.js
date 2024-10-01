import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../BaseUrl";
import NewSofa from "../assets/img/newSofa.png";
import LayoutOne from "../layouts/LayoutOne";

const Furniture = () => {
  const [getcategories, setGetcategories] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const { slug } = useParams("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}products?shop=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.subcatoryimagePath);
          setGetcategories(response?.data);
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
        <h2>{getcategories?.shop?.name}</h2>
        {getcategories?.category?.length !== 0 ? (
          getcategories?.category?.map((e) => {
            return (
              <>
                <div className="row">
                  <div className="col-md-8">
                    <br />
                    <Link to={"#"} className="my-2">
                      {" "}
                      <h4 className="text-start text-capitalize ps-2">
                        {e?.name}
                      </h4>
                    </Link>
                    <div className="row my-2">
                      {e?.sub_categories.length !== 0 ? (
                        e.sub_categories.map((e) => {
                          return (
                            <>
                              <div className="col-md-4  ">
                                <div className="bg-light shadow p-1  bg-body rounded">
                                  <Link
                                    to={`/Shop/${e.slug}`}
                                    onClick={() => {
                                      localStorage.setItem("true", false);
                                    }}
                                  >
                                    <h4 className="pt-2  ps-2">{e?.name}</h4>
                                    <img
                                      src={
                                        e?.image ? imgurl + e?.image : NewSofa
                                      }
                                      alt=""
                                      height={200}
                                      className="w-100 mb-2"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <h5 className="text-center my-5"> No Data Found hello</h5>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="my-5">
                      <h4>Media Storage</h4>
                      <h4>Media Storage</h4>
                      <h4>Media Storage</h4>
                      <h4>
                        Show All Media Storage Media Storage{" "}
                        <i class=" fa fa-chevron-right "></i>
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h5 className="text-center my-5"> No Data Found</h5>
        )}
      </div>
    </LayoutOne>
  );
};

export default Furniture;
