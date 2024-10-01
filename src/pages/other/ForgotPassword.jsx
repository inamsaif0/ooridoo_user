import React, { Fragment, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const ForgotPassword = () => {
    let { pathname } = useLocation();
    const [isForgot, setIsForgot] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsForgot(!isForgot);
    };


    return (
        <Fragment>
            <SEO
                titleTemplate="Login"
                description="Login page of Varified Calender"
            />
            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Forgot Password", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    {!isForgot ? <>
                                        <Nav variant="pills" className="login-register-tab-list">
                                            <Nav.Item>
                                                <Nav.Link eventKey="Forgot Password">
                                                    <h4>Forgot Your Password?</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <h4 className="text-center mb-3">Enter your email address and we'll send you a link to reset your password.</h4>
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <input
                                                        type="text"
                                                        name="user-name"
                                                        placeholder="Username or Email"
                                                    />
                                                    <div className="button-box">
                                                        <button className="w-100" type="submit">
                                                            <span>Continue</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                                        :
                                        <>
                                            <Nav variant="pills" className="login-register-tab-list">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Email sent">
                                                        <h4>Email sent!</h4>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <h4 className="text-center">Check your inbox for an email from Ooridoo with a password reset link (sent to <strong>timejam542@mitigado.com</strong>).</h4>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default ForgotPassword;
