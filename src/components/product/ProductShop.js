import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../../BaseUrl";
import Rating from "./sub-components/ProductRating";

const ProductGridListSingle = ({ spaceBottomClass, ProductLenght }) => {
  const [getProduct, setGetProduct] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const { slug } = useParams("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}productFilter?${
          localStorage.getItem("true") === "true"
            ? `category=${slug}`
            : `subcategory=${slug}`
        }`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.imagePath);
          setGetProduct(response?.data?.products);
          ProductLenght(response?.data?.products.length);
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
  }, [ProductLenght, slug]);
  console.log(getProduct, imgurl, "getproduct");

  const Myproduct = [
    {
      id: "44",
      sku: "asdf166",
      name: "Lorem ipsum flower one",
      price: 1.5,
      discount: 20,
      new: true,
      rating: 4,
      saleCount: 10,
      category: ["flower"],
      tag: ["flower"],
      stock: 6,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/flowers/2.jpg",
        "/assets/img/product/flowers/3.jpg",
        "/assets/img/product/flowers/4.jpg",
        "/assets/img/product/flowers/5.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "63",
      sku: "asdf185",
      name: "Lorem ipsum cosmetics four",
      price: 1.5,
      discount: 0,
      new: false,
      rating: 4,
      saleCount: 20,
      category: ["cosmetics"],
      tag: ["cosmetics"],
      stock: 10,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/cosmetics/5.jpg",
        "/assets/img/product/cosmetics/6.jpg",
        "/assets/img/product/cosmetics/7.jpg",
        "/assets/img/product/cosmetics/8.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "83",
      sku: "asdf205",
      name: "Lorem ipsum handmade four",
      price: 2.13,
      discount: 0,
      new: true,
      rating: 3,
      saleCount: 14,
      category: ["handmade"],
      tag: ["handmade"],
      stock: 12,
      image: [
      "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/handmade/5.jpg",
        "/assets/img/product/handmade/6.jpg",
        "/assets/img/product/handmade/7.jpg",
        "/assets/img/product/handmade/8.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "77",
      sku: "asdf199",
      name: "Lorem ipsum accessories ten",
      price: 2.2,
      discount: 0,
      new: true,
      rating: 5,
      saleCount: 19,
      category: ["accessories"],
      tag: ["accessories"],
      stock: 30,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/accessories/11.jpg",
        "/assets/img/product/accessories/12.jpg",
        "/assets/img/product/accessories/1.jpg",
        "/assets/img/product/accessories/2.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "102",
      sku: "asdf224",
      name: "Lorem ipsum cake three",
      price: 2.4,
      discount: 10,
      new: false,
      rating: 5,
      saleCount: 30,
      category: ["cakes"],
      tag: ["cakes"],
      stock: 10,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/cake-shop/4.jpg",
        "/assets/img/product/cake-shop/5.jpg",
        "/assets/img/product/cake-shop/6.jpg",
        "/assets/img/product/cake-shop/7.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "110",
      sku: "asdf224",
      name: "Lorem ipsum cake three",
      price: 2.4,
      discount: 10,
      new: false,
      rating: 5,
      saleCount: 30,
      category: ["cakes"],
      tag: ["cakes"],
      stock: 10,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/cake-shop/4.jpg",
        "/assets/img/product/cake-shop/5.jpg",
        "/assets/img/product/cake-shop/6.jpg",
        "/assets/img/product/cake-shop/7.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "118",
      sku: "asdf232",
      name: "Lorem ipsum pet food three",
      price: 2.4,
      discount: 10,
      new: false,
      rating: 5,
      saleCount: 30,
      category: ["pet food"],
      tag: ["pet food"],
      stock: 10,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/pet-food/4.jpg",
        "/assets/img/product/pet-food/5.jpg",
        "/assets/img/product/pet-food/6.jpg",
        "/assets/img/product/pet-food/7.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: "126",
      sku: "asdf240",
      name: "Lorem ipsum medical three",
      price: 2.4,
      discount: 10,
      new: false,
      rating: 5,
      saleCount: 30,
      category: ["medical"],
      tag: ["medical"],
      stock: 10,
      image: [
        "/assets/img/product/flowers/book4.jpg",
        "/assets/img/product/medical/4.jpg",
        "/assets/img/product/medical/5.jpg",
        "/assets/img/product/medical/6.jpg",
        "/assets/img/product/medical/7.jpg",
      ],
      shortDescription:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      fullDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
  ];

  console.log('Myproduct==>',Myproduct)
  

  return (
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="row">
          {Myproduct.length > 0 ? (
            Myproduct.map((e) => {
              return (
                <>
                  <div className="col-xl-4 col-md-5 col-sm-6  shadow p-3 mb-5 bg-body rounded">
                    <div className="product-img">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          "/productDetail/" +
                          e?.id
                        }
                      >
                        <img
                          className="default-img"
                          src={e?.image[0]}
                          alt=""
                        />
                      </Link>
                      <div className="product-img-badges">
                        {e?.saleCount === 0 ||
                        e?.saleCount === null ? null : (
                          <span className="bg-success">Sale</span>
                        )}
                        {e?.new === 0 || e?.new === null ? null : (
                          <span className="purple">New</span>
                        )}
                      </div>

                      <div className="product-action">
                        <div className="pro-same-action pro-wishlist">
                          <button title={"Add to wishlist"}>
                            <i className="pe-7s-like" />
                          </button>
                        </div>
                        <div className="pro-same-action pro-cart">
                          {e?.stock === 0 ? (
                            <button disabled className="active">
                              Out of Stock
                            </button>
                          ) : (
                            <Link
                              // to={`${process.env.PUBLIC_URL}/shop/productDetail/" + ${e?.slug}`}
                              to={`#`}
                            >
                              <i className="pe-7s-cart"></i>
                              Add To Cart
                            </Link>
                          )}
                        </div>
                        <div className="pro-same-action pro-quickview">
                          <button title="Quick View">
                            <i className="pe-7s-look" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-content text-center">
                      <h3>
                        <Link
                          to={
                            process.env.PUBLIC_URL +
                            "/productDetail/" +
                            e?.id
                          }
                        >
                          {e?.name}
                        </Link>
                      </h3>
                      <Rating />

                      <div className="product-price">
                        <h4>
                          <i className="fa fa-dollar"></i>
                          {e?.saleCount === 0 || e?.saleCount === null ? (
                            <>
                              <span>{e?.regular_price}</span>
                            </>
                          ) : (
                            <>
                              <span>{e?.saleCount}</span>{" "}
                              <span className="old">{e?.regular_price}</span>
                            </>
                          )}
                        </h4>
                      </div>
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
      {/* <div className="shop-list-wrap mb-30">
        {Myproduct
          ? Myproduct.map((e) => {
              return (
                <>
                  <div className="row mb-5 shadow p-3 mb-5 bg-body rounded">
                    <div className="col-xl-4 col-md-5 col-sm-6 ">
                      <div className="product-list-image-wrap">
                        <div className="product-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/product/Furniture/" +
                              e?.slug
                            }
                          >
                            <img
                              className="default-img img-fluid"
                              src={imgurl + e?.product_images[0].image}
                              alt=""
                            />
                          </Link>
                          <div className="product-img-badges">
                            {e?.sale_price === 0 ||
                            e?.sale_price === null ? null : (
                              <span className="bg-success">Sale</span>
                            )}
                            {e?.is_new === 0 || e?.is_new === null ? null : (
                              <span className="purple">New</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-md-7 col-sm-6">
                      <div className="shop-list-content">
                        <h3>
                          <Link
                            to={
                              process.env.PUBLIC_URL +
                              "/product/Furniture/" +
                              e?.slug
                            }
                          >
                            {e?.name}{" "}
                          </Link>
                        </h3>
                        <div className="product-list-price">
                          <i className="fa fa-dollar"></i>

                          {e?.sale_price === 0 || e?.sale_price === null ? (
                            <>
                              <span>{e?.regular_price}</span>
                            </>
                          ) : (
                            <>
                              <span>{e?.sale_price}</span>{" "}
                              <span className="old">{e?.regular_price}</span>
                            </>
                          )}
                        </div>

                        <div className="rating-review">
                          <div className="product-list-rating">
                            <Rating />
                          </div>
                        </div>

                        <div
                          dangerouslySetInnerHTML={{ __html: e?.description }}
                        />

                        <div className="shop-list-actions d-flex align-items-center">
                          <div className="shop-list-btn btn-hover">
                            {e?.in_stock === 0 ? (
                              <button disabled className="active">
                                Out of Stock
                              </button>
                            ) : (
                              <Link
                                to={`${process.env.PUBLIC_URL}/product/Furniture/" + ${e?.slug}`}
                              >
                                <i className="pe-7s-cart"></i>
                                Add To Cart
                              </Link>
                            )}
                          </div>

                          <div className="shop-list-wishlist ml-10">
                            <button
                              className={"active"}
                              title={"Add to wishlist"}
                            >
                              <i className="pe-7s-like" />
                            </button>
                          </div>
                          <div className="shop-list-compare ml-10">
                            <button
                              className={"active"}
                              title={"Add to compare"}
                            >
                              <i className="pe-7s-shuffle" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div> */}
      {/* product modal */}
      {/* <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      /> */}
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
