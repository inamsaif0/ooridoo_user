import React from 'react'
import { Link } from 'react-router-dom'


const BillingCard = () => {
    return (
        <>
            <div class="card text-center which-describe">
                <div class="card-header">
                Please select a payment method from the available options. ?
                </div>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6 Homeowner">
                        <Link to={'/professional/billingpayment'} >
                            {/* <img src="/assets/img/home-owner.png" className="img-fluid" alt="homeowner"></img> */}
                            <h3>Add Credit Card</h3>
                            {/* <p>I am a homeowner or interested in home design.</p> */}
                        </Link>
                        </div>
                        <div className="col-6 Professional">
                        <Link to={''} >
                            {/* <img src="/assets/img/professional.png" className="img-fluid" alt="homeowner"></img> */}
                            <h3>Add PayPal</h3>
                            {/* <p>I offer home improvement services or sell home products.</p> */}
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillingCard