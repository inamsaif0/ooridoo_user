import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropzoneAreaBase } from 'material-ui-dropzone';


const ProjectsUpload = () => {

    const [selectoption, setSelectoption] = useState(2)

    const [selectradiobox, setRadiobox] = useState("space")

    const [Addtext, setAddtext] = useState('')
    const [values, setValues] = useState([]);

    const handleButtonClick = () => {
        setValues([...values, Addtext])
        setAddtext(' ')
    };

    const handleInputChange = (event) => {
        setAddtext(event.target.value)
    };



    console.log("selectradiobox", selectradiobox)


    const handleSelect = (e) => {
        setSelectoption(Number(e.target.value))
    }

    const handleRadio = (e) => {
        setRadiobox(e.target.value)
    }

    return (
        <>
            <Row className='mb-4' >

                <Col md={7} >
                    <div className="blog-wrap-2 mb-30">
                        <div className="blog-content-2 mb-3">
                            <h3 className='mb-3' >Upload Content to a Project</h3>
                            <p className='mb-3' >A Project is a collection of photos and videos of your own work or products. Projects are usually best organized by client, job site, or product line.</p>



                            <Form className='mb-4' >
                                <Row>
                                    <Col md={9}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select Project</Form.Label>
                                            <Form.Control as="select" className='my-select' defaultValue={2} onChange={(e) => handleSelect(e)}  >
                                                <option value={1}  >Which project was it part of?</option>
                                                <option value={2}  >Create a new project</option>
                                                <option disabled >Your existing projects</option>
                                            </Form.Control>

                                        </Form.Group>
                                    </Col>

                                    {
                                        selectoption === 2 ?
                                            <>

                                                <Col md={9}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>New Project Name</Form.Label>
                                                        <Form.Control type="text" className="my-input" placeholder="" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={9}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Project Address</Form.Label>
                                                        <p>Increase your visibility to homeowners looking for professionals who have worked in their area.</p>
                                                        <Form.Control type="text" className="my-input" placeholder="Enter Full Project Address (will not be shared publicly)" />
                                                    </Form.Group>
                                                </Col>
                                                {/* category */}

                                                <Col md={9}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Category</Form.Label>
                                                        <div className="radio-container">
                                                            <Form.Check inline label="Spaces" type="radio" value={"space"} checked={selectradiobox === "space"} name="color" id="Spaces" onChange={(e) => handleRadio(e)} />
                                                            <Form.Check inline label="Drawings" type="radio" value={"Drawings"} checked={selectradiobox === "Drawings"} name="color" id="Drawings" onChange={(e) => handleRadio(e)} />
                                                            <Form.Check inline label="Before Photos" type="radio" value={"Photos"} checked={selectradiobox === "Photos"} name="color" id="Before Photos" onChange={(e) => handleRadio(e)} />
                                                            <Form.Check inline label="Video" type="radio" value={"Video"} name="color" checked={selectradiobox === "Video"} id="Video" disabled onChange={(e) => handleRadio(e)} />
                                                        </div>
                                                    </Form.Group>
                                                </Col>

                                                {
                                                    selectradiobox === "space" ? (
                                                        <>
                                                            <Col md={5}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Project Year </Form.Label>
                                                                    <Form.Control as="select" className='my-select' >
                                                                        <option>Year</option>
                                                                        <option>2023</option>
                                                                        <option>2022</option>
                                                                        <option>2021</option>
                                                                        <option>2020</option>
                                                                        <option>2019</option>
                                                                        <option>2018</option>
                                                                        <option>2017</option>
                                                                        <option>2016</option>
                                                                        <option>2015</option>
                                                                        <option>2014</option>
                                                                        <option>2013</option>
                                                                        <option>2012</option>
                                                                        <option>2011</option>
                                                                        <option>2010</option>
                                                                        <option>2009</option>
                                                                        <option>2008</option>
                                                                        <option>2007</option>
                                                                        <option>2006</option>
                                                                        <option>2005</option>
                                                                        <option>Pre-2005</option>
                                                                    </Form.Control>

                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={5}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Project Cost </Form.Label>
                                                                    <Form.Control as="select" className='my-select' >
                                                                        <option  >Select cost range</option>
                                                                        <option>Less than $1,000</option>
                                                                        <option>$1,000 - $2,500</option>
                                                                        <option>$2,501 - $5,000</option>
                                                                        <option>$5,001 - $7,500</option>
                                                                        <option>$7,501 - $10,000</option>
                                                                        <option>$10,001 - $25,000</option>
                                                                        <option>$25,001 - $50,000</option>
                                                                        <option>$50,001 - $75,000</option>
                                                                        <option>$75,001 - $100,000</option>
                                                                        <option>$100,001 - $150,000</option>
                                                                        <option>$150,001 - $200,000</option>
                                                                        <option>$200,001 - $500,000</option>
                                                                        <option>$500,001 - $750,000</option>
                                                                        <option>$750,001 - $1,000,000</option>
                                                                        <option>$1,000,001 - $1,500,000</option>
                                                                        <option>$1,500,001 - $2,000,000</option>
                                                                        <option>More than $2,000,000</option>
                                                                    </Form.Control>

                                                                </Form.Group>
                                                            </Col>

                                                            <Col md={9}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Styles </Form.Label>
                                                                    <Form.Control as="select" className='my-select' >
                                                                        <option  >What is the style of this space?</option>
                                                                        <option>Asian</option>
                                                                        <option>Coastal</option>
                                                                        <option>Contemporary</option>
                                                                        <option>Craftsman</option>
                                                                        <option>Eclectic</option>
                                                                        <option>Farmhouse</option>
                                                                        <option>French Country</option>
                                                                        <option>Industrial</option>
                                                                        <option>Mid-Century Modern</option>
                                                                        <option>Modern</option>
                                                                        <option>Rustic</option>
                                                                        <option>Scandinavian</option>
                                                                        <option>Southwestern</option>
                                                                        <option>Traditional</option>
                                                                        <option>Transitional</option>
                                                                        <option>Tropical</option>
                                                                        <option>Victorian</option>
                                                                    </Form.Control>

                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Link to Website </Form.Label>
                                                                    <Form.Control type="text" className="my-input" placeholder="" />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Keywords (separated by comma) </Form.Label>
                                                                    <Form.Control className="my-input" as="textarea" rows={3} />

                                                                </Form.Group>
                                                            </Col>
                                                            <Col md={9}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Get noticed on other profiles by crediting other pros on this project</Form.Label>
                                                                    <p>(i.e. Architect, Interior Designer, Photographer, Plumber, Electrician, etc)</p>
                                                                    <hr />
                                                                    <ul>
                                                                        {values.map((value, index) => (
                                                                            <li key={index}>{value}</li>
                                                                        ))}
                                                                    </ul>

                                                                    <div className='d-flex mt-2' >
                                                                        <Form.Control type="text" className="my-input mr-4" value={Addtext} placeholder="" onChange={handleInputChange} />
                                                                        <Button variant="outline-secondary ml-3" style={{ marginLeft: "7px" }} onClick={handleButtonClick}  >Add</Button>
                                                                    </div>
                                                                </Form.Group>
                                                            </Col>

                                                            <Col md={9}>
                                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                    <Form.Label>Select Content </Form.Label>
                                                                    <DropzoneAreaBase
                                                                        acceptedFiles={['image/*']}
                                                                        dropzoneText={" Drop Photos here  or click to upload "}
                                                                        onChange={(files) => console.log('Files:', files)}
                                                                        onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                                                                    />
                                                                    <p>By uploading photos, you are approving their display by Houzz, saying that you either own the rights to the image or that you have permission or a license to do so from the copyright holder, and agreeing to abide by Verified's terms of use.</p>
                                                                </Form.Group>
                                                            </Col>

                                                        </>) :
                                                        selectradiobox === "Drawings" ? (
                                                            <>

                                                                <Col md={9}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Styles </Form.Label>
                                                                        <Form.Control as="select" className='my-select' >
                                                                            <option  >What is the style of this Drawing?</option>
                                                                            <option>Asian</option>
                                                                            <option>Coastal</option>
                                                                            <option>Contemporary</option>
                                                                            <option>Craftsman</option>
                                                                            <option>Eclectic</option>
                                                                            <option>Farmhouse</option>
                                                                            <option>French Country</option>
                                                                            <option>Industrial</option>
                                                                            <option>Mid-Century Modern</option>
                                                                            <option>Modern</option>
                                                                            <option>Rustic</option>
                                                                            <option>Scandinavian</option>
                                                                            <option>Southwestern</option>
                                                                            <option>Traditional</option>
                                                                            <option>Transitional</option>
                                                                            <option>Tropical</option>
                                                                            <option>Victorian</option>
                                                                        </Form.Control>

                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={9}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Link to Website </Form.Label>
                                                                        <Form.Control type="text" className="my-input" placeholder="" />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={9}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Keywords (separated by comma) </Form.Label>
                                                                        <Form.Control className="my-input" as="textarea" rows={3} />

                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={9}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Get noticed on other profiles by crediting other pros on this project</Form.Label>
                                                                        <p>(i.e. Architect, Interior Designer, Photographer, Plumber, Electrician, etc)</p>
                                                                        <hr />
                                                                        <ul>
                                                                            {values.map((value, index) => (
                                                                                <li key={index}>{value}</li>
                                                                            ))}
                                                                        </ul>

                                                                        <div className='d-flex mt-2' >
                                                                            <Form.Control type="text" className="my-input mr-4" value={Addtext} placeholder="" onChange={handleInputChange} />
                                                                            <Button variant="outline-secondary ml-3" style={{ marginLeft: "7px" }} onClick={handleButtonClick}  >Add</Button>
                                                                        </div>
                                                                    </Form.Group>
                                                                </Col>

                                                                <Col md={9}>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                        <Form.Label>Select Content </Form.Label>
                                                                        <DropzoneAreaBase
                                                                            acceptedFiles={['image/*']}
                                                                            dropzoneText={" Drop Photos here  or click to upload "}
                                                                            onChange={(files) => console.log('Files:', files)}
                                                                            onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                                                                        />
                                                                        <p>By uploading photos, you are approving their display by Houzz, saying that you either own the rights to the image or that you have permission or a license to do so from the copyright holder, and agreeing to abide by Verified's terms of use.</p>
                                                                    </Form.Group>
                                                                </Col>

                                                            </>) :
                                                            selectradiobox === "Photos" ? (
                                                                <>

                                                                    <Col md={9}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Styles </Form.Label>
                                                                            <Form.Control as="select" className='my-select' >
                                                                                <option  >What is the style of this Photo?</option>
                                                                                <option>Asian</option>
                                                                                <option>Coastal</option>
                                                                                <option>Contemporary</option>
                                                                                <option>Craftsman</option>
                                                                                <option>Eclectic</option>
                                                                                <option>Farmhouse</option>
                                                                                <option>French Country</option>
                                                                                <option>Industrial</option>
                                                                                <option>Mid-Century Modern</option>
                                                                                <option>Modern</option>
                                                                                <option>Rustic</option>
                                                                                <option>Scandinavian</option>
                                                                                <option>Southwestern</option>
                                                                                <option>Traditional</option>
                                                                                <option>Transitional</option>
                                                                                <option>Tropical</option>
                                                                                <option>Victorian</option>
                                                                            </Form.Control>

                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col md={9}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Link to Website </Form.Label>
                                                                            <Form.Control type="text" className="my-input" placeholder="" />
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col md={9}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Keywords (separated by comma) </Form.Label>
                                                                            <Form.Control className="my-input" as="textarea" rows={3} />

                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col md={9}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Get noticed on other profiles by crediting other pros on this project</Form.Label>
                                                                            <p>(i.e. Architect, Interior Designer, Photographer, Plumber, Electrician, etc)</p>
                                                                            <hr />
                                                                            <ul>
                                                                                {values.map((value, index) => (
                                                                                    <li key={index}>{value}</li>
                                                                                ))}
                                                                            </ul>

                                                                            <div className='d-flex mt-2' >
                                                                                <Form.Control type="text" className="my-input mr-4" value={Addtext} placeholder="" onChange={handleInputChange} />
                                                                                <Button variant="outline-secondary ml-3" style={{ marginLeft: "7px" }} onClick={handleButtonClick}  >Add</Button>
                                                                            </div>
                                                                        </Form.Group>
                                                                    </Col>

                                                                    <Col md={9}>
                                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                            <Form.Label>Select Content </Form.Label>
                                                                            <DropzoneAreaBase
                                                                                acceptedFiles={['image/*']}
                                                                                dropzoneText={" Drop Photos here  or click to upload "}
                                                                                onChange={(files) => console.log('Files:', files)}
                                                                                onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                                                                            />
                                                                            <p>By uploading photos, you are approving their display by Houzz, saying that you either own the rights to the image or that you have permission or a license to do so from the copyright holder, and agreeing to abide by Verified's terms of use.</p>
                                                                        </Form.Group>
                                                                    </Col>

                                                                </>) :
                                                                <h1>video</h1>
                                                }

                                            </>

                                            :
                                            selectoption === 1 ?
                                                <Col md={9}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Select Content </Form.Label>
                                                        <DropzoneAreaBase
                                                            acceptedFiles={['image/*']}
                                                            dropzoneText={" Drop Photos here  or click to upload "}
                                                            onChange={(files) => console.log('Files:', files)}
                                                            onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                                                        />
                                                        <p>By uploading photos, you are approving their display by Houzz, saying that you either own the rights to the image or that you have permission or a license to do so from the copyright holder, and agreeing to abide by Verified's terms of use.</p>
                                                    </Form.Group>
                                                </Col>
                                                : null

                                    }

                                </Row>
                                <Button variant="primary mb-2 " style={{ float: "right" }} type="button">
                                    Update
                                </Button>
                            </Form>

                        </div>
                    </div>
                </Col>

                <Col md={5} >
                    <div className="blog-wrap-2 mb-30">

                        <div className="blog-content-2">
                            <h4>
                                Photo Guidelines
                            </h4>
                            <p>
                                Photos that do not meet these guidelines will be removed.
                            </p>
                            <div className="blog-share-comment">
                                <div className="blog-btn-2">
                                    <div>
                                        <img src='/assets/img/iconyes.png' style={{ height: "79px" }} alt='yes img' className="img-fluid" />
                                    </div>
                                </div>
                                <div className="blog-share">
                                    <h4>Do's</h4>
                                    <ul>
                                        <li>Photos of residential spaces</li>
                                        <li>Large Photos (1000 pixels wide or more)</li>
                                        <li>JPEG, GIF, PNG, or 1-Page TIFF file formats</li>
                                        <li>Good Quality Photos</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="blog-share-comment">
                                <div className="blog-btn-2 mr-2">
                                    <div>
                                        <img src='/assets/img/iconno.png' style={{ height: "79px" }} alt='no img' className="img-fluid" />
                                    </div>
                                </div>
                                <div className="blog-share">
                                    <h4>Don'ts</h4>
                                    <ul>
                                        <li >Photos of commercial or office spaces</li>
                                        <li>Small Photos</li>
                                        <li>PDF, Multi-Page TIFF, or EPS file formats</li>
                                        <li>Low Quality Photos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default ProjectsUpload