import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircleFill } from 'react-icons/bs';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function GetStartedStep1() {
    const [isAddressLine2, setIsAddressLine2] = useState(false);
    const [changeCountry, setChangeCountry] = useState(false);
    return (
        <div className="get-started-wrapper">
            <div className="get-started-container" style={{ padding: '20px' }}>
                <div className="get-started-form">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">Address Line 1 <span className='required'>*</span></label>
                            </div>
                            <div className="col-md-6 text-end">
                                <input type="checkbox" id="makePrivate" />
                                <label for="makePrivate">
                                    Make Private
                                </label>
                                &nbsp;
                                <OverlayTrigger
                                    key={"top"}
                                    placement={"top"}
                                    overlay={
                                        <Tooltip id={`tooltip-${"top"}`}>
                                            if you'd rather keep your <strong>Address Private</strong>.
                                        </Tooltip>
                                    }
                                >
                                    <span><BsInfoCircleFill size={18} /></span>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <input
                            type="text"
                            name="address-line"
                            className={!isAddressLine2 ? 'mb-3' : ""}
                            placeholder="Enter Address Line 1"
                        />
                        {!isAddressLine2 ?
                            <div className="addAddress2" onClick={() => setIsAddressLine2(!isAddressLine2)}><IoMdAddCircle size={22} />Add address Line 2</div>
                            : <>
                                <label htmlFor="address-line-2">Address Line 2</label>
                                <input
                                    type="text"
                                    name="address-line"
                                    id='address-line-2'
                                    placeholder="Enter Address Line 2"
                                />
                            </>
                        }
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="city">City <span className='required'>*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    id='city'
                                    placeholder="Enter City"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="state">State</label>
                                <select name="state" id="state" className='form-control'>
                                    <option value="" disabled selected>Please select</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>
                        <label htmlFor="zipcode">Zip Code <span className='required'>*</span></label>
                        <input
                            type="text"
                            className={!changeCountry ? 'mb-1' : ''}
                            name="zipcode"
                            id='zipcode'
                            placeholder="Enter Zip Code"
                        />
                        {!changeCountry ?
                            <>
                                <span className='mb-5'>Not in United States? <Link to={""}><strong className='pointer' onClick={() => setChangeCountry(!changeCountry)}>Change Country</strong></Link></span>
                                <br />
                                <br />
                            </>
                            :
                            <>
                                <label htmlFor="country">Country <span className='required'>*</span></label>
                                <input
                                    type="text"
                                    name="country"
                                    id='country'
                                    placeholder="Enter Country"
                                />
                            </>
                        }
                        <label htmlFor="business-website">Business Website Address</label>
                        <input
                            type="text"
                            name="business-website"
                            id='business-website'
                            placeholder="www.example.com"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
