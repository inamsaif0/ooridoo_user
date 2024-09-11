import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSlider from "../../wrappers/product/ProductImageDescriptionSlider";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";

const ProductSlider = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const [loader, setLoader] = useState(false);
  const { products } = useSelector((state) => state.product);
  const product2 = products.find(product => product.id === '1');

  const [ReviewData, setReviewData] = useState([]);

  console.log('ReviewData==>',ReviewData)


  const { products: ReduxProductData } = useSelector((state) => state.productDetail);
  console.log('detailProducts==>', ReduxProductData)

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    try {
      setLoader(true);
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}/api/review/get-all-product-reviews/${ReduxProductData?._id}`,
      };
      axios(config)
        .then(function (response) {
          console.log('responseReviews==>', response);
          setReviewData(response?.data?.data)
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
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product page of Ooridoo"
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]}
        />

        {/* product description with image */}
        <ProductImageDescriptionSlider
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={ReduxProductData}
        />

        {/* product description tab */}
        {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product2.fullDescription}
          ReduxProductData={ReduxProductData}
          fetchReviews={fetchReviews}
        /> */}

       <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={ReduxProductData?.description}
          ReviewData={ReviewData}
          ReduxProductData={ReduxProductData}
          fetchReviews={fetchReviews}
        />

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};


export default ProductSlider;
