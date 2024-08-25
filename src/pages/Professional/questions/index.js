import { Fragment } from "react";
import SEO from "../../../components/seo";
import ProfessionalLayout from '../../../layouts/professionalLayout';
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../components/professional-profile/Profileheader/ProfileHeader';
import { Link } from "react-router-dom";

const ProfessionalQuestion = () => {

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
                            <h5 className="mb-3" style={{fontWeight:"bold"}} >Questions</h5>
                            <h6><Link to="/professional/questions">Questions for you</Link></h6>
                            <h6><Link to="/professional/unansweredquestions">Unanswered Questions</Link></h6>
                            <div className="row">
                                <div className="col-md-6 mt-2">

                                </div>
                            </div>

                            <div className="row mt-4">

                                {/* <BlogPosts /> */}

                            </div>
                        </div>

                        <div className='col-lg-8  ' >
                            <h1 className="mt-3">No Questions</h1>
                            <h6 className="mt-3">You haven’t received any questions about photos you’ve uploaded.</h6>
                        </div>

                    </div>

                </div>

            </ProfessionalLayout>



        </Fragment>

    );

};



export default ProfessionalQuestion;
