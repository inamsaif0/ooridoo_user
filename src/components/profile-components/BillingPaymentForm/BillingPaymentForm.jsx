import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../ProfileInfoForm/ProfileInForm.css'

const BillingPaymentForm = () => {
    return (
        <>
            <Form>
                <Row>
                    <h3>Payment Method</h3>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name on Card</Form.Label>
                            <Form.Control type="text " className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="number" min={0} className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control as="select" className='my-select' >
                                <option value={''}  >MM</option>
                                <option value={"01"} >01</option>
                                <option value={"02"} >02</option>
                                <option value={"03"} >03</option>
                                <option value={"04"} >04</option>
                                <option value={"05"} >05</option>
                                <option value={"06"} >06</option>
                                <option value={"07"} >07</option>
                                <option value={"08"} >08</option>
                                <option value={"09"} >09</option>
                                <option value={"10"}  >10</option>
                                <option value={"11"} >11</option>
                                <option value={"12"} >12</option>
                            </Form.Control>

                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Country </Form.Label>
                            <Form.Control as="select" className='my-select' >
                                <option value={''} > YY</option>
                                <option value={23}>23</option>
                                <option value={24} >24</option>
                                <option value={25} >25</option>
                                <option value={26} >26</option>
                                <option value={27}>27</option>
                                <option value={28} >28</option>
                                <option value={29} >29</option>
                                <option value={30} >30</option>
                                <option value={31} >31</option>
                                <option value={32} >32</option>
                                <option value={33} >33</option>
                                <option value={34} >34</option>
                            </Form.Control>

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Security Code</Form.Label>
                            <Form.Control type="number" min={0} className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>


                    <h3>Billing Address</h3>
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
                            <Form.Control type="text" className="my-input" placeholder="" />
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
                            <Form.Control type='number' className="my-input" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Extension</Form.Label>
                            <Form.Control type="text" className="my-input" />
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

export default BillingPaymentForm