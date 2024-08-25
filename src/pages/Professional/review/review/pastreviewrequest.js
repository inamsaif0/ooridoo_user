import { Fragment } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import { Link } from "react-router-dom";

const Pastreviewrequest = () => {

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
                            <h5 className="mb-3" style={{fontWeight:"bold"}} >Review</h5>
                            <h6><Link to="/professional/review">Review About Pro</Link></h6>
                            <h6><Link to="/professional/reviewrequest">Get Reviews </Link></h6>
                            <h6> <Link to="/professional/pastreviewrequest">Past Review Request</Link></h6>

                            <div className="row">
                                <div className="col-md-6 mt-2">

                                </div>
                            </div>

                            <div className="row mt-4">

                                {/* <BlogPosts /> */}

                            </div>
                        </div>

                        <div className='col-lg-8  ' >
                            <h1 className="mt-3">Past Review requests</h1>
                            <h6 className="mt-3">You do not have any reviews. Increase your visibility on verified by asking for reviews from your clients!</h6>
                        </div>
                    </div>
                </div>
            </ProfessionalLayout>
        </Fragment>

    );

};



export default Pastreviewrequest;
