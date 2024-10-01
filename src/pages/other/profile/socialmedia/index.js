import React from 'react'
import { Fragment } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/profile-components/Profileheader/ProfileHeader';
import ProfileTags from '../../../../components/profile-components/ProfileTags/ProfileTags'
import ProfileSocialForm from '../../../../components/profile-components/ProfileSocialForm/ProfileSocialForm'


const SocialMedia = () => {
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
                        { label: "Social Media Links", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <ProfileHeader />

                <div className='container'>
                    <div className='row' >
                        <div className='col-lg-3' >
                            <ProfileTags />

                        </div>

                        <div className='col-lg-7' >

                            <ProfileSocialForm />


                        </div>

                    </div>

                </div>

            </ProfessionalLayout>
        </Fragment>
    )
}

export default SocialMedia