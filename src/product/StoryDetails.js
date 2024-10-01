import { Fragment } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import SEO from "../components/seo";
import LayoutOne from "../layouts/LayoutOne";
import BreadcrumbWrap from "../wrappers/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import BaseUrl from "../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const StoryDetails = () => {
  let { pathname } = useLocation();

  const { slug } = useParams("");
  const [imgurl, setImgurl] = useState("");
  const [getBlog, setGetBlog] = useState([]);
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}storyDetails?story=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setImgurl(response?.data?.imagePath);
          setGetBlog(response?.data?.storyDetail);
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
  }, [slug]);
  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of Ooridoo"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <BreadcrumbWrap
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Blog Post", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <Fragment>
                    <div className="blog-details-top">
                      {getBlog !== 0
                        ? getBlog.map((e, i) => {
                            i = i + 1;
                            const createdAt = new Date(
                              e.created_at
                            ).toLocaleString();
                            return (
                              <>
                                <h3 className="text-capitalize">{e.story.name}</h3>
                                <div className="blog-details-img my-3">
                                  <img
                                    alt=""
                                    src={imgurl + e?.story.image}
                                    width={750}
                                    height={440}
                                  />
                                </div>
                                <div className="blog-details-content">
                                  <h3 className="text-capitalize">
                                    {i}. {e.name}
                                  </h3>
                                  <div className="blog-meta-2">
                                    <ul>
                                      <li>{createdAt}</li>
                                      <li>
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-details-standard"
                                          }
                                        >
                                          4 <i className="fa fa-comments-o" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <img
                                  alt=""
                                  src={imgurl + e?.image}
                                  width={750}
                                  className="my-3 text-center"
                                  height={440}
                                />
                                <blockquote>{e?.description}</blockquote>
                              </>
                            );
                          })
                        : "No Data Found"}
                    </div>
                    <div className="tag-share">
                      <div className="dec-tag">
                        <ul>
                          <li>
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              lifestyle ,
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              interior ,
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              outdoor
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-share">
                        <span>share :</span>
                        <div className="share-social">
                          <ul>
                            <li>
                              <a className="facebook" href="//facebook.com">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a className="twitter" href="//twitter.com">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a className="instagram" href="//instagram.com">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <div className="next-previous-post">
                      <Link
                        to={process.env.PUBLIC_URL + "/blog-details-standard"}
                      >
                        {" "}
                        <i className="fa fa-angle-left" /> prev post
                      </Link>
                      <Link
                        to={process.env.PUBLIC_URL + "/blog-details-standard"}
                      >
                        next post <i className="fa fa-angle-right" />
                      </Link>
                    </div> */}
                  </Fragment>

                  {/* blog post comment */}
                  <Fragment>
                    <div className="blog-comment-wrapper mt-55">
                      <h4 className="blog-dec-title">comments : 02</h4>
                      <div className="single-comment-wrapper mt-35">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>Anthony Stephens</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                      <div className="single-comment-wrapper mt-50 ml-120">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>DX Joxova</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="blog-comment-wrapper mt-55">
                      {/* <h4 className="blog-dec-title">comments : 02</h4> */}
                      <div className="single-comment-wrapper mt-35">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>Anthony Stephens</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                      <div className="single-comment-wrapper mt-50 ml-120">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>DX Joxova</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-wrapper mt-55">
                      {/* <h4 className="blog-dec-title">comments : 02</h4> */}
                      <div className="single-comment-wrapper mt-35">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>Anthony Stephens</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                      <div className="single-comment-wrapper mt-50 ml-120">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>DX Joxova</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-wrapper mt-55">
                      {/* <h4 className="blog-dec-title">comments : 02</h4> */}
                      <div className="single-comment-wrapper mt-35">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-1.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>Anthony Stephens</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                      <div className="single-comment-wrapper mt-50 ml-120">
                        <div className="blog-comment-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/blog/comment-2.jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="blog-comment-content">
                          <h4>DX Joxova</h4>
                          <span>October 14, 2018 </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor magna aliqua. Ut enim ad minim veniam,{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="blog-reply-wrapper mt-50">
                      <h4 className="blog-dec-title">post a comment</h4>
                      <form className="blog-form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="leave-form">
                              <input type="text" placeholder="Full Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="leave-form">
                              <input
                                type="email"
                                placeholder="Email Address "
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="text-leave">
                              <textarea
                                placeholder="Message"
                                defaultValue={""}
                              />
                              <input
                                type="submit"
                                defaultValue="SEND MESSAGE"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Fragment>
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <div className="sidebar-style">
                  <div className="sidebar-widget">
                    <h4 className="pro-sidebar-title">Search </h4>
                    <div className="pro-sidebar-search mb-55 mt-25">
                      <form className="pro-sidebar-search-form" action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="pe-7s-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4 className="pro-sidebar-title">Recent Projects </h4>
                    <div className="sidebar-project-wrap mt-30">
                      <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL + "/blog-details-standard"
                            }
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/sidebar-1.jpg"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="sidebar-blog-content">
                          <span>Photography</span>
                          <h4>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                "/blog-details-standard"
                              }
                            >
                              T- Shart And Jeans
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL + "/blog-details-standard"
                            }
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/sidebar-2.jpg"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="sidebar-blog-content">
                          <span>Branding</span>
                          <h4>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                "/blog-details-standard"
                              }
                            >
                              T- Shart And Jeans
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL + "/blog-details-standard"
                            }
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/sidebar-3.jpg"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="sidebar-blog-content">
                          <span>Design</span>
                          <h4>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                "/blog-details-standard"
                              }
                            >
                              T- Shart And Jeans
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="single-sidebar-blog">
                        <div className="sidebar-blog-img">
                          <Link
                            to={
                              process.env.PUBLIC_URL + "/blog-details-standard"
                            }
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/blog/sidebar-2.jpg"
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="sidebar-blog-content">
                          <span>Photography</span>
                          <h4>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                "/blog-details-standard"
                              }
                            >
                              T- Shart And Jeans
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget mt-35">
                    <h4 className="pro-sidebar-title">Categories</h4>
                    <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
                      <ul>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              Women <span>4</span>{" "}
                            </Link>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              Men <span>4</span>{" "}
                            </Link>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              Bags <span>4</span>{" "}
                            </Link>
                            <span className="checkmark" />
                          </div>
                        </li>
                        <li>
                          <div className="sidebar-widget-list-left">
                            <input type="checkbox" defaultValue />{" "}
                            <Link
                              to={process.env.PUBLIC_URL + "/blog-standard"}
                            >
                              Accessories <span>4</span>{" "}
                            </Link>
                            <span className="checkmark" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-widget mt-50">
                    <h4 className="pro-sidebar-title">Tag </h4>
                    <div className="sidebar-widget-tag mt-25">
                      <ul>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            Accessories
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            For Men
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            Women
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            Fashion
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default StoryDetails;
