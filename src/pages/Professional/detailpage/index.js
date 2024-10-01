import { Fragment } from "react";
import { AiFillFacebook, AiFillLinkedin, AiOutlinePlus } from "react-icons/ai";
import { FaSave, FaStar, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdIosShare } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
import TopBanner3 from "../../../components/banner/topBanner3";
import SEO from "../../../components/seo";
import ProfessionalLayout from "../../../layouts/professionalLayout";
import BlogComment from "../../../wrappers/blog/BlogComment";
import BlogPosts from "../../../wrappers/blog/BlogPosts";
import img from "./blog.jpg";


const DetailPage = () => {

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    return (
        <Fragment>
            <SEO
                titleTemplate="Professional Detail"
                description="Professional-Detail"
            />
            <ProfessionalLayout>
                <div className="product-area pb-100">
                    <TopBanner3 />
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-start align-items-center ">
                                            <img src={img} style={{ width: "20%" }} alt="" className="img-fluid" />
                                            <div className="mx-2 d-grid">
                                                <p className="fs-3">Martha O'Hara Interiors</p>
                                                <p className="">5.0 {Array(5).fill().map((e) => <FaStar />)} 190 Reviews</p>
                                                <p>Interior Designers & Decorators</p>
                                                <p>1 Hire on Ooridoo Responds Quickly</p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-start align-items-center mt-2">
                                            <button type="button" class="btn btn-outline-primary mx-1"><FaStar /> Write a Review</button>
                                            <button type="button" class="btn btn-outline-primary mx-1"><MdIosShare /> Share</button>
                                            <button type="button" class="btn btn-outline-primary mx-1">< FaSave /> Save</button>
                                            {/* <h5>5.0  <Ratting ratingValue={5} /> 190 Reviews</h5> */}
                                        </div>
                                        <div className="mt-3 ">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item">
                                                    <Link class="nav-link active" aria-current="page" to="#">About Us</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" to="#">Projects</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" to="#">Business</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link " to="#" aria-disabled="true">Credentials</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link " to="#" aria-disabled="true">Reviews</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link " to="#" aria-disabled="true">Ideabooks</Link>
                                                </li>
                                            </ul>
                                            <hr />

                                        </div>
                                        <div className="d-flex justify-content-start mt-2">
                                            <p className="mx-1 rounded border bg-light p-1"><FiSettings /> 19x Best of houzz Winner</p>
                                            <p className="mx-1 rounded border bg-light p-1"><FaUserFriends /> Eco-friendly</p>
                                            <p className="mx-1 rounded border bg-light p-1 mb-auto"><TiMessages /> Online consultation</p>

                                        </div>
                                        <div className="row mt-3 border">
                                            <div className="col-md-6 mt-3">
                                                <p className="mx-1 rounded border bg-light p-1" style={{ width: "38%" }}><FiSettings /> PREMIUM FEATURE</p>
                                                <p>Upgrade to quickly communicate your value with Highlights</p>
                                            </div>
                                            <div className="col-md-6 text-end mt-4">
                                                <button type="button" class="btn btn-primary">Learn More</button>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <h5>Bay Area's Premier Architecture Firm / Interior Design Firm</h5>
                                                <p className="mt-4">19x "BEST OF HOUZZ" Winner!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
                                                <button onClick={myFunction} type="button" id="myBtn" className=" btn btn-outline-primary">Read more</button>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="mt-3 ">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item">
                                                    <Link class="nav-link active" aria-current="page" to="#">201 Projects</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" to="#">21 Videos</Link>
                                                </li>


                                            </ul>

                                            <hr />
                                        </div>


                                        <div className="d-flex justify-content-start mt-2">
                                            <p className="mx-1 rounded border bg-light p-1"> kitchen</p>
                                            <p className="mx-1 rounded border bg-light p-1">Bathroom</p>
                                            <p className="mx-1 rounded border bg-light p-1"> Bedroom</p>
                                            <p className="mx-1 rounded border bg-light p-1"> Dinning Room</p>
                                            <p className="mx-1 rounded border bg-light p-1"> Patio</p>
                                            <p className="mx-1 rounded mb-auto bg-light p-1"> Living Room</p>


                                        </div>

                                    </div>
                                </div>
                                <div className="mr-20">
                                    <div className="row mt-4">

                                        <BlogPosts />

                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4 text-center border p-2 rounded">
                                            <h5>Load Next 6 Projects</h5>
                                        </div>
                                    </div>


                                </div>
                                <hr />
                                <h2>Business Details</h2>
                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <h4>Business Name</h4>
                                        <p >Studio S Squared Architecture, Inc.</p>

                                        <div className="mt-4">
                                            <h4>Phone Number</h4>
                                            <p >000-0000-0000.</p>
                                        </div>
                                        <div className="mt-4">
                                            <h4>Website</h4>
                                            <Link to="#" >www.StudioS2arch.com.</Link>
                                        </div>
                                        <div className="mt-4">
                                            <h4>Address</h4>
                                            <p >1000 South Winchester Blvd.
                                                San Jose, California 95128
                                                United States</p>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="mt-4">
                                            <h4>Typical Job Cost</h4>
                                            <p >$1 million - 5 million</p>
                                        </div>

                                        <div className="mt-4">
                                            <h4>License Number</h4>
                                            <p >C27,719</p>
                                        </div>

                                        <div className="mt-4">
                                            <h4>Followers</h4>
                                            <p >4,357 Follwers</p>
                                        </div>

                                        <div className="mt-4">
                                            <h4>Socials</h4>
                                            <span ><AiFillLinkedin /> <AiFillFacebook /></span>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <button type="button" class="btn btn-outline-primary mx-1"> Follow <AiOutlinePlus /></button>
                                    </div>
                                </div>
                                <hr />
                                <h2>Credentials</h2>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <h4>19 Ooridoo Awards</h4>
                                        <div className="row d-flex  ">
                                            <div className="col-md-12">
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />



                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <h4>7 Ooridoo Bages</h4>
                                        <div className="row d-flex  ">
                                            <div className="col-md-12">
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <h4>1 Affilation</h4>
                                        <div className="row d-flex  ">
                                            <div className="col-md-12">
                                                <img src={img} style={{ width: "20%" }} alt="" className="img-fluid mx-1" />


                                            </div>

                                        </div>
                                    </div>

                                    <Link to="#" className="mt-4">Show All</Link>


                                </div>
                                <hr />
                                <BlogComment />
                                <hr />
                                <div className=" mt-4">
                                    <div className="row mt-4">
                                        <h3>20 Ideabooks</h3>

                                        <BlogPosts />

                                    </div>
                                    <div className="row justify-content-center">

                                        <div className="col-md-4 text-center border p-2 rounded">
                                            <h5>Load Next 6 IdeaBooks</h5>
                                        </div>
                                    </div>


                                </div>
                                <hr />

                                <div className="row">
                                    <h4>1,405 Comments  </h4>
                                    <div className="col-md-12">
                                        <p> <b>Commented:</b>  Are there plans for using Black framed glass panels to enclose an entrnot sure if I understand your comment Roberta, but feel free to email me a sketch @ esakai@studios2arch.com and I will give you a quick review.
                                            <br /> February 6, 2023</p>
                                        <p><b>Commented:</b> Are there plans for using Black framed glass panels to enclose an entrnot sure if I understand your comment Roberta, but feel free to email me a sketch @ esakai@studios2arch.com and I will give you a quick review.
                                            <br /> Aprail 20, 2023</p>
                                        <p><b>Commented:</b> Are there plans for using Black framed glass panels to enclose an entrnot sure if I understand your comment Roberta, but feel free to email me a sketch @ esakai@studios2arch.com and I will give you a quick review.
                                            <br /> March 7, 2023</p>
                                        <p><b>Commented:</b> Are there plans for using Black framed glass panels to enclose an entrnot sure if I understand your comment Roberta, but feel free to email me a sketch @ esakai@studios2arch.com and I will give you a quick review.
                                            <br /> June 6, 2023</p>
                                    </div>
                                </div>


                            </div>
                            <div className="col-lg-3 ">
                                <div className="row border p-2">
                                    <div className="col-md-12">
                                        <form>
                                            <div class="mb-3">

                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />

                                            </div>
                                            <div class="mb-3">

                                                <input type="text" class="form-control" id="exampleInputPassword2" placeholder="Name" />
                                            </div>
                                            <div class="mb-3">

                                                <input type="text" class="form-control" id="exampleInputPassword3" placeholder="PhoneNumber" />
                                            </div>
                                            <div class="mb-3">

                                                <input type="text" class="form-control" id="exampleInputPassword4" placeholder="Zipcode" />
                                            </div>
                                            <div class="mb-3">

                                                <textarea type="text" class="form-control" id="exampleInputPassword5" placeholder="Message" />
                                            </div>
                                            <div className="row text-center">
                                                <div className=" col-md-12">

                                                    <button type="submit" class="btn btn-primary">Send Message</button>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </ProfessionalLayout>
        </Fragment>
    );
};

export default DetailPage;
