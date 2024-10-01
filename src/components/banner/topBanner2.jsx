import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { MdLocationOn } from 'react-icons/md';

export default function TopBanner2() {
  return (
    <section className="container-fluid top-banner2">
      <div className='bg-overlay' />
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className='text-center text-white mb-2 heading-text'>Get Matched with Local Interior Designers & Decorators</h2>
          <p className='fs-6 text-center text-white mb-4'>Answer a few questions and we’ll put you in touch with pros who can help</p>
        </div>
        <div className="col-md-4 mt-3">
          <InputGroup>
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
