import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Plans from '../../components/plans';
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function ChooseYourPlan() {
    let { pathname } = useLocation();

    return (
        <Fragment>
            <SEO
                titleTemplate="Choose Your Plans"
                description="Choose Your Plans of Varified Calender"
            />
            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Choose Your Plans", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div class="col-xs-12 col-md-12">
                                <Plans />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}