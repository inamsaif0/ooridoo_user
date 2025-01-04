import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../../BaseUrl";
import Rating from "./sub-components/ProductRating";
import { useDispatch } from "react-redux";
import { cartFlagfunction, setProductsDetail } from "../../store/slices/productDetail-slice";
import { toast } from "react-toastify";
import { Card } from "react-bootstrap";
import "./style.css"
import { useTranslation } from "react-i18next";

const ProductGridListSingle = ({ spaceBottomClass, ProductLenght, products }) => {

  const navigate = useNavigate()

  const [modalShow, setModalShow] = useState(false);

  const router = useNavigate()
  const dispatch = useDispatch()

  const {t} = useTranslation()

  console.log('Myproduct==>', products)

  console.log('products==>api==>response==>', products)

  const handleDetailPage = (e) => {

    console.log('e==>data', e)

    dispatch(setProductsDetail(e))

    router('/productDetail')
  }



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
    // Submit to API
    // fetch(`${BaseUrl.baseurl}/api/cart/add-to-cart`, {
    //   method: "POST",
    //   headers: {
    //     token: token,
    //     "Accept": "application/json",
    //   },
    //   // body: JSON.stringify(requestBody),
    //   data: requestBody,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('response==>',data)
    //     // Handle success
    //     if(data?.status == true){
    //       toast.success(data?.message);
    //       console.log("Success:", data);
    //     }
    //     else{
    //       toast.error(data?.message);
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error("Error:", error);
    //   });



    try {
      // setLoader(true);

      // const token = JSON.parse(localStorage.getItem('Token'));
      // if (!token) throw new Error("Authentication token is missing");

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
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)} style={{ padding: "10px" }}>
        <div className="row" style={{}}>
          {products.length > 0 ? (
            products.map((item, index) => {
              return (
                <div key={index} className="col-xl-4 col-md-6 col-sm-6 d-flex align-items-stretch">
                  <div className="shadow p-3 mb-5 bg-body rounded w-100">
                    <div className="product-img">
                      <div onClick={() => handleDetailPage(item)}>
                        <img
                          className="responsive-image"
                          variant="top"
                          src={`${BaseUrl.baseurl + '/' + item?.media[0]?.file}`}
                          alt=""
                          style={{
                            borderRadius: "10px",
                            width: "100%",
                            // height: "350px",
                            objectFit: "fill"
                          }}
                        />
                        {/* <img
                          className="default-img"
                          src={`${BaseUrl.baseurl + '/' + item?.media[0]?.file}`}
                          alt=""
                          style={{
                            borderRadius: "10px", width: "100%", height: "350px",
                          }}
                        /> */}
                      </div>
                      <div className="product-img-badges">
                        {item?.saleCount ? <span className="bg-success">{t("global.sale")}</span> : null}
                        {item?.new ? <span className="purple">{t("global.new")}</span> : null}
                      </div>
                      <div className="product-action">
                        <div className="pro-same-action pro-wishlist">
                          <button title={"Add to wishlist"} onClick={(e) => handleAddtoFavorite(e, item)}>
                            <i className="pe-7s-like" />
                          </button>
                        </div>
                        <div className="pro-same-action pro-cart">
                          {item?.quantity === 0 ? (
                            <button disabled className="active">
                              {t("global.outofstock")}
                            </button>
                          ) : (
                            <button onClick={(e) => handleAddtoCart(e, item)}>
                              <i className="pe-7s-cart"></i>
                              {t("global.addtocart")}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="product-content text-start" >
                      <h3 style={{
                        fontWeight: '400'
                        // fontWeight: 'bold'
                      }}>{item?.title}</h3>
                      <h3>
                        <i className="fa fa-won"></i>
                        <span>{item?.price}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h5>No Data Found</h5>
          )}
        </div>
      </div>
    </Fragment>

  );
};

ProductGridListSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.shape({}),
};

export default ProductGridListSingle;



// const [getProduct, setGetProduct] = useState([]);
// const [imgurl, setImgurl] = useState("");
// const { slug } = useParams("");
// useEffect(() => {
//   try {
//     var config = {
//       method: "get",
//       url: `${BaseUrl.baseurl}productFilter?${
//         localStorage.getItem("true") === "true"
//           ? `category=${slug}`
//           : `subcategory=${slug}`
//       }`,
//     };
//     axios(config)
//       .then(function (response) {
//         console.log(response, "ideas");
//         setImgurl(response?.data?.imagePath);
//         setGetProduct(response?.data?.products);
//         ProductLenght(response?.data?.products.length);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//     Swal.fire({
//       showCloseButton: true,
//       toast: true,
//       icon: "error",
//       title: error?.response?.data?.message,
//       animation: true,
//       position: "top-right",
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener("mouseenter", Swal.stopTimer);
//         toast.addEventListener("mouseleave", Swal.resumeTimer);
//       },
//     });
//   }
// }, [ProductLenght, slug]);
// console.log(getProduct, imgurl, "getproduct");

// const Myproduct = [
//   {
//     id: "44",
//     sku: "asdf166",
//     name: "Lorem ipsum flower one",
//     price: 1.5,
//     discount: 20,
//     new: true,
//     rating: 4,
//     saleCount: 10,
//     category: ["flower"],
//     tag: ["flower"],
//     stock: 6,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/flowers/2.jpg",
//       "/assets/img/product/flowers/3.jpg",
//       "/assets/img/product/flowers/4.jpg",
//       "/assets/img/product/flowers/5.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "63",
//     sku: "asdf185",
//     name: "Lorem ipsum cosmetics four",
//     price: 1.5,
//     discount: 0,
//     new: false,
//     rating: 4,
//     saleCount: 20,
//     category: ["cosmetics"],
//     tag: ["cosmetics"],
//     stock: 10,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/cosmetics/5.jpg",
//       "/assets/img/product/cosmetics/6.jpg",
//       "/assets/img/product/cosmetics/7.jpg",
//       "/assets/img/product/cosmetics/8.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "83",
//     sku: "asdf205",
//     name: "Lorem ipsum handmade four",
//     price: 2.13,
//     discount: 0,
//     new: true,
//     rating: 3,
//     saleCount: 14,
//     category: ["handmade"],
//     tag: ["handmade"],
//     stock: 12,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/handmade/5.jpg",
//       "/assets/img/product/handmade/6.jpg",
//       "/assets/img/product/handmade/7.jpg",
//       "/assets/img/product/handmade/8.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "77",
//     sku: "asdf199",
//     name: "Lorem ipsum accessories ten",
//     price: 2.2,
//     discount: 0,
//     new: true,
//     rating: 5,
//     saleCount: 19,
//     category: ["accessories"],
//     tag: ["accessories"],
//     stock: 30,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/accessories/11.jpg",
//       "/assets/img/product/accessories/12.jpg",
//       "/assets/img/product/accessories/1.jpg",
//       "/assets/img/product/accessories/2.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "102",
//     sku: "asdf224",
//     name: "Lorem ipsum cake three",
//     price: 2.4,
//     discount: 10,
//     new: false,
//     rating: 5,
//     saleCount: 30,
//     category: ["cakes"],
//     tag: ["cakes"],
//     stock: 10,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/cake-shop/4.jpg",
//       "/assets/img/product/cake-shop/5.jpg",
//       "/assets/img/product/cake-shop/6.jpg",
//       "/assets/img/product/cake-shop/7.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "110",
//     sku: "asdf224",
//     name: "Lorem ipsum cake three",
//     price: 2.4,
//     discount: 10,
//     new: false,
//     rating: 5,
//     saleCount: 30,
//     category: ["cakes"],
//     tag: ["cakes"],
//     stock: 10,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/cake-shop/4.jpg",
//       "/assets/img/product/cake-shop/5.jpg",
//       "/assets/img/product/cake-shop/6.jpg",
//       "/assets/img/product/cake-shop/7.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "118",
//     sku: "asdf232",
//     name: "Lorem ipsum pet food three",
//     price: 2.4,
//     discount: 10,
//     new: false,
//     rating: 5,
//     saleCount: 30,
//     category: ["pet food"],
//     tag: ["pet food"],
//     stock: 10,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/pet-food/4.jpg",
//       "/assets/img/product/pet-food/5.jpg",
//       "/assets/img/product/pet-food/6.jpg",
//       "/assets/img/product/pet-food/7.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
//   {
//     id: "126",
//     sku: "asdf240",
//     name: "Lorem ipsum medical three",
//     price: 2.4,
//     discount: 10,
//     new: false,
//     rating: 5,
//     saleCount: 30,
//     category: ["medical"],
//     tag: ["medical"],
//     stock: 10,
//     image: [
//       "/assets/img/product/flowers/book4.jpg",
//       "/assets/img/product/medical/4.jpg",
//       "/assets/img/product/medical/5.jpg",
//       "/assets/img/product/medical/6.jpg",
//       "/assets/img/product/medical/7.jpg",
//     ],
//     shortDescription:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     fullDescription:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//   },
// ];
