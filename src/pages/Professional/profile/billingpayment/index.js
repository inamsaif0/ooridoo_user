import React from 'react'
import { Fragment } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import ProfileTags from '../../../../components/professional-profile/ProfileTags/ProfileTags'
import BillingPaymentForm from '../../../../components/professional-profile/BillingPaymentForm/BillingPaymentForm'


const BillingPayment = () => {
    let { pathname } = useLocation();

    return (
        <Fragment>
            <SEO
                titleTemplate="Fashion Home"
                description="Fashion home of Ooridoo"
            />
            <ProfessionalLayout
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-1"
            >

                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Shipping Address", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <ProfileHeader />

                <div className='container'>
                    <div className='row' >
                        <div className='col-lg-3' >
                            <ProfileTags />

                        </div>

                        <div className='col-lg-7' >

                            <BillingPaymentForm />

                        </div>

                    </div>

                </div>

            </ProfessionalLayout>
        </Fragment>
    )
}

export default BillingPayment