import clsx from "clsx";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";

import axios from "axios";
import { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import BaseUrl from "../BaseUrl";
import ProductRating from "../components/product/sub-components/ProductRating";
import LayoutOne from "../layouts/LayoutOne";
import { toast } from "react-toastify";

const PhotosDetails = ({ spaceTopClass, spaceBottomClass }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [getProduct, setGetProduct] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const { slug } = useParams("");
  const [like, setLike] = useState(false);
  const liked = () => {
    setLike(!like);
    if (like !== true) {
      toast("❤️ Added To Liked!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("💔 Removed Form Like!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}ideas?subcategory=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.ideaImagePath);
          setGetProduct(response?.data?.professionaldea);
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
  console.log(getProduct, "setGetProduct");
  return (
    <LayoutOne>
      <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
        <div className="container">
          <div className="row my-2">
            <div className="col-lg-7 col-md-7">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                zoom={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                className="mySwiper2"
              >
                {getProduct.length !== 0 ? (
                  getProduct?.map((e) => {
                    return (
                      <>
                        {e?.idea_images.map((e) => {
                          return (
                            <>
                              <SwiperSlide>
                                <div className="swiper-zoom-container">
                                  <img
                                    src={imgurl + e.image}
                                    alt={e.image}
                                    height={500}
                                    className="mw-100 img-thumnail"
                                  />
                                </div>
                                {like ? (
                                  <AiFillHeart
                                    size={30}
                                    onClick={liked}
                                    className="text-danger "
                                    style={{
                                      position: "fixed",
                                      top: "87%",
                                      left: "3%",
                                    }}
                                  />
                                ) : (
                                  <AiOutlineHeart
                                    size={30}
                                    onClick={liked}
                                    className="text-white "
                                    style={{
                                      position: "fixed",
                                      top: "87%",
                                      left: "3%",
                                    }}
                                  />
                                )}
                              </SwiperSlide>
                              ;
                            </>
                          );
                        })}
                      </>
                    );
                  })
                ) : (
                  <h5>No Data Found</h5>
                )}
              </Swiper>
              <br />
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={1}
                slidesPerView={8}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {getProduct !== 0 ? (
                  getProduct.map((e) => {
                    return (
                      <>
                        {e?.idea_images.map((e) => {
                          return (
                            <>
                              <SwiperSlide>
                                <img
                                  src={imgurl + e.image}
                                  alt={e.image}
                                  className="mw-100 img-thumbnail"
                                  style={{ height: 50 }}
                                />
                              </SwiperSlide>
                              ;
                            </>
                          );
                        })}
                      </>
                    );
                  })
                ) : (
                  <h5>No Data Found</h5>
                )}
              </Swiper>
            </div>
            <div className="col-lg-5 col-md-5 mt-5">
              {/* product description info */}
              <div className="product-details-content ml-70">
                {getProduct !== 0 ? (
                  getProduct.map((e) => {
                    return (
                      <>
                        <div className="d-flex mb-3">
                          <img
                            src={`https://verifiedcalendar.dev-hi.xyz/storage/profile/${e.user.image}`}
                            alt="no img found"
                            height={30}
                            width={30}
                            className="border-1 border "
                            style={{ borderRadius: 50 }}
                          />
                          &nbsp;&nbsp;
                          <h2 className="pt-1 text-success">
                            {e.user.username}
                          </h2>
                        </div>

                        <ProductRating />
                        <div className=" col-md-12">
                          <button className="btn btn-success text-center btn-block w-100 my-2">
                            Send Message &nbsp;
                            <AiOutlineSend size={25} />
                          </button>
                        </div>
                        <h4 className="text-dark mt-3 text-capitalize">
                          {e?.name}
                        </h4>
                        <h5 className="text-capitalize">{`${e.category.name},${e.user.business_address.state}`}</h5>
                      </>
                    );
                  })
                ) : (
                  <h5>No Data Found</h5>
                )}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default PhotosDetails;
