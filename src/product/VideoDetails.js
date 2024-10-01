import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Thumbnail from "react-thumbnail";
import Swal from "sweetalert2";
import { BigPlayButton, Player, PosterImage } from "video-react";
import BaseUrl from "../BaseUrl";
import SEO from "../components/seo";
import "video-react/dist/video-react.css"; // Import the CSS for video-react

import LayoutOne from "../layouts/LayoutOne";

const VideoDetails = () => {
  const { slug } = useParams("");
  const [videourl, setVideourl] = useState("");
  const [getVideo, setGetVideo] = useState([]);
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}videos?slug=${slug}`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "ideas");
          setVideourl(response?.data?.imagePath);
          setGetVideo(response?.data?.video);
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
        <div className="container-fluild">
          <div className="row g-0 gx-0 m-0">
            {getVideo.length !== 0 ? (
              getVideo.map((e) => {
                return (
                  <>
                    <Player playsInline className="p-10">
                      <source src={videourl + e.video} />
                      <PosterImage src={videourl + e.thumbnail} />
                      <BigPlayButton position="center" />
                      {/* You can also customize other player components as needed */}
                    </Player>
                    <div className="container">
                      <div className="col-md-12">
                        <div className="row g-0 gx-0 m-0 my-2">
                          <div className="col-md-8">
                            <div className="card shadow m-3 p-3">
                              <h3>{e?.name}</h3>
                              <p>{e?.description}</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card shadow m-3 p-3">
                              <div className="sidebar-style">
                                <div className="sidebar-widget">
                                  <h4 className="pro-sidebar-title">Search </h4>
                                  <div className="pro-sidebar-search mb-55 mt-25">
                                    <form
                                      className="pro-sidebar-search-form"
                                      action="#"
                                    >
                                      <input
                                        type="text"
                                        placeholder="Search here..."
                                      />
                                      <button>
                                        <i className="pe-7s-search" />
                                      </button>
                                    </form>
                                  </div>
                                </div>
                                <div className="sidebar-widget">
                                  <h4 className="pro-sidebar-title">
                                    Recent Projects{" "}
                                  </h4>
                                  <div className="sidebar-project-wrap mt-30">
                                    <div className="single-sidebar-blog">
                                      <div className="sidebar-blog-img">
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-details-standard"
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
                                            process.env.PUBLIC_URL +
                                            "/blog-details-standard"
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
                                            process.env.PUBLIC_URL +
                                            "/blog-details-standard"
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
                                            process.env.PUBLIC_URL +
                                            "/blog-details-standard"
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
                                  <h4 className="pro-sidebar-title">
                                    Categories
                                  </h4>
                                  <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
                                    <ul>
                                      <li>
                                        <div className="sidebar-widget-list-left">
                                          <input type="checkbox" defaultValue />{" "}
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL +
                                              "/blog-standard"
                                            }
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
                                            to={
                                              process.env.PUBLIC_URL +
                                              "/blog-standard"
                                            }
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
                                            to={
                                              process.env.PUBLIC_URL +
                                              "/blog-standard"
                                            }
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
                                            to={
                                              process.env.PUBLIC_URL +
                                              "/blog-standard"
                                            }
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
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-standard"
                                          }
                                        >
                                          Clothing
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-standard"
                                          }
                                        >
                                          Accessories
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-standard"
                                          }
                                        >
                                          For Men
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-standard"
                                          }
                                        >
                                          Women
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={
                                            process.env.PUBLIC_URL +
                                            "/blog-standard"
                                          }
                                        >
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
                    </div>
                  </>
                );
              })
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </LayoutOne>

      <style>{`.p-10{padding-top: 30% !important}`}</style>
    </Fragment>
  );
};
export default VideoDetails;
