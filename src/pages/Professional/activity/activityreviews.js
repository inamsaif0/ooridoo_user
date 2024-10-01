import { Fragment } from "react";
import SEO from "../../../components/seo";
import ProfessionalLayout from '../../../layouts/professionalLayout';
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../components/professional-profile/Profileheader/ProfileHeader';
import { Link } from "react-router-dom";

const ProfessionalActivityReview = () => {

    let { pathname } = useLocation();
    return (
        <Fragment>
            <SEO
                titleTemplate="Professional Home"
                description="Professional home of Ooridoo"
            />
            <ProfessionalLayout
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-1"
            >
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Professional Profile", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <ProfileHeader />
                <div className='container'>
                    <div className='row mt-3 mb-3' >
                        <div className='col-lg-3' >
                            <h5 className="mb-3" style={{fontWeight:"bold"}} >Activity</h5>
                            <h6><Link to="/professional/activityupdates">Your Updates</Link></h6>
                            <h6><Link to="/professional/activitycomments">Your Comments</Link></h6>
                            <h6><Link to="/professional/activitypostshare">Posts you Started</Link></h6>
                            <h6><Link to="/professional/activityreviews">Your Reviews</Link></h6>
                            <h6><Link to="/professional/activityphoto">Your Photo Activity</Link></h6>
                            <div className="row">
                                <div className="col-md-6 mt-2">

                                </div>
                            </div>

                            <div className="row mt-4">

                                {/* <BlogPosts /> */}

                            </div>
                        </div>

                        <div className='col-lg-8  ' >
                            <h1 className="mt-3">No Reviews</h1>
                            <h6 className="mt-3">
                            Posts you Started    Your ReviewsYour Photo ActivityNo ReviewsWorked with a builder, designer, painter, carpet cleaner or even a handyman in your area? <br />Please review them and help the Houzz community find the best pros!</h6>
                            <p className="mt-4" style={{ cursor: "pointer", color: "#007562" }} >Write a review</p>
                        </div>
                    </div>

                </div>

            </ProfessionalLayout>
        </Fragment>

    );

};



export default ProfessionalActivityReview;
