import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const VerifiedBlogpost = () => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className=" ">
                    <div class="card " style={{ border: "none"}} >
                        <div class="card-body " style={{paddingTop:"0px" }}>
                            <div className="row">
                                <div className="col-12 project-card">
                                    <Link to={'/professional/projectsupload'} >
                                        <img src="/assets/img/uploadproject.png" style={{ height: "283px" }} className="img-fluid" alt="homeowner"></img>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={"#"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-8.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">

                        <h4>
                            <Link to={"#"}>
                                My Wish List
                            </Link>
                        </h4>
                        <div className="blog-meta-2">
                            <ul>
                                <li>No Save Ideas</li>


                            </ul>
                        </div>
                        {/* <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p> */}
                        {/* <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
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
            </div> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="blog-wrap-2 mb-30">
                    <div className="blog-img-2">
                        <Link to={"#"}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-8.jpg"}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="blog-content-2">

                        <h4>
                            <Link to={"#"}>
                                My Wish List
                            </Link>
                        </h4>
                        <div className="blog-meta-2">
                            <ul>
                                <li>No Save Ideas</li>


                            </ul>
                        </div>
                        {/* <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p> */}
                        {/* <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
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
            </div> */}
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default VerifiedBlogpost;
