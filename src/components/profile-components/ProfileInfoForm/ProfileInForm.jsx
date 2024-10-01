import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProfileInForm.css'

const ProfileInForm = () => {
    return (
        <>
            <Form>
                <Row>
                    <h3>Account Information</h3>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text " className="my-input" placeholder=" User Name" />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" className="my-input" placeholder="Email" />
                        </Form.Group>
                    </Col>
                    <h3>Profile Information</h3>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name (publicly displayed)</Form.Label>
                            <Form.Control type="text" className="my-input"  placeholder="First Name" />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last name (publicly displayed) </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="Last name " />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>My favorite style </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="My favorite style" />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>About me</Form.Label>
                            <Form.Control className="my-input" as="textarea" rows={3}   />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>My next house project</Form.Label>
                            <Form.Control className="my-input" as="textarea" rows={3}   />

                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary mb-2 " type="button">
                    Update
                </Button>
            </Form>

        </>
    )
}

export default ProfileInForm