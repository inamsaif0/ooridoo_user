import React from 'react'
import { Fragment } from "react";
import SEO from "../../../../components/seo";
import LayoutOne from '../../../../layouts/LayoutOne';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/profile-components/Profileheader/ProfileHeader';
import ProfileTags from '../../../../components/profile-components/ProfileTags/ProfileTags'
import BillingCard from '../../../../components/profile-components/BillingCard/BillingCard'


const BillingInfo = () => {
    let { pathname } = useLocation();

    return (
        <Fragment>
            <SEO
                titleTemplate="Fashion Home"
                description="Fashion home of Ooridoo"
            />
            <LayoutOne
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-1"
            >

                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Billing Info", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <ProfileHeader />

                <div className='container'>
                    <div className='row' >
                        <div className='col-lg-3' >
                            <ProfileTags />

                        </div>

                        <div className='col-lg-7 mb-4 mt-4'  >
                            <BillingCard />
                        </div>

                    </div>

                </div>

            </LayoutOne>
        </Fragment>
    )
}

export default BillingInfo