import React, { Fragment} from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import SEO from "../../../../components/seo";
import ProfessionalLayout from "../../../../layouts/professionalLayout";
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";

const Index = () => {
    let { pathname } = useLocation();
    return (
        <Fragment>
            <SEO
                titleTemplate="Login"
                description="Login page of Varified Calender"
            />
            <ProfessionalLayout>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "New Password", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">

                                    <Nav variant="pills" className="login-register-tab-list">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Forgot Password">
                                                <h4>Create a New Password</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <h5 className="text-center">Hello ferabo6726@jthoven.com <br />
                                        Your password should have at least 8 characters <br />
                                        with at least one symbol and one number.</h5>
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form >
                                                <input
                                                    type="password"
                                                    name="user-name"
                                                    placeholder="Old Password"
                                                />
                                                <input
                                                    type="password"
                                                    name="user-name"
                                                    placeholder="New Password"
                                                />
                                                <input
                                                    type="password"
                                                    name="user-name"
                                                    placeholder="Confirm Password"
                                                />
                                                <div className="button-box">
                                                    <button className="w-100" type="submit"  >
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
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

export default Index;
