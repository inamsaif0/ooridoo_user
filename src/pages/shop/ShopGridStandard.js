import { Fragment, useEffect, useState } from "react";
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import SEO from "../../components/seo";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import ShopProducts from "../../wrappers/product/ShopProducts";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const ShopGridStandard = () => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [productLenght, getProductLenght] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { products } = useSelector((state) => state.product);

  const pageLimit = 15;
  // let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);


  const [selectedCategory, setSelectedCategory] = useState(null);

  const [getProductData, setGetProductData] = useState([]);

  const [getCategoriesData, setGetCategoriesData] = useState([]);

  const [PaginationData,setPaginationData]=useState()

  const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);

const { slug } = useParams();

console.log('slug==>',slug)

const [searchQuery, setSearchQuery] = useState(""); // Add search query state
  console.log('PaginationData===>',PaginationData)

  console.log('getProductData==>',getProductData)

  console.log('getProductData==>currentData',currentData)

    // Fetch products on initial render or when the selected category changes
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          // let url = `${BaseUrl.baseurl}/api/products/get?page=1&limit=10`;
          // if (selectedCategory) {
          //   url += `&category=${selectedCategory}`;
          // }
          let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      else if(slug == 1 || slug == 2 ){
        url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
      } 
      else{
        url += `&category=${slug}`;
      }
          const config = {
            method: "get",
            url: url,
          };
  
          const response = await axios(config);
          console.log(response, "Product Data");
          setGetProductData(response?.data?.data?.result);
          setPaginationData(response?.data?.data?.pagination)
        } catch (error) {
          console.error(error);
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
  
      fetchProducts();
    }, [selectedCategory,currentPage, limit,slug]);
  

// categories data
  useEffect(() => {
    try {
      var config = {
        method: "get",
        // url: `${BaseUrl.baseurl}products?shop=${slug}`,
         url: `${BaseUrl.baseurl}/api/categories/get`,
      };
      axios(config)
        .then(function (response) {
          // console.log(response?.data?.data?.result, "CategoryData");
          // setImgurl(response?.data?.subcatoryimagePath);
          setGetCategoriesData(response?.data?.data?.result)
          // setGetProductData(response?.data?.data?.result);
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
  }, []);

  
  console.log('ahmedTotal Records:', PaginationData?.totalItems);
  console.log('ahmedPage Limit:', limit);
  console.log('ahmedCurrent Page:', currentPage);

  console.log(productLenght, "getProductLenght");
  return (
    <Fragment>
      <SEO
        titleTemplate="Shop Page"
        description="Shop page of Ooridoo"
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb 
                    pages={[
                        {label: "Home", path: process.env.PUBLIC_URL + "/" },
                        {label: "Shop", path: process.env.PUBLIC_URL + pathname }
                    ]} 
                /> */}

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={getCategoriesData}
                  setSearchQuery={setSearchQuery}
                  setSelectedCategory={setSelectedCategory}
                  getSortParams={getSortParams}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={productLenght}
                  sortedProductCount={productLenght}
                />

                {/* shop page content default */}
                <ShopProducts
                  layout={layout}
                  ProductLenght={getProductData?.length}
                  products={getProductData}
                />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  {/* <Paginator
                    totalRecords={PaginationData?.totalItems}
                    pageLimit={PaginationData?.totalPages}
                    pageNeighbours={PaginationData?.nextPage}
                    setOffset={setOffset}
                    currentPage={PaginationData?.currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  /> */}
        {/* <Paginator
                    totalRecords={PaginationData?.totalItems}
                    pageLimit={limit}
                    pageNeighbours={2}
                    currentPage={PaginationData?.currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  /> */}
                   {/* <Paginator
                    totalRecords={PaginationData?.totalItems}
                    pageLimit={limit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={PaginationData?.currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  /> */}
                  {PaginationData?.totalPages > 1 && (
  <Paginator
    totalRecords={PaginationData?.totalItems}
    pageLimit={limit}
    pageNeighbours={2}
    setOffset={setOffset}
    // currentPage={currentPage}
    currentPage={PaginationData?.currentPage}
    setCurrentPage={setCurrentPage}
    pageContainerClass="mb-0 mt-0"
    pagePrevText="«"
    pageNextText="»"
  />
)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridStandard;
