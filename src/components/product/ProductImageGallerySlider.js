import PropTypes from "prop-types";
import Swiper, { SwiperSlide } from "../../components/swiper";
import BaseUrl from "../../BaseUrl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { cartFlagfunction } from "../../store/slices/productDetail-slice";
import { Email, Facebook, Pinterest, Twitter } from "@material-ui/icons";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";
import "./style.css"

// Custom next arrow component (no additional styling)
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      &gt;
    </div>
  );
}

// Custom prev arrow component (no additional styling)
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      &lt;
    </div>
  );
}

const ProductImageGallerySlider = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gallerySwiperParams = {
    spaceBetween: 15,
    slidesPerView: 1, // Show only 1 image at a time
    loop: true,
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  };

  const thumbnailSwiperParams = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  };

  const handleAddtoCart = async (item) => {
    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));

    if (!token) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login');
      return;
    }
    if (item?.quantity == 0) {
      toast.error("Item is out of stock currently. Try later")
    }

    const requestBody = {
      productId: item?._id,
      userId: UserId,
    };

    try {
      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/cart/add-to-cart`,
        data: requestBody,
        headers: { token: token, "Accept": "application/json" },
      };

      const response = await axios(config);
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true));
      } else {
        toast.error(response?.data?.message || "Failed to add to cart.");
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: error?.response?.data?.message || "Something went wrong!",
        position: "top-right",
        timer: 3000,
      });
    }
  };

  const handleAddtoFavorite = async (item) => {
    const token = JSON.parse(localStorage.getItem('Token'));

    if (!token) {
      toast.error("Please Login to Add to Favorites.");
      navigate('/login');
      return;
    }

    const requestBody = {
      productId: item?._id,
      device_token: '',
    };

    try {
      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/favourite/add-to-favourite`,
        data: requestBody,
        headers: { token: token, "Accept": "application/json" },
      };

      const response = await axios(config);
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true));
      } else {
        toast.error(response?.data?.message || "Failed to add to favorites.");
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        icon: "error",
        title: error?.response?.data?.message || "Something went wrong!",
        position: "top-right",
        timer: 3000,
      });
    }
  };

  return (
    <div className="product-details-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
      {/* Product Image Slider */}
      <div className="product-large-image-wrapper" style={{ flex: "1 1 35%", borderRadius: "5px", height: "auto", }}>
        {product?.media?.length ? (
          <>
            {/* Main Image Swiper */}
            <Swiper options={gallerySwiperParams}>
              {product?.media?.map((single, key) => (
                <SwiperSlide key={key}>
                  <div className="single-image" style={{ height: "70vh", display: "flex", justifyContent: "center", width: "100%" }}>
                    <img src={`${BaseUrl.baseurl}/${single.file}`} alt="" style={{ height: "100%", width: "auto", objectFit: "contain" }} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ margin: "15px auto", textAlign: "center" }}>
              <Swiper options={thumbnailSwiperParams}>
                {product?.media?.map((single, key) => (
                  <SwiperSlide key={key}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img
                        src={`${BaseUrl.baseurl}/${single.file}`}
                        alt="Product Thumbnail"
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          objectFit: "cover",
                        }}
                        onClick={() => setSelectedImageIndex(key)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


            {/* Thumbnail Swiper */}
          </>
        ) : null}
      </div>

      {/* Product Details Section */}
      <div className="product-details" style={{ flex: "1 1 60%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "600px", }}>
        <h2>{product?.title || "Product Title"}</h2>
        <span>Price: <b>{product?.price} ₩</b></span>
        <p style={{ fontStyle: "italic", marginBottom: "10px" }}>by {product?.author || "Author Name"}</p>
        <p>{product?.description || "Product Description goes here."}</p>

        <span className="my-2"><b>Schedule Arrival</b>: in 1 day</span>
        <span className="my-2"><b>SKU</b>: {product?.sku || "not found"}</span>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span><b>Share</b>:</span>
          <BsTwitter size={24} style={{ margin: "0px 5px", color: "#1DA1F2" }} />
          <Facebook size={24} style={{ margin: "0px 5px", color: "#1877F2" }} />
          <Pinterest size={24} style={{ margin: "0px 5px", color: "#E60023" }} />
          <Email size={24} style={{ margin: "0px 5px", color: "#000000" }} />
        </div>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: product?.quantity !== 0 ? "#ff6347" : "#f5a191", // Lighter color when disabled
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: product?.quantity !== 0 ? "pointer" : "not-allowed",
              opacity: product?.quantity !== 0 ? 1 : 0.6
            }}
            onClick={() => product?.quantity !== 0 && handleAddtoCart(product)}
          >
            {product.quantity !== 0 ? "Add to Cart" : "Out of Stock"}
          </button>
          <button style={{ padding: "10px 20px", backgroundColor: "transparent", color: "red", border: "none", borderRadius: "5px", cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => handleAddtoFavorite(product)}>
            <i className={product?.isFavourite ? "pe-7s-like2" : "pe-7s-like"} style={{ fontSize: "25px", marginRight: "10px", cursor: "pointer" }} />
            <span>Add to wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductImageGallerySlider.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        file: PropTypes.string,
      })
    ),
  }),
};

export default ProductImageGallerySlider;
