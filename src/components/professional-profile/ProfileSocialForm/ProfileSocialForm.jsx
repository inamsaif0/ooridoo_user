import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ProfileInfoForm/ProfileInForm.css'

const ProfileSocialForm = () => {
    return (
        <>
            <Form>
                <Row>
                    <h3 className='mb-4' >Link to Your Social Media Profiles</h3>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control type="text" className="my-input"  placeholder="Facebook" />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="Twitter" />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="LinkedIn" />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Website or Blog </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="Website or Blog" />

                        </Form.Group>
                    </Col>
                </Row>
                <div className='text-right'>
                        <Button variant="primary mb-2 float-right" style={{ float: "right" }} type="button">
                            Update
                        </Button>
                    </div>
            </Form>

        </>
    )
}

export default ProfileSocialForm