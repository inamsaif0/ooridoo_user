import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ProfileInfoForm/ProfileInForm.css'

const ContactForm = () => {
    return (
        <>
            <Form>

                <Row>
                    <h3>Account Information</h3>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text " className="my-input" placeholder=" City" />

                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="State" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ZipCode </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="ZipCode" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Country </Form.Label>
                            <Form.Control as="select" className='my-select' >
                            <option >Select Countries</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>

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

export default ContactForm