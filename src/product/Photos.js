import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../BaseUrl";
import LayoutOne from "../layouts/LayoutOne";

const Photos = ({ spaceBottomClass }) => {
  const [imgurl, setImgurl] = useState("");
  const [photos, setPhotos] = useState([]);
  const { slug } = useParams("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}ideas?category=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.ideaImagePath);
          setPhotos(response?.data?.professionaldea);
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
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-capitalize my-3">
                {photos[0]?.category?.name}
              </h2>
              {photos.length !== 0 ? (
                photos.map((e) => {
                  return (
                    <>
                      <div className="col-xl-3 col-md-3 col-sm-6 shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="product-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              `/Photos/Details/${e.subcategory.slug}`
                            }
                          >
                            <img
                              className="default-img rounded "
                              style={{ height: 250 }}
                              src={imgurl + e?.idea_images[0]?.image}
                              alt=""
                            />
                          </Link>

                          <div className="product-action">
                            <div className="pro-same-action pro-cart w-100">
                              <button>
                                <i className="fa fa-save" />
                                &nbsp; &nbsp;Save Photo{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="product-content ">
                          <h5>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/Photos/Details/${e.subcategory.slug}`
                              }
                            >
                              {e?.user.username}
                            </Link>
                          </h5>

                          <Accordion flush>
                            <Accordion.Item
                              eventKey="0"
                              className="border-0 fs-6"
                            >
                              <Accordion.Header className="fs-6 ">
                                <p className="text-start">Descrption</p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <h5>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.
                                </h5>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <h5>No Data Found</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default Photos;
