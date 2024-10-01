import { Fragment, useEffect, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bg1 from "../../../assets/img/bg.jpg";
import Rating from "../../../components/product/sub-components/ProductRating";
import SEO from "../../../components/seo";
import { getSortedProducts } from '../../../helpers/product';
import ProfessionalLayout from '../../../layouts/professionalLayout';
import ShopSidebar from '../../../wrappers/product/ShopSidebar';
import TopBanner2 from '../../../components/banner/topBanner2';

const ProfessionalList = ({ location }) => {

    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [sortedProducts, setSortedProducts] = useState([]);
    const { products } = useSelector((state) => state.product);

    const pageLimit = 15;



    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    }



    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(sortedProducts);
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);

    }, [offset, products, sortType, sortValue,]);

    return (
        <Fragment>
            <SEO
                titleTemplate="Shop Page"
                description="Shop page of flone react minimalist eCommerce template."
            />
            <ProfessionalLayout>
                <TopBanner2 />
                <div className="shop-area pt-95 pb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* shop sidebar */}
                                <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30" />
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                {/* shop topbar default */}
                                {/* <ShopTopbar  getFilterSortParams={getFilterSortParams} productCount={products.length} sortedProductCount={currentData.length} /> */}
                                <div className="d-flex justify-content-start mt-2">
                                    <p className="mx-1 rounded border bg-success text-white p-1"> Interior Designers & Decorators <AiOutlineCloseCircle /></p>
                                    <p className="mx-1 rounded border bg-success text-white mb-auto p-1"> Mid-Century Modern <AiOutlineCloseCircle /></p>


                                </div>
                                {/* shop page content default */}
                                <div className="shop-list-wrap mb-30">

                                    <div className="row mb-5">
                                        <div className="col-xl-4 col-md-5 col-sm-6 ">
                                            <div className="product-list-image-wrap">
                                                <div className="product-img">
                                                    <Link
                                                        to="/professional/Professional-Detail"
                                                    >
                                                        <img
                                                            className="default-img img-fluid"
                                                            src={bg1}
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="product-img-badges">

                                                        <span className="bg-success">Sale</span>

                                                        <span className="purple">New</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-7 col-sm-6">
                                            <div className="shop-list-content">
                                                <h3>
                                                    <Link to="/professional/Professional-Detail">
                                                        Lorem ipsum jacket
                                                    </Link>
                                                </h3>
                                                <div className="product-list-price">
                                                    <i className=""></i>



                                                    <span>€11.2 </span>




                                                </div>

                                                <div className="rating-review">
                                                    <div className="product-list-rating">
                                                        <Rating />
                                                    </div>
                                                </div>

                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

                                                <div className="shop-list-actions d-flex align-items-center">
                                                    <div className="shop-list-btn btn-hover">



                                                        <Link
                                                            to="#"
                                                        >
                                                            <i className="pe-7s-cart"></i>
                                                            Add To Cart
                                                        </Link>

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

                                    <div className="row mb-5">
                                        <div className="col-xl-4 col-md-5 col-sm-6 ">
                                            <div className="product-list-image-wrap">
                                                <div className="product-img">
                                                    <Link
                                                        to="/professional/Professional-Detail"
                                                    >
                                                        <img
                                                            className="default-img img-fluid"
                                                            src={bg1}
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="product-img-badges">

                                                        <span className="bg-success">Sale</span>

                                                        <span className="purple">New</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-7 col-sm-6">
                                            <div className="shop-list-content">
                                                <h3>
                                                    <Link to="/professional/Professional-Detail">
                                                        Lorem ipsum jacket
                                                    </Link>
                                                </h3>
                                                <div className="product-list-price">
                                                    <i className=""></i>



                                                    <span>€11.2 </span>




                                                </div>

                                                <div className="rating-review">
                                                    <div className="product-list-rating">
                                                        {/* <Rating /> */}
                                                    </div>
                                                </div>

                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

                                                <div className="shop-list-actions d-flex align-items-center">
                                                    <div className="shop-list-btn btn-hover">



                                                        <Link
                                                            to="#"
                                                        >
                                                            <i className="pe-7s-cart"></i>
                                                            Add To Cart
                                                        </Link>

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


                                    <div className="row mb-5">
                                        <div className="col-xl-4 col-md-5 col-sm-6 ">
                                            <div className="product-list-image-wrap">
                                                <div className="product-img">
                                                    <Link
                                                        to="/professional/Professional-Detail"
                                                    >
                                                        <img
                                                            className="default-img img-fluid"
                                                            src={bg1}
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="product-img-badges">

                                                        <span className="bg-success">Sale</span>

                                                        <span className="purple">New</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-7 col-sm-6">
                                            <div className="shop-list-content">
                                                <h3>
                                                    <Link to="/professional/Professional-Detail">
                                                        Lorem ipsum jacket
                                                    </Link>
                                                </h3>
                                                <div className="product-list-price">
                                                    <i className=""></i>



                                                    <span>€11.2 </span>




                                                </div>

                                                <div className="rating-review">
                                                    <div className="product-list-rating">
                                                        {/* <Rating /> */}
                                                    </div>
                                                </div>

                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

                                                <div className="shop-list-actions d-flex align-items-center">
                                                    <div className="shop-list-btn btn-hover">



                                                        <Link
                                                            to="#"
                                                        >
                                                            <i className="pe-7s-cart"></i>
                                                            Add To Cart
                                                        </Link>

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

                                    <div className="row mb-5">
                                        <div className="col-xl-4 col-md-5 col-sm-6 ">
                                            <div className="product-list-image-wrap">
                                                <div className="product-img">
                                                    <Link
                                                        to="/professional/Professional-Detail"
                                                    >
                                                        <img
                                                            className="default-img img-fluid"
                                                            src={bg1}
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="product-img-badges">

                                                        <span className="bg-success">Sale</span>

                                                        <span className="purple">New</span>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-7 col-sm-6">
                                            <div className="shop-list-content">
                                                <h3>
                                                    <Link to="/professional/Professional-Detail">
                                                        Lorem ipsum jacket
                                                    </Link>
                                                </h3>
                                                <div className="product-list-price">
                                                    <i className=""></i>



                                                    <span>€11.2 </span>




                                                </div>

                                                <div className="rating-review">
                                                    <div className="product-list-rating">
                                                        <Rating />
                                                    </div>
                                                </div>

                                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

                                                <div className="shop-list-actions d-flex align-items-center">
                                                    <div className="shop-list-btn btn-hover">



                                                        <Link
                                                            to="#"
                                                        >
                                                            <i className="pe-7s-cart"></i>
                                                            Add To Cart
                                                        </Link>

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



                                </div>
                                {/* shop product pagination */}
                                <div className="pro-pagination-style text-center mt-30">
                                    <Paginator
                                        totalRecords={sortedProducts.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfessionalLayout>
        </Fragment>
    )
}

export default ProfessionalList;