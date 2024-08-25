import { Fragment, useState } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import BlogPosts from "../../../../wrappers/blog/BlogPosts";
import { AiOutlinePlus } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ProfessionalIdeabooks = () => {
    let { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <h3>2 Ideabooks</h3>

                            <div className="d-flex">
                                <select disabled class="form-select mx-1" aria-label="Default select example">
                                    <option selected>Search</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <select class="form-select mx-1" aria-label="Default select example">
                                    <option selected> All Collaborators</option>
                                    <option value="1">All Collaborators</option>
                                    <option value="2">All Collaborators</option>
                                    <option value="3">All Collaborators</option>
                                </select>

                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <select class="form-select mx-1" aria-label="Default select example">
                                        <option selected>Search in ideabooks</option>
                                        <option value="1">My Projects</option>
                                        <option value="2">My Wish List</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row mt-4">

                                <BlogPosts />

                            </div>


                        </div>

                        <div className='col-lg-6 text-end ' >

                            <button type="button" onClick={handleShow} class="btn btn-outline-primary mx-1"><AiOutlinePlus /> Create Ideabook</button>



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
                            <div className="col-md-12">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label"> <h3>Name</h3></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Private
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12">
                              <spna> <h3>choose a space</h3>(Optional)</spna> 

                                <div className="d-flex justify-content-start mt-2">
                                    <p className="mx-1 rounded border bg-light p-1">Bathroom</p>
                                    <p className="mx-1 rounded border bg-light p-1"> kitchen</p>
                                    <p className="mx-1 rounded border bg-light p-1"> Living</p>
                                    <p className="mx-1 rounded border bg-light p-1"> Bedroom</p>
                                    <p className="mx-1 rounded border bg-light p-1"> Dinning </p>
                                    <p className="mx-1 rounded border bg-light p-1"> Home Office</p>
                                    <p className="mx-1 rounded mb-auto bg-light p-1"> Laundary</p>
                                    <p className="mx-1 rounded mb-auto bg-light p-1"> Others</p>



                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Fragment>

    );

};



export default ProfessionalIdeabooks;
