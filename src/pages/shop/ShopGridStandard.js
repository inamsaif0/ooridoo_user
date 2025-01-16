import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import Paginator from "react-hooks-paginator";
import { useDispatch, useSelector } from "react-redux";
import SEO from "../../components/seo";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import ShopProducts from "../../wrappers/product/ShopProducts";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useParams } from "react-router-dom";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { resetSelectedCategory, setSelectedCategory } from "../../store/slices/selectedCategory-slice";

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
  const [authors, setAuthors] = useState([])
  const [childSubCategory, setChildSubCategory] = useState([])
  const [reChildSubCategory, setReChildSubCategory] = useState([])
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.selectedCategoryId.selectedCategory);


  const pageLimit = 10;
  const location = useLocation();
  console.log("select category is",selectedCategory)

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
    // let allProducts = [...getProductData]
    let sortedProducts = getSortedProducts(currentData, sortType, sortValue);
    console.log(sortedProducts)
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setGetProductData(sortedProducts.slice(offset, offset + pageLimit));

    
  }, [offset, getProductData, sortType, sortValue, filterSortType, filterSortValue]);


  useEffect(() => {
    const authorsName = getProductData?.map(product => product.author)
    setAuthors(authorsName)
    
  }, [])

  // useEffect(() => {
  //   if (location.state?.selectedCategory) {
  //     dispatch(setSelectedCategory(location.state.selectedCategory));
  //   }
  // }, [location.state, dispatch]);

  useEffect(() => {
        // Reset the selected category when the route changes
        dispatch(resetSelectedCategory());
    }, [location.pathname]);
  
  

  // const [selectedCategory, setSelectedCategory] = useState(null);

  

  console.log('selectedCategory==>', selectedCategory)

  // const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState('english')

  console.log('selectedLanguage==>', selectedLanguage)

  const [getProductData, setGetProductData] = useState([]);

  const [getCategoriesData, setGetCategoriesData] = useState([]);

  console.log('getCategoriesData==>', getCategoriesData)

  const [PaginationData, setPaginationData] = useState()

  console.log("pagnitation data",PaginationData)

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { slug } = useParams();

  console.log('slug==>', slug)
  console.log('slug==>length', slug?.length)

  const [searchQuery, setSearchQuery] = useState(""); // Add search query state
  console.log('PaginationData===>', PaginationData)

  console.log('getProductData==>', getProductData)

  console.log('currentData==>', currentData)

  const [subCategoryId, setsubcategoryId] = useState()

  console.log('subCategoryId==>', subCategoryId)


  const [StopFlag, setStopFlag] = useState(false)

  console.log('testcaseflag', StopFlag)


  useEffect(useCallback(() => {
    console.log("searchQuery==>", searchQuery)
    const searchResults = currentData.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setGetProductData(searchResults)
  }), [searchQuery])


  // running code
  // Fetch products on initial render or when the selected category changes
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
  //   if (selectedCategory && !subCategoryId ) {
  //     url += `&category=${selectedCategory}`;
  //   }
  //   else if(selectedCategory && subCategoryId ){
  //     url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
  //   }
  //   else if(slug == 1 || slug == 2 ){
  //     url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
  //   } 
  //   else{
  //     url += `&category=${slug}`;
  //   }
  //       const config = {
  //         method: "get",
  //         url: url,
  //       };

  //       const response = await axios(config);
  //       console.log(response, "Product Data");
  //       setGetProductData(response?.data?.data?.result);
  //       setPaginationData(response?.data?.data?.pagination)
  //       setsubcategoryId('')
  //     } catch (error) {
  //       console.error(error);
  //       Swal.fire({
  //         showCloseButton: true,
  //         toast: true,
  //         icon: "error",
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: "top-right",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });
  //     }
  //   };

  //   fetchProducts();
  // }, [selectedCategory,currentPage, limit,slug,subCategoryId]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;

  //       if (selectedCategory && !subCategoryId && !StopFlag ) {
  //         // Case when only category is selected, but no subcategory
  //         console.log('testcasefirst')
  //         url += `&category=${selectedCategory}`;
  //       } 
  //       else if (selectedCategory && subCategoryId) {
  //         // Case when both category and subcategory are selected
  //         console.log('testcasesecond')
  //         url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
  //       } 
  //       else if ((slug == 1 || slug == 2) && (StopFlag == false )) {
  //         // Reset URL if slug is 1 or 2
  //         console.log('testcasethird')
  //         url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
  //       } 
  //       // else {
  //       //   // Handle category filtering by slug
  //       //   console.log('testcasefourth')
  //       //   url += `&category=${slug}`;
  //       // }

  //       const config = {
  //         method: "get",
  //         url: url,
  //       };

  //       const response = await axios(config);
  //       console.log(response, "Product Data");
  //       setGetProductData(response?.data?.data?.result);
  //       setPaginationData(response?.data?.data?.pagination);
  //       setsubcategoryId(''); // Reset subcategory after the request
  //     } catch (error) {
  //       console.error(error);
  //       Swal.fire({
  //         showCloseButton: true,
  //         toast: true,
  //         icon: "error",
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: "top-right",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });
  //     }
  //   };

  //   fetchProducts();
  // }, [selectedCategory, currentPage, limit, slug, subCategoryId]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;

  //       // If only category is selected, but no subcategory
  //       if (selectedCategory && !StopFlag) {
  //         console.log('testcasefirst');
  //         url += `&category=${selectedCategory}`;
  //       } 

  //       // If both category and subcategory are selected
  //       else if (selectedCategory && subCategoryId) {
  //         console.log('testcasesecond');
  //         url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
  //       } 

  //       // If slug is 1 or 2
  //       else if (slug == 1 || slug == 2) {
  //         console.log('testcasethird');
  //         url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
  //       }

  //       const config = {
  //         method: "get",
  //         url: url,
  //       };

  //       const response = await axios(config);
  //       console.log(response, "Product Data");
  //       setGetProductData(response?.data?.data?.result);
  //       setPaginationData(response?.data?.data?.pagination);
  //       setsubcategoryId(''); // Reset subcategory after the request
  //     } catch (error) {
  //       console.error(error);
  //       Swal.fire({
  //         showCloseButton: true,
  //         toast: true,
  //         icon: "error",
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: "top-right",
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });
  //     }
  //   };

  //   // Only call fetchProducts based on these rules:
  //   if (subCategoryId) {
  //     // Call when both category and subcategory are selected
  //     fetchProducts();
  //   } else if (selectedCategory) {
  //     // Call when only category is selected
  //     fetchProducts();
  //   } else if (slug) {
  //     // Call based on slug condition
  //     fetchProducts();
  //   }

  // }, [selectedCategory, subCategoryId, currentPage, limit, slug]);


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;

  //       // Check if only category is selected, and no subcategory is selected, and StopFlag is false
  //       if (selectedCategory && !subCategoryId && !StopFlag) {
  //         console.log('testcasefirst');
  //         url += `&category=${selectedCategory}`;
  //       } 
  //       // Check if both category and subcategory are selected
  //       else if (selectedCategory && subCategoryId) {
  //         console.log('testcasesecond');
  //         url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
  //       } 
  //       // Reset URL if slug is 1 or 2 and StopFlag is false
  //       else if ((slug == 1 || slug == 2) && (StopFlag == false)) {
  //         console.log('testcasethird');
  //         url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
  //       }

  //       console.log('url==>end',url)

  //       const config = {
  //         method: 'get',
  //         url: url,
  //       };

  //       const response = await axios(config);
  //       console.log(response, 'Product Data');
  //       setGetProductData(response?.data?.data?.result);
  //       setPaginationData(response?.data?.data?.pagination);
  //       setsubcategoryId(''); // Reset subcategory after the request
  //     } catch (error) {
  //       console.error(error);
  //       Swal.fire({
  //         showCloseButton: true,
  //         toast: true,
  //         icon: 'error',
  //         title: error?.response?.data?.message,
  //         animation: true,
  //         position: 'top-right',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener('mouseenter', Swal.stopTimer);
  //           toast.addEventListener('mouseleave', Swal.resumeTimer);
  //         },
  //       });
  //     }
  //   };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;

        // Check conditions for constructing the URL
        if (selectedCategory) { 
          // Only category selected, no subcategory
          console.log('Fetching products by category');
          url += `&category=${selectedCategory}`;
        } 
        // else if (selectedCategory && subCategoryId && !childSubCategory && !reChildSubCategory) { 
        //   // Both category and subcategory selected
        //   console.log('Fetching products by category and subcategory');
        //   url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
        // } else if (selectedCategory && subCategoryId && childSubCategory && !reChildSubCategory) {
        //   // Both category and subcategory selected
        //   console.log('Fetching products by category and subcategory');
        //   url += `&category=${selectedCategory}&subCategory=${subCategoryId}&childSubCategory=${childSubCategory}`;
        // } else if (selectedCategory && subCategoryId && childSubCategory && reChildSubCategory) {
        //   // Both category and subcategory selected
        //   console.log('Fetching products by category and subcategory');
        //   url += `&category=${selectedCategory}&subCategory=${subCategoryId}&childSubCategory=${childSubCategory}&reChildSubCategory=${reChildSubCategory}`;
        // }
        // else if (selectedCategory && subCategoryId) {
        //   // Both category and subcategory selected
        //   console.log('Fetching products by category and subcategory');
        //   url += `&category=${selectedCategory}&subCategory=${subCategoryId}`;
        // } 
        // else if (slug == 1 || slug == 2 && !selectedCategory) {
        //   // else if (slug == 1 || slug == 2 && !StopFlag) {
        //   // Handling specific slug cases (1 or 2)
        //   console.log('Fetching products by slug');
        //   url = `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`;
        // }
        // else if(slug !== 1 && slug !== 2){
        else if (slug?.length > 1) {
          console.log('Fetching products by slug not 1 and 2');
          console.log('i am running')
          url += `&category=${slug}`;
        }

        console.log('Final URL:', url);

        // API call
        const response = await axios.get(url);
        console.log('Product Data:', response);
        setGetProductData(response?.data?.data?.result);
        setPaginationData(response?.data?.data?.pagination);
        setCurrentData(response?.data?.data?.result)

        // Reset subcategory after successful fetch
        setsubcategoryId('');

      } catch (error) {
        console.error('Error fetching products:', error);
        Swal.fire({
          showCloseButton: true,
          toast: true,
          icon: 'error',
          title: error?.response?.data?.message || 'Error fetching products',
          animation: true,
          position: 'top-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
      }
    };

    // Only call fetchProducts if there's a selected category or slug
    if (selectedCategory || slug) {
      fetchProducts();
    }
  }, [selectedCategory, currentPage, limit, slug]);



  const GetHandleSubCategoryid = (id) => {
    console.log('hello==>', id)
    setsubcategoryId(id)
    setStopFlag(true)
  }


  useEffect(() => {

    if (StopFlag !== true) {
      try {
        var config = {
          method: "get",
          // url: `${BaseUrl.baseurl}products?shop=${slug}`,
          url: `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}`,
        };
        axios(config)
          .then(function (response) {
            // console.log(response?.data?.data?.result, "CategoryData");
            // setImgurl(response?.data?.subcatoryimagePath);
            setGetProductData(response?.data?.data?.result);
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
    }



  }, [slug]);


  // subcategory data
  useEffect(() => {

    if (subCategoryId && selectedCategory) {
      try {
        var config = {
          method: "get",
          // url: `${BaseUrl.baseurl}products?shop=${slug}`,
          url: `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}&category=${selectedCategory}&subCategory=${subCategoryId}`,
        };
        axios(config)
          .then(function (response) {
            // console.log(response?.data?.data?.result, "CategoryData");
            // setImgurl(response?.data?.subcatoryimagePath);
            setGetProductData(response?.data?.data?.result);
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
    }
  }, [selectedCategory, subCategoryId]);


  // childSubCategory data
  useEffect(() => {

    if (subCategoryId && selectedCategory && childSubCategory) {
      try {
        var config = {
          method: "get",
          // url: `${BaseUrl.baseurl}products?shop=${slug}`,
          url: `${BaseUrl.baseurl}/api/products/get?page=${currentPage}&limit=${limit}&category=${selectedCategory}&subCategory=${subCategoryId}&childSubCategory=${childSubCategory}`,
        };
        axios(config)
          .then(function (response) {
            // console.log(response?.data?.data?.result, "CategoryData");
            // setImgurl(response?.data?.subcatoryimagePath);
            setGetProductData(response?.data?.data?.result);
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
    }



  }, [selectedCategory, subCategoryId, childSubCategory]);

  // categories data
  useEffect(() => {
    try {
      var config = {
        method: "get",
        // url: `${BaseUrl.baseurl}products?shop=${slug}`,
        url: `${BaseUrl.baseurl}/api/categories/getAllCategories`,
      };
      axios(config)
        .then(function (response) {
          // console.log(response?.data?.data?.result, "CategoryData");
          // setImgurl(response?.data?.subcatoryimagePath);
          setGetCategoriesData(response?.data?.data)
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



  const [filterSubcategoryData, setFilterSubcategoryData] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      // Filter the subcategories based on the selected category
      const filterSubCategory = getCategoriesData?.filter(
        (a) => a?._id === selectedCategory
      );
      // Update the state with the filtered subcategories
      setFilterSubcategoryData(filterSubCategory);
    }
  }, [selectedCategory, getCategoriesData]);

  console.log('filterSubcategoryData==>State', filterSubcategoryData);

  // const filterSubCategory=getCategoriesData?.filter((a)=>a?._id == selectedCategory)

  // console.log('filterSubCategory==>',filterSubCategory)

    console.log("Sorting", sortType)
    console.log("Sorting", sortValue)

    console.log('subCategoryId', subCategoryId)
    console.log('childSUb', childSubCategory)
    console.log('reChildsuB', reChildSubCategory)

    console.log("data type one current data", currentData)
    console.log("data type two get product data", getProductData)


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

        <div className="shop-area pt-15 pb-100">
          <div className="container">
            <div className="row " >
              <BrandLogoSliderOne 
              spaceBottomClass="pb-2" 
              GetHandleSubCategoryid={GetHandleSubCategoryid} 
              getCategoriesData={filterSubcategoryData} 
              setsubcategoryId={setsubcategoryId}
              subCategoryId={subCategoryId}
              setChildSubCategory={setChildSubCategory}
              setReChildSubCategory={setReChildSubCategory}
              selectedCategory={selectedCategory}
              />
              <div className="col-lg-3 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={getCategoriesData}
                  setSearchQuery={setSearchQuery}
                  searchQuery={searchQuery}
                  // setSelectedCategory={setSelectedCategory}
                  // selectedCategory={selectedCategory}
                  getSortParams={getSortParams}
                  setsubcategoryId={setsubcategoryId}
                  GetHandleSubCategoryid={GetHandleSubCategoryid}
                  subCategoryId={subCategoryId}
                  sideSpaceClass="mr-30"
                />
              </div>
              <div className="col-lg-9 order-lg-2" >
                {/* shop topbar default */}
                <ShopTopbar
                  selectedCategory={selectedCategory}
                  categories={getCategoriesData}
                  layout={layout}
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  getSortParams={getSortParams}
                  setSelectedLanguage={setSelectedLanguage}
                  productCount={productLenght}
                  sortedProductCount={productLenght}
                  authors={authors}
                  currentData={getProductData}
                />

                {/* shop page content default */}
                <ShopProducts
                  layout={layout}
                  getLayout={getLayout}
                  ProductLenght={getProductData?.length}
                  products={getProductData}
                  categories={getCategoriesData}
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
                  {(
                    <Paginator
                      totalRecords={PaginationData?.totalItems}
                      pageLimit={limit}
                      pageNeighbours={2}
                      setOffset={setOffset}
                      currentPage={currentPage}
                      // currentPage={PaginationData?.currentPage}
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
