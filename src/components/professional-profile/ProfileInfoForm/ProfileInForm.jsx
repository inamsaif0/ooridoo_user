import React from 'react'
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ProfileInForm.css'

const ProfileInForm = () => {
    return (
        <>
            <Form>
                <Row>
                    <h3>Account Information</h3>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text " className="my-input" placeholder=" User Name" />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" className="my-input" placeholder="Email" />
                        </Form.Group>
                    </Col>
                    <h3> Public Business Information</h3>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Professional/Firm Name</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="First Name" />

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Category </Form.Label>
                            <Form.Control as="select" className='my-select' >
                                <option >Select Category</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Website </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First name (publicly displayed) </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder=" " />

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last name (publicly displayed) </Form.Label>
                            <Form.Control type="text" className="my-input" placeholder=" " />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>License Number</Form.Label>
                            <Form.Control type="number" className="my-input" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Business Description</Form.Label>
                            <Form.Control className="my-input" as="textarea" rows={3} />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Certification and Awards</Form.Label>
                            <Form.Control className="my-input" as="textarea" rows={3} />

                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Affiliations</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />

                        </Form.Group>
                    </Col>

                    <h3 className='mb-3 mt-3' >Services Provided</h3>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Accessory Dwelling Units (ADUs)' type='checkbox' id='checkbox1' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Aluminum Siding' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Asphalt Shingle Roofing' type='checkbox' id='checkbox3' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Attic Conversion' type='checkbox' id='checkbox4' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Attic Restoration' type='checkbox' id='checkbox5' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Barn Design & Construction' type='checkbox' id='checkbox6' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Baseboard Installation' type='checkbox' id='checkbox7' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Basement Remodeling' type='checkbox' id='checkbox8' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Basement Waterproofing' type='checkbox' id='checkbox9' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Bathroom Remodeling' type='checkbox' id='checkbox10' />
                        </Form.Group>
                    </Col>



                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Brick Masonry' type='checkbox' id='checkbox11' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Brick Siding' type='checkbox' id='checkbox12' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Carport Installation' type='checkbox' id='checkbox13' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Cedar Siding' type='checkbox' id='checkbox14' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Chimney Construction' type='checkbox' id='checkbox15' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Composition Roofing' type='checkbox' id='checkbox16' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Concrete Construction' type='checkbox' id='checkbox17' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Concrete Flooring' type='checkbox' id='checkbox18' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Concrete Repair' type='checkbox' id='checkbox19' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Countertop Installation' type='checkbox' id='checkbox20' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Countertop Refinishing' type='checkbox' id='checkbox21' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Crown Molding Installation' type='checkbox' id='checkbox22' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Custom Home Bars' type='checkbox' id='checkbox23' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Custom Homes' type='checkbox' id='checkbox24' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Deck Building' type='checkbox' id='checkbox25' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Deck Repair' type='checkbox' id='checkbox26' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Demolition' type='checkbox' id='checkbox27' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Dock Design & Construction' type='checkbox' id='checkbox28' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Drywall Installation' type='checkbox' id='checkbox29' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Earthquake Retrofitting' type='checkbox' id='checkbox30' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Electric Fireplace Installation' type='checkbox' id='checkbox31' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Energy-Efficient Homes' type='checkbox' id='checkbox32' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Exterior Door Installation' type='checkbox' id='checkbox33' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Fiber Cement Siding' type='checkbox' id='checkbox34' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Fireplace Installation' type='checkbox' id='checkbox35' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Fireproofing' type='checkbox' id='checkbox36' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Floor Leveling' type='checkbox' id='checkbox37' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Drywall Texturing' type='checkbox' id='checkbox38' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Flooring Installation' type='checkbox' id='checkbox39' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Foundation Construction' type='checkbox' id='checkbox40' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Foundation Monitoring' type='checkbox' id='checkbox41' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Foundation Repair' type='checkbox' id='checkbox42' />
                        </Form.Group>
                    </Col>



                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Garage Building' type='checkbox' id='checkbox43' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Gas Fireplace Installation' type='checkbox' id='checkbox44' />
                        </Form.Group>
                    </Col>



                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='General Contracting' type='checkbox' id='checkbox45' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Green Building' type='checkbox' id='checkbox46' />
                        </Form.Group>
                    </Col>



                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Grout Repair' type='checkbox' id='checkbox47' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Guesthouse Design & Construction' type='checkbox' id='checkbox48' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Home Additions' type='checkbox' id='checkbox49' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Home Extensions' type='checkbox' id='checkbox50' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Grout Repair' type='checkbox' id='checkbox51' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Guesthouse Design & Construction' type='checkbox' id='checkbox52' />
                        </Form.Group>
                    </Col>


                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Grout Repair' type='checkbox' id='checkbox53' />
                        </Form.Group>
                    </Col>

                    <Col className="mb-3 mt-3" md={6}>
                        <Form.Group style={{ display: 'flex', marginBottom: "5px" }}>
                            <Form.Check
                                custom
                                type='checkbox'
                                id='checkbox54'
                                label=''
                                style={{ marginRight: '10px', marginTop: "10px" }}
                            />
                            <FormControl
                                type='text'
                                placeholder='Other Service'
                                className='inputwithcheckbox'
                            />
                        </Form.Group>
                    </Col>

                    <hr />

                    <h3 className='mb-3 mt-3' >Areas Served</h3>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Barrington' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Central Falls' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Clayville' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Coventry' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='Cranston' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Check style={{ outline: 'none' }} custom inline label='East Greenwich' type='checkbox' id='checkbox2' />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group style={{ display: 'flex', marginBottom: "5px" }}>
                            <Form.Check
                                custom
                                type='checkbox'
                                id='checkbox1'
                                label=''
                                style={{ marginRight: '10px', marginTop: "10px" }}
                            />
                            <FormControl
                                type='text'
                                placeholder='Other Area'
                                className='inputwithcheckbox'
                            />
                        </Form.Group>
                    </Col>
                    <hr className='mt-3' />

                    <h3>Typical Job Cost</h3>


                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cost Range</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder="" />

                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>from</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder=" from" />

                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                        {/* <Form.Label></Form.Label> */}
                        {/* <Form.Control type="text" className="my-input" placeholder=" from" /> */}
                        <div className='text-center' >

                            <hr style={{ marginTop: "50px" }} />
                        </div>

                        {/* </Form.Group> */}
                    </Col>
                    <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>to</Form.Label>
                            <Form.Control type="text" className="my-input" placeholder=" to" />

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cost Details (optional)</Form.Label>
                            <Form.Control className="my-input" as="textarea" rows={3} />

                        </Form.Group>
                    </Col>

                    <Col md={12}>
                        <h3>Photos</h3>
                        <p> Your directory listing photos and videos are now managed through your profile slideshow settings.</p>
                    </Col>

                    <hr className='mt-3 mb-3' />

                    <div className='text-right'>
                        <Button variant="primary mb-2 float-right" style={{ float: "right" }} type="button">
                            Update
                        </Button>
                    </div>
                </Row>

            </Form>


        </>
    )
}

export default ProfileInForm