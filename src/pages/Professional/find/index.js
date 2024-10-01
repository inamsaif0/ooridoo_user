import { Fragment } from "react";
import TopBanner from "../../../components/banner/topBanner";
import SEO from "../../../components/seo";
import ProfessionalLayout from "../../../layouts/professionalLayout";
import ProfessionalServices from "../../../wrappers/product/ProfessionalServices";

const FindProfessional = () => {
    return (
        <Fragment>
            <SEO
                titleTemplate="Find Professional"
                description="Find Professional of Ooridoo"
            />
            <ProfessionalLayout
                headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-1"
            >
                <TopBanner />
                
                <ProfessionalServices spaceBottomClass="pb-60" category="fashion" />
            </ProfessionalLayout>
        </Fragment>
    );
};

export default FindProfessional;
