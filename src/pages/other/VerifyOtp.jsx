import React, { Fragment, useState } from 'react';
import SEO from '../../components/seo';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useLocation, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BaseUrl from '../../BaseUrl';
import { toast } from 'react-toastify';

function VerifyOtp() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(6).fill(""));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        console.log("OTP Entered: ", otpValue);

        fetch(`${BaseUrl.baseurl}/api/otp/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "otp": parseInt(otpValue)
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.status == true) {
                    localStorage.setItem('Token', JSON.stringify(data?.data?.token));
                    navigate("/complete-profile")
                    toast.success(data?.message);
                } else {
                    toast.error(data?.message);
                }

                console.log("otp verify api")
            }).catch((err) => {
                console.error(err)
                toast.error(err?.message);

            })

    };

    return (
        <Fragment>
            <SEO
                titleTemplate="Verify OTP"
                description="Verify your OTP page of Varified Calendar"
            />

            <LayoutOne>
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Verify OTP", path: process.env.PUBLIC_URL + pathname }
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
                                                <h4>Verify your Email</h4>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <h4 className="text-center mb-3">Enter your OTP sent to your email.</h4>
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form onSubmit={handleSubmit}>
                                                <div className="otp-inputs d-flex justify-content-center" style={{ gap: "10px" }}>
                                                    {otp.map((value, index) => (
                                                        <input
                                                            key={index}
                                                            id={`otp-${index}`}
                                                            type="text"
                                                            value={value}
                                                            onChange={(e) => handleChange(e, index)}
                                                            maxLength={1}
                                                            className="otp-input mx-1"
                                                            placeholder="-"
                                                            style={{
                                                                width: "50px",
                                                                height: "50px",
                                                                textAlign: "center",
                                                                fontSize: "24px",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "5px",
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="button-box">
                                                    <button className="w-100" type="submit" >
                                                        <span>Verify</span>
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
            </LayoutOne>
        </Fragment>
    );
}

export default VerifyOtp;
