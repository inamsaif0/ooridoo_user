import React, { Fragment, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { BsStars, BsCheckLg } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import GetStartedStep1 from '../../components/get-started';
import GetStartedStep2 from '../../components/get-started/step2';
import GetStartedStep3 from '../../components/get-started/step3';
import GetStartedStep4 from '../../components/get-started/step4';
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { toast } from 'react-toastify';

export default function GetStarted() {
    const navigate = useNavigate();
    let { pathname } = useLocation();
    const [step, setStep] = useState(1);
    const [totalSteps,] = useState(4);

    const handleStepPrevious = () => {
        setStep(step - 1);
    }

    const handleStepNext = () => {
        setStep(step + 1);
    }

    const handleSubmit = () => {
        toast.success("Professional Successfully Sign Up")
        navigate('/professional/home');
    }

    return (
        <Fragment>
            <SEO
                titleTemplate="Get Started"
                description="Get Started of Varified Calender"
            />
            <LayoutOne >
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: `Get Started ${step}/${totalSteps}`, path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="pt-50 pb-100">
                    <div className="container">
                        {step === 1 ?
                            <h1 className='mb-5'>What is your business address?</h1>
                            : (step === 2 ?
                                <h1>Where do you want to work?</h1>
                                : (step === 3 ?
                                    <h1>What services do you provide?</h1>
                                    : (step === 4 ?
                                        <h1>Add your profile photo</h1>
                                        : null
                                    )))}
                        {step === 1 ?
                            <h5 className='mb-5'> </h5>
                            : (step === 2 ?
                                <h5 className='mb-5'>Please select what areas you want to work so we can match the right clients for you.</h5>
                                : (step === 3 ?
                                    <h5 className='mb-5'>Include all of the services you are willing to provide as a standalone job.</h5>
                                    : (step === 4 ?
                                        <h5 className='mb-5'>Your profile photo will appear on your profile and directory listing (Ooridoo search results). Make it a good one!</h5>
                                        : null
                                    )))}

                        <div className="row">
                            <div className="col-md-6 ms-auto me-auto">
                                {step === 1 ?
                                    <GetStartedStep1 />
                                    : (step === 2 ?
                                        <GetStartedStep2 />
                                        : (step === 3 ?
                                            <GetStartedStep3 />
                                            : (step === 4 ?
                                                <GetStartedStep4 />
                                                : null  
                                            )))}
                            </div>
                            <div className="col-md-6 ms-auto me-auto">
                                {step === 3 ?
                                    <Alert variant="success">
                                        <Alert.Heading><BsStars size={26} color='#bdbd02' /> It’s important to provide a complete list</Alert.Heading>
                                        <hr />
                                        <p>
                                            You are more likely to be found by homeowners if you provide the services they are looking for.
                                        </p>
                                    </Alert>
                                    : (step === 4 ?
                                        <Alert variant="success">
                                            <Alert.Heading><BsStars size={26} color='#bdbd02' /> What makes for a great profile?</Alert.Heading>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src="/assets/img/profile/1.jpg" className='img-fluid' alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <img src="/assets/img/profile/2.jpg" className='img-fluid' alt="" />
                                                </div>
                                            </div>
                                            <hr />
                                            <p>
                                                <BsCheckLg size={20} /> Use a photo of you or your team - clients want to see who they're hiring!
                                            </p>
                                            <p>
                                                <BsCheckLg size={20} /> If you don't have a photo of you or your team, you can use your logo.
                                            </p>
                                            <p>
                                                <BsCheckLg size={20} /> Don't forget to smile!
                                            </p>
                                        </Alert>
                                        :
                                        <Alert variant="success">
                                            <Alert.Heading><BsStars size={26} color='#bdbd02' /> Get found by hiring homeowners near you!</Alert.Heading>
                                            <hr />
                                            <p>
                                                We'll display your business address on your profile and make sure you show up in Ooridoo search results locally.
                                            </p>
                                        </Alert>
                                    )}
                            </div>
                        </div>
                        <div class="fixed-bottom get-started-footer">
                            <div className="container">
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        {step > 1 ?
                                            <button type="button" className='btn btn-primary' onClick={handleStepPrevious}>
                                                <span>Previous</span>
                                            </button>
                                            : null}
                                    </div>
                                    <div className="col-md-6 text-end">
                                        {step !== 1 && step < totalSteps ?
                                            <button type="button" className='btn btn-primary' onClick={handleStepNext}>
                                                <span>Skip</span>
                                            </button>
                                            : null}
                                        {step >= totalSteps ?
                                            <button type="button" className='btn btn-primary ms-2' onClick={handleSubmit}>
                                                <span>Submit</span>
                                            </button>
                                            :
                                            <button type="button" className='btn btn-primary ms-2' onClick={handleStepNext}>
                                                <span>Next</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne >
        </Fragment >
    )
}