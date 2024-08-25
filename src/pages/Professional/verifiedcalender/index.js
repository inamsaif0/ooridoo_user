import { Fragment, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdIosShare, MdModeEditOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../../../components/seo";
import ProfessionalLayout from "../../../layouts/professionalLayout";
import VerifiedBlogpost from "../../../wrappers/blog/VerifiedBlogpost";
import img from "./blog.jpg";
import { BsInfoCircleFill } from 'react-icons/bs';

const VerifiedCalender = () => {

    let navigate = useNavigate()

    const [activeTag,setactiveTag]=useState('')

    const projectRef = useRef(null);
    const businessRef = useRef(null);
    const reviewsRef = useRef(null);
    const ideabooksRef = useRef(null);

    const scrollToProject = () => {
        if (projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
            setactiveTag('project')
        }
    };

    const scrollToBusiness = () => {
        if (businessRef.current) {
            businessRef.current.scrollIntoView({ behavior: 'smooth' });
            setactiveTag('bussiness')
        }
    };

    const scrollToReviews = () => {
        if (reviewsRef.current) {
            reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
            setactiveTag('review')
        }
    };
    const scrollToIdea = () => {
        if (ideabooksRef.current) {
            ideabooksRef.current.scrollIntoView({ behavior: 'smooth' });
            setactiveTag('idea')
        }
    };

    // function myFunction() {
    //     var dots = document.getElementById("dots");
    //     var moreText = document.getElementById("more");
    //     var btnText = document.getElementById("myBtn");

    //     if (dots.style.display === "none") {
    //         dots.style.display = "inline";
    //         btnText.innerHTML = "Read more";
    //         moreText.style.display = "none";
    //     } else {
    //         dots.style.display = "none";
    //         btnText.innerHTML = "Read less";
    //         moreText.style.display = "inline";
    //     }
    // }

    return (
        <Fragment>
            <SEO
                titleTemplate="Professional Detail"
                description="Professional-Detail"
            />
            <ProfessionalLayout>
                <div className="product-area pb-100">
                    {/* <TopBanner3 /> */}
                    <div className="container mt-4">
                        <div className="row"  >
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-11 mb-2" style={{ backgroundColor: "rgb(255, 250, 238)", padding: "12px" }} >
                                        <span className="mx-3"><BsInfoCircleFill size={18} /></span>

                                        <span>Homeowners are less likely to discover your business if you have no slideshow.</span>
                                    </div>
                                    <div className="col-lg-11 mb-2"  >
                                        <img src="/assets/img/addprojects.png" alt="addproject" style={{ width: "calc(90% - 4px)", cursor: "pointer" }} className="img-fluid" />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-start align-items-center ">
                                            <img src={img} style={{ width: "20%" }} alt="" className="img-fluid" />
                                            <div className="mx-2 d-grid">
                                                <p className="fs-3">Malik Lancaster</p>
                                                <button type="button" class="btn mx-1 mb-3"
                                                    style={{
                                                        border: 'none',
                                                        boxShadow: 'none',
                                                        outline: 'none',
                                                        backgroundColor: 'transparent',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = '#0d6efd';
                                                        e.target.style.boxShadow = 'none';
                                                        e.target.style.outline = 'none';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = 'transparent';
                                                        e.target.style.boxShadow = 'none';
                                                        e.target.style.outline = 'none';
                                                    }}
                                                ><AiOutlinePlus />  Add Verified License </button>
                                                <h6>General Contractors</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mt-2">
                                            <button type="button" class="btn btn-outline-primary mx-1 " onClick={() => navigate('/professional/reviewrequest')} ><FaStar /> Get Review</button>
                                            <button type="button" class="btn btn-outline-primary mx-1"><MdIosShare /> Share</button>
                                        </div>
                                        <div className="mt-3 ">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item">
                                                    <Link class="nav-link " aria-current="page" to="#">About Us</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class={activeTag === 'project' ? "nav-link active" : "nav-link" }  onClick={() => scrollToProject()} >Projects</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class={activeTag === 'bussiness' ? "nav-link active" : "nav-link" } onClick={() => scrollToBusiness()} to="#">Business</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class={activeTag === 'review' ? "nav-link active" : "nav-link" } onClick={() => scrollToReviews()} to="#" aria-disabled="true">Reviews</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class={activeTag === 'idea' ? "nav-link active" : "nav-link" } onClick={() => scrollToIdea()} to="#" aria-disabled="true">Ideabooks</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class='nav-link' onClick={() => navigate('/professional/activityupdates')} to="#" aria-disabled="true">Activities</Link>
                                                </li>
                                            </ul>
                                            <hr />

                                        </div>
                                        <div className="d-flex justify-content-start mt-2">
                                            <p className="mx-1 rounded border bg-light p-1"><FiSettings /> X years in business</p>
                                            <p className="mx-1 rounded border bg-light p-1"><FaUserFriends /> Locally owned</p>
                                            <p className="mx-1 rounded border bg-light p-1 mb-auto"><TiMessages /> Custom work</p>
                                            <button type="button" class="btn btn-outline-primary mx-1 py-0"><MdModeEditOutline />Unlock Highlights</button>
                                        </div>
                                        <div className="row mt-3 mb-3 border" ref={projectRef} id="target">
                                            <div className="col-md-5 mt-3">
                                                <img src="/assets/img/addprojects.png" alt="addproject" style={{ cursor: "pointer" }} className="img-fluid" />
                                            </div>
                                            <div className="col-md-7  mt-4">
                                                <h5 className="" style={{ fontWeight: "bold" }} >Services Provided</h5>
                                                <p>Basement Remodeling, Bathroom Remodeling, Custom Homes, Deck Building,<br />General Contracting, Home Additions, Home Extensions, Home Remodeling,<br />Kitchen Remodeling, New Home Construction</p>
                                                <h5 className="" style={{ fontWeight: "bold" }} >Areas Served</h5>
                                                <p>City of Cranston, Coventry, Cranston, Fiskeville, Hope, Providence, Warwick,<br />West Warwick</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4 mb-4">
                                            <h4 className="fw-bold" >0 Projects</h4>

                                            <p className="border px-3" style={{ cursor: "pointer" }} ><MdModeEditOutline /></p>

                                        </div>

                                        <div className="row" >
                                            <div className="col-lg-12 mb-2" style={{ backgroundColor: "rgb(243, 248, 252)", padding: "12px" }} >
                                                <span className="mx-2"><BsInfoCircleFill size={18} /></span>

                                                <span>Showcase your projects with highlight videos. Homeowners are more likely to engage with projects that have a video..</span>
                                                <span className="mx-2" style={{ cursor: "pointer", color: "blue" }} >Learn More</span>
                                            </div>
                                            <div  ref={businessRef} className="col-lg-6" >
                                                <div class="card " style={{ border: "none" }} >
                                                    <div class="card-body">
                                                        <div className="row">
                                                            <div className="col-12 project-card">
                                                                <Link to={'/professional/projectsupload'} >
                                                                    <img src="/assets/img/uploadproject.png" style={{ height: "308px" }} className="img-fluid" alt="homeowner"></img>
                                                                </Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />

                                        </div>
                                        <h2>Business Details</h2>
                                        <div className="row mt-4"  >
                                            <div className="col-md-4">
                                                <h4>Business Name</h4>
                                                <p >Malik Lancaster</p>

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
                                            <div className="col-md-4 text-center" ref={reviewsRef}>
                                                <h4 className="fw-bold" >Followers</h4>
                                                <Link to="#" >0 Followers</Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mt-4 mb-4"  >
                                            <h2>Reviews</h2>
                                            <div className="d-flex flex-column align-items-center bg-light" style={{ padding: "24px" }} >
                                                <h5 style={{ padding: "12px" }}  ><FaStar color="grey" fontSize={38} /></h5>
                                                <h5 style={{ padding: "12px" }} >You don't have any reviews yet! </h5>
                                                <button type="button" class="btn btn-outline-primary mx-1" onClick={() => navigate('/professional/reviewrequest')} style={{ padding: "12px" }}>Get Reviews</button>
                                            </div>
                                        </div>
                                        <hr ref={ideabooksRef} />
                                        <div className="row mt-4"  >
                                            <div className="d-flex justify-content-between mt-4 mb-4" >
                                                <h4 className="fw-bold" >2 Ideabooks</h4>

                                                <p className="border px-3" style={{ cursor: "pointer" }} ><MdModeEditOutline /></p>

                                            </div>
                                            <VerifiedBlogpost />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 ">
                                <div className="d-flex justify-content-start align-items-center mt-2 mb-2">
                                    <button type="button" class="btn btn-outline-primary mx-1" onClick={() => navigate('/professional/profile')}  ><MdModeEditOutline /> Edit Profile</button>
                                    <button type="button" class="btn btn-outline-primary mx-1"> Preview Public Profile</button>
                                </div>


                                <div className="row d-flex border p-2">

                                    <div className="col-lg-6" >
                                        <div className="d-flex mb-3 " >
                                            <img src={img} style={{ width: "50%", height: "30%" }} alt="" className="img-fluid mx-1" />
                                            <img src={img} style={{ width: "50%", height: "30%" }} alt="" className="img-fluid mx-1" />
                                        </div>
                                        <div className="d-flex  " >
                                            <img src={img} style={{ width: "50%", height: "30%" }} alt="" className="img-fluid mx-1" />
                                            <img src={img} style={{ width: "50%", height: "30%" }} alt="" className="img-fluid mx-1" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6" >
                                        <p>Want beautiful photos? Book a professional photoshoot for your project.</p>
                                        <button type="button" class="btn btn-outline-primary" style={{ width: "100%", padding: "7px 2px" }}>Book a Photoshoot</button>
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

export default VerifiedCalender;
