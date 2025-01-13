import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductRating from "../../components/product/sub-components/ProductRating";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc, ReviewData, ReduxProductData, fetchReviews }) => {
  
  
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    detail: "",
    customError: false,
    rating:0
  });
  const LoginTabRef = useRef(null);
  const navigate = useNavigate()

  const [Loader, setLoader] = useState(false)

  console.log('formData', formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleSubmitAddReviews = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));
    if(token == undefined){
      toast.error( "Please Login to add review.");
      navigate('/login-signup')
      return
    }

    const { detail ,rating } = formData;

    if (!detail) {
      setFormData((prev) => ({
        ...prev,
        customError: true,
      }));
      return;
    }

    const requestBody = {
      detail: formData?.detail,
      rating: rating || 0 ,
      productId: ReduxProductData._id,
    };

    try {
      setLoader(true);

      const token = JSON.parse(localStorage.getItem('Token'));
      if (!token) throw new Error("Authentication token is missing");

      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/review/add-review`,
        data: requestBody,
        headers: {
          token: token,
          "Accept": "application/json",
        },
      };

      const response = await axios(config);
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        fetchReviews()
        setFormData({
          detail: '',
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
  };
  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  {t("shop.product_page.additional_info.heading")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription" ref={LoginTabRef} >{t("shop.product_page.description")}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">{`${t("shop.product_page.reviews.heading")} (${ReviewData?.length || 0})`}</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              {ReduxProductData?.productType === "Book" ? (<Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li>
                      <span>{t("shop.product_page.additional_info.author")}</span> {ReduxProductData?.author}
                    </li>
                    <li>
                      <span>{t("shop.product_page.additional_info.dimension")}</span>{ReduxProductData?.dimension}{" "}
                    </li>
                    <li>
                      <span>{t("shop.product_page.additional_info.no_of_pages")}</span> {ReduxProductData?.noofpages}
                    </li>
                    {/* <li>
                      <span>Other Info</span> American heirloom jean shorts pug
                      seitan letterpress
                    </li> */}
                  </ul>
                </div>
              </Tab.Pane>) : (<Tab.Pane eventKey="additionalInfo">No Additional Info</Tab.Pane>)}
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  {/* Reviews */}
                  <div className="col-lg-7">
                    <div className="review-wrapper">
                      {
                        Loader ? (
                          <div className="flone-preloader-wrapper">
                            <div className="flone-preloader">
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        ) : (
                          ReviewData?.length > 0 ? (
                            ReviewData.map((data) => (
                              <div className="single-review" style={{ marginBottom: '10px' }} key={data?._id}>
                                <div className="review-img">
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/testimonial/book14.jpg`}
                                    style={{ height: '88px', width: '99px', objectFit: 'cover' }}
                                    alt="User review"
                                  />
                                </div>
                                <div className="review-content">
                                  <div className="review-top-wrap">
                                    <div className="review-left">
                                      <div className="review-name">
                                        <h4>{data?.userId?.fullName}</h4>
                                      </div>
                                      <div className="review-rating">
                                        <ProductRating setFormData={()=>{}} FormData={data?.rating}
                                        onlyView={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="review-bottom">
                                    <p>{data?.detail}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>{t("shop.product_page.reviews.no_reviews")}</p>
                          )
                        )
                      }


                      {/* <div className="single-review">
                   

                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="single-review child-review">
                        <div className="review-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/testimonial/2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* form Review */}
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>{t("shop.product_page.reviews.add_review")}</h3>
                      <div className="ratting-form">
                        <form onSubmit={handleSubmitAddReviews}>
                          <div className="star-box">
                            <span>{t("shop.product_page.reviews.review_form.your_rating")}</span>
                            {/* <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> */}
                            <ProductRating setFormData={setFormData} FormData={formData.rating} />
                          </div>
                          <div className="row">
                            {/* <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div> */}
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="detail"
                                  placeholder={t("shop.product_page.reviews.review_form.message")}
                                  defaultValue={""}
                                  value={formData?.detail}
                                  onChange={handleInputChange}
                                />
                                {!formData?.customError || !formData?.detail && (
                                  <p>{t("shop.product_page.reviews.review_form.error_message")}</p>
                                )}

                                <input type="submit" value={t("shop.product_page.reviews.review_form.submit")} />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
