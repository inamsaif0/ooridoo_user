import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Professionalprojects = () => {
    return (
        <>
            <Row className='mb-4' >
                <h2 className='mb-4' >No Projects</h2>
                <p>You haven’t added any projects. Add some now to showcase your work on Ooridoo.</p>
                <Col md={8}>
                    <div class="card " style={{ border: "none" }} >
                        <div class="card-body">
                            <div className="row">
                                <div className="col-12 project-card">
                                    <Link to={'/professional/projectsupload'} >
                                        <img src="/assets/img/uploadproject.png" style={{ height: "308px" }} className="img-fluid" alt="homeowner"></img>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Professionalprojects