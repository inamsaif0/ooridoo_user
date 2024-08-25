import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { MdLocationOn } from 'react-icons/md';

export default function TopBanner() {
  return (
    <section className="container-fluid top-banner" style={{ backgroundImage: `url(/assets/img/banner/top-banner.jpg)` }}>
      <div className='bg-overlay' />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className='text-center text-white mb-4 heading-text'>Find the right pro for your project</h2>
        </div>
        <div className="col-md-8 mt-3">
          <InputGroup>
            <Form.Control
              placeholder="What service do you need?"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <InputGroup.Text><MdLocationOn /></InputGroup.Text>
            <Form.Control
              placeholder="Zip Code"
              aria-label="zip-code"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              Get Started
            </Button>
          </InputGroup>
        </div>
      </div>
    </section>
  )
}
