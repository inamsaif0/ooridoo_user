import PropTypes from "prop-types";
import Swiper, { SwiperSlide } from "../../components/swiper";
import BaseUrl from "../../BaseUrl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { cartFlagfunction } from "../../store/slices/productDetail-slice";

const ProductImageGallerySlider = ({ product }) => {
  // swiper slider settings
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

  const navigate = useNavigate()
  // const router = useNavigate()
  const dispatch = useDispatch()


  const handleAddtoCart = async (e, item) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    const UserId = JSON.parse(localStorage.getItem('UserId'));
    console.log('userID', UserId, 'Token', token,)
    console.log('data==>', item)
    if (token == undefined) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login')
      return
    }

    const requestBody = {
      productId: item?._id,
      userId: UserId,
    }
    try {

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/cart/add-to-cart`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true))
      } else {
        // setLoader(false);
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
      // setLoader(false);
    }


  }

  const handleAddtoFavorite = async (e, item) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    // const UserId = JSON.parse(localStorage.getItem('UserId'));
    console.log('Token', token,)
    console.log('data==>', item)
    if (token == undefined) {
      toast.error("Please Login to Add to Cart.");
      navigate('/login')
      return
    }

    const requestBody = {
      productId: item?._id,
      device_token: '',
    }
    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/favourite/add-to-favourite`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        dispatch(cartFlagfunction(true))
      } else {
        // setLoader(false);
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
      // setLoader(false);
    }


  }

  return (
    <div
      className="product-details-container "
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        // padding: "20px",
      }}
    >
      {/* Product Image Slider */}
      <div
        className="product-large-image-wrapper product-large-image-wrapper--slider"
        style={{
          flex: "1 1 35%", // Adjust the flex basis to reduce slider width
          // border: "1px solid gray",
          borderRadius: "5px",
          height: "70vh",
          maxWidth: "500px", // Set a smaller maxWidth for the slider
        }}
      >
        {product?.media?.length ? (
          <Swiper options={gallerySwiperParams}>
            {product?.media?.map((single, key) => (
              <SwiperSlide key={key}>
                <div
                  className="single-image"
                  style={{
                    height: "70vh", // Ensure the container fills the height
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`${BaseUrl.baseurl}${"/"}${single.file}`}
                    className="img-fluid"
                    alt=""
                    style={{
                      height: "100%", // Ensure the image does not overflow the container's height
                      width: "auto",
                      objectFit: "contain", // Maintain aspect ratio inside the container
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>

      {/* Product Details Section */}
      <div
        className="product-details"
        style={{
          // border: "1px solid red",
          flex: "1 1 60%", // Adjust the flex basis for the details section
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "600px",
        }}
      >
        <h2>{product?.title || "Product Title"}</h2>
        <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
          by {product?.author || "Author Name"}
        </p>
        <p>{product?.description || "Product Description goes here."}</p>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff6347",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleAddtoCart}
          >
            Add to Cart
          </button>
          <button
            style={{
              padding: "10px 20px",
              // backgroundColor: "#ddd",
              color: "red",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleAddtoFavorite}
          >
            <i className="pe-7s-like" style={{ fontSize: "32px" }} />

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
