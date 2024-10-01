import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../ProfileInfoForm/ProfileInForm.css'

const ShippingAddressForm = () => {
    return (
        <>
            <Form>
                <Row>
                    <h3>Professional Shipping Addresses</h3>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text " className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" className="my-input"  placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>State </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Postal Code </Form.Label>
                            <Form.Control type="number" className="my-input" placeholder="" />
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
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='number' className="my-input"   />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Extension</Form.Label>
                            <Form.Control type="text" className="my-input"   />
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

export default ShippingAddressForm