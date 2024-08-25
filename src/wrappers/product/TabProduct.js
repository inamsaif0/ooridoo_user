/* eslint-disable react/jsx-pascal-case */
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "../../components/section-title/SectionTitle";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Shop from "./Shop";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import Ideas from "./Ideas";
import LatestStory from "./LatestStory";
import Photos from "./Photos";
import Professionals_Near from "./Professionals Near";
import Professionals_Local from "./Professionals Local";
import VerifeidTV from "./VerifeidTV";
import CategoryfourSlider from "../category/CategoryFourSlider";
import ProductGridList from "./ProductgridList";
import ProductGridListSingle from "../../components/product/ProductShop";
import  Swiper, { SwiperSlide } from "../../components/swiper";
import SwiperSlider from "../../components/swiper";
import ProductImageGallerySlider from "../../components/product/ProductImageGallerySlider";
const TabProduct = (spaceTopClass, spaceBottomClass, bgColorClass) => {
  const [getfunctionality, setGetfunctionality] = useState([]);
  const [imgurl, setImgurl] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    try {
      setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}websitefunctionality`,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          setImgurl(response?.data?.imagePath);
          setGetfunctionality(response?.data?.websiteFunctionality);
          setLoader(false);
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
        });
    } catch (error) {
      setLoader(false);
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
  }, []);

  const myproduct =[
    {
    name:'iphone',
    image:'img1',
    users_count:'2'

  },
  {
    name:'iphone2',
    image:'http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'2'

  },
  {
    name:'iphone3',
    image:'	http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'22'

  },
  {
    name:'iphone4',
    image:'img1',
    users_count:'23'

  }
]

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
      "/assets/img/product/fashion/2.jpg",
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
      "/assets/img/product/cosmetics/4.jpg",
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
      "/assets/img/product/handmade/4.jpg",
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
      "/assets/img/product/accessories/10.jpg",
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
      "/assets/img/product/cake-shop/3.jpg",
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
      "/assets/img/product/cake-shop/3.jpg",
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
      "/assets/img/product/pet-food/3.jpg",
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
      "/assets/img/product/medical/3.jpg",
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

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

  return (
    <>
      {loader ? (
        <div className="flone-preloader-wrapper">
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
      <div
        className={clsx(
          "product-area",
          spaceTopClass,
          spaceBottomClass,
          bgColorClass
        )}
      >
        <div className="container">
          {/* <SectionTitle
            titleText="Here’s what you can do on Ooridoo"
            positionClass="text-center"
          />

          <div className="row my-3">
            {myproduct
              ? myproduct.map((e) => {
                  return (
                    <>
                      <div className="col-md-3 mt-2">
                        <div
                          className="city-bx align-items-end d-flex bg-hardcore"
                          style={{
                            position: "relative",
                            backgroundImage: `url(${imgurl + e.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div class="city-info">
                            <h5>{e.name}</h5>
                          </div>{" "} 
                        </div>
                      </div>
                    </>
                  );
                })
              : null}
          </div> */}

          {/* <Shop /> */}
          <CategoryfourSlider />
          {/* <div className={clsx("related-product-area", spaceBottomClass)}>
          <div className="container">
           {
            Myproduct?.length ? (

              <Swiper options={settings}>
                <SwiperSlider key={'1'}>
                 <ProductGridListSingle
          products={Myproduct}
          ProductLenght={Myproduct?.length}
          spaceBottomClass="mb-25"
        />
                 </SwiperSlider>
            
              
          </Swiper>
            ): null


           }
             </div>
             </div> */}

{/* {
            Myproduct?.length ? (

              <Swiper options={settings}>
              {Myproduct.map(product => (
                // <>
                <SwiperSlider key={product.id}>
                 <ProductGridListSingle
          products={Myproduct}
          ProductLenght={Myproduct?.length}
          spaceBottomClass="mb-25"
        />
                 </SwiperSlider>
            
              ))
              }
          </Swiper>
            ): null


           } */}

{/* {
  Myproduct?.length ? (
    <Swiper options={settings}>
      {Myproduct.map(product => (
        <SwiperSlide key={product.id}>
          <ProductGridListSingle
            products={product}  // Passing the single product instead of the whole array
            ProductLenght={Myproduct?.length}
            spaceBottomClass="mb-25"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null
} */}


         
    

          {/* <Professionals_Near /> */}
          {/* <Professionals_Local /> */}
          {/* <Ideas /> */}
          <LatestStory />
          {/* <ProductImageGallerySlider product={''} /> */}
          {/* <Photos /> */}
          {/* <VerifeidTV /> */}
        </div>
      </div>
      {/* <Tab.Container defaultActiveKey="bestSeller">
              <Nav
                variant="pills"
                className="product-tab-list pt-30 pb-55 text-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="newArrival">
                    <h4>Shop by Department</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bestSeller">
                    <h4>Browse Professionals Near You</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="saleItems">
                    <h4>Contact a Local Professional</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container> */}
      <style>{}</style>
    </>
  );
};
TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};
export default TabProduct;
