import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function WelcomeHomeOwner() {
    let { pathname } = useLocation();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Home Owner Successfully Sign Up");
        navigate('/')
    };

    return (
        <Fragment>
            <SEO
                titleTemplate="Welcome Home Owner"
                description="Welcome Home Owner of Varified Calender"
            />
            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Welcome Home Owner", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    <>
                                        <Nav variant="pills" className="login-register-tab-list">
                                            <Nav.Item>
                                                <Nav.Link eventKey="Welcome">
                                                    <h4>Welcome to Ooridoo</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <h4 className="text-center mb-3">Tell us a little about you</h4>
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <label htmlFor="">First Name <span>(publicly displayed)</span></label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        placeholder="First Name"
                                                    />
                                                    <label htmlFor="">Last Name <span>(publicly displayed)</span></label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        placeholder="Last Name"
                                                    />
                                                    <label htmlFor="">Zip Code</label>
                                                    <input
                                                        type="text"
                                                        name="zip-code"
                                                        placeholder="Zip Code"
                                                    />
                                                    <label htmlFor="">Age Range</label>
                                                    <select name="" id="">
                                                        <option value="">Select</option>
                                                        <option value="18-24">18-24</option>
                                                        <option value="25-34">25-34</option>
                                                        <option value="35-44">35-44</option>
                                                        <option value="45-54">45-54</option>
                                                        <option value="55-64">55-64</option>
                                                        <option value="65-or-above">65 or above</option>
                                                    </select>
                                                    <div className="row">
                                                        <div className="co-md-12 d-flex mb-3">
                                                            <div className="form-check form-check-inline">
                                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                                <label className="form-check-label" for="inlineRadio1">Male</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                                <label className="form-check-label" for="inlineRadio2">Female</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                                <label className="form-check-label" for="inlineRadio3">Other</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="button-box">
                                                        <button className="w-100" type="submit">
                                                            <span>Done</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}
