import { Fragment, useState } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import illustration from "../../../../assets/img/request_for_review_illustration.png"
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProfessionalReviewRequest = () => {
    let { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     let navigate = useNavigate()
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
                        <div className='col-lg-6' >
                            <h3>Request review from past clients and colleagues</h3>
                            <h6>Pros who have at least 3 reviews are 15x more likely to be contacted</h6>

                            <div className="row text-center mt-2">
                                <div className="col-md-12 ">
                                    <img src={illustration} alt="" className="d-block" style={{ width: "80%" }} />
                                    <button onClick={handleShow} type="button" class="btn btn-success">Request Review</button>
                                    <h6 className="mt-3" style={{
                                        cursor:"pointer",
                                        textDecoration:"underline"
                                    }} onClick={()=>navigate("/professional/pastreviewrequest")}  >Past Review Request</h6>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6  ' >

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Why do i need reviews</Accordion.Header>
                                    <Accordion.Body>
                                        More and more, customers are relying on online reviews to find and select remodeling professionals. By having reviews, you increase your visibility on Houzz and your exposure to potential new clients.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>who should i ask for a review</Accordion.Header>
                                    <Accordion.Body>
                                        Clients and colleagues who love your work.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>what happens after i ask for a review</Accordion.Header>
                                    <Accordion.Body>
                                        An email is sent to the clients you select, including a link to write a review on Houzz. After the review is written, it is submitted to the Houzz team. Once approved, you will be notified via email and the review will be visible on your profile.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>what make a great review</Accordion.Header>
                                    <Accordion.Body>
                                        Details are key. Ask your reviewers to include photos of construction and the finished space, and to comment specifically on your contributions.
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>


                        </div>

                    </div>

                </div>

            </ProfessionalLayout>
            <>


                <Modal size="md" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Modal heading</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Request Reviews from past clients and colleagues</h3>
                                <h6 className="mt-2">Pros who have at least 3 reviews are 15x more likely to be contacted</h6>

                                <div class="mb-3 mt-4">
                                    <label for="exampleFormControlInput1" class="form-label">To (Press return to enter each email):</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">As a home improvement professional, my business relies on recommendations from clients. I would appreciate it if you would write a brief review for me on Houzz.com, the largest and most influential directory of improvement and design professionals.</textarea>
                                </div>
                            </div>
                            <div className="col-md-6 border p-2">
                                <h4>Can you please review me?</h4>
                                <hr />
                                <p>As a home improvement professional, my business relies on recommendations from clients. I would appreciate it if you would write a brief review for me on Houzz.com, the largest and most influential directory of improvement and design professionals.</p>
                                <p>Click this link to write your review.</p>
                                <p>Thanks in advance and let me know if you have any questions,</p>
                                <p>Jin Floydh</p>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Cancel 
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                   Send
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        </Fragment>

    );

};



export default ProfessionalReviewRequest;
