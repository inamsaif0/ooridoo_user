import clsx from "clsx";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";

import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";

const ProductImageDescription = ({ spaceTopClass, spaceBottomClass }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [getProduct, setGetProduct] = useState([]);
  const [imgurl, setImgurl] = useState("");
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
          setImgurl(response?.data?.imagePath);
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

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
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
              {getProduct
                ? getProduct.map((e) => {
                  return (
                    <>
                      {e?.product_images.map((e) => {
                        return (
                          <>
                            <SwiperSlide>
                              <div className="swiper-zoom-container">
                                <img
                                  src={imgurl + e.image}
                                  alt={e.image}
                                  height={500}
                                  className="mw-100"
                                  style={{ borderRadius: "10px" }}
                                />
                              </div>
                            </SwiperSlide>
                            ;
                          </>
                        );
                      })}
                    </>
                  );
                })
                : null}
            </Swiper>
            <br />
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {getProduct
                ? getProduct.map((e) => {
                  return (
                    <>
                      {e?.product_images.map((e) => {
                        return (
                          <>
                            <SwiperSlide>
                              <img
                                src={imgurl + e.image}
                                alt={e.image}
                                className="w-100 img-thumbnail"
                                style={{ height: 50, borderRadius: "10px", }}
                              />
                            </SwiperSlide>
                            ;
                          </>
                        );
                      })}
                    </>
                  );
                })
                : null}
            </Swiper>
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageDescription;
