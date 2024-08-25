import React from 'react'
import  './ProfileTags.css'
import { Link } from 'react-router-dom'

const ProfileTags = () => {
    return (
        <>
                <h4>Account</h4>
                <ul class="no-bullets" >
                    <li> <Link className='no-bullets__li' to={'/professional/profile'} > Profile Info</Link></li>
                    <li> <Link className='no-bullets__li' to={'/professional/contact'} >Contact</Link></li>
                    <li> <Link className='no-bullets__li' to={'/professional/newpassword'} >Password</Link></li>
                    <li> <Link className='no-bullets__li' to={'/professional/socialmedia'} >Social Media</Link></li>
                </ul>
                <hr style={{width:"160px"}} />
                <h4>Shopping Account</h4>
                <ul class="no-bullets" >
                    <li> <Link className='no-bullets__li' to={'/professional/billinginfo'} >Billing Info</Link></li>
                    <li> <Link className='no-bullets__li' to={'/professional/shippingaddress'} >Shipping Address</Link></li>
                </ul>
        </>
    )
}

export default ProfileTags