import { Fragment } from "react";
import SEO from "../../../components/seo";
import ProfessionalLayout from '../../../layouts/professionalLayout';
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../components/professional-profile/Profileheader/ProfileHeader';
import { Link } from "react-router-dom";

const ProfessionalOrder = () => {

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
                            <h5 className="mb-4 " style={{fontWeight:"bold"}} >Orders</h5>
                            <h6><Link to="/professional/orders">Your Orders</Link></h6>
                            <h6><Link to="/professional/ordermessage">Order Messages</Link></h6>
                            <h6><Link to="/professional/ordersent">Sent Messages</Link></h6>

                            <hr style={{width:"70%"}}/>
                            <h5 className="mb-4" style={{fontWeight:"bold"}}>Shopping Account</h5>
                            <h6><Link to="/professional/billinginfo">Billing Info</Link></h6>
                            <h6><Link to="/professional/shippingaddress">Shipping Addresses</Link></h6>
                            <div className="row">
                                <div className="col-md-6 mt-2">

                                </div>
                            </div>

                            <div className="row mt-4">

                                {/* <BlogPosts /> */}

                            </div>
                        </div>

                        <div className='col-lg-8  ' >
                            <h1 className="mt-3">Order Messages</h1>
                            <h6 className="mt-3">You do not have any order messages.</h6>
                        </div>

                    </div>

                </div>

            </ProfessionalLayout>



        </Fragment>

    );

};



export default ProfessionalOrder;
