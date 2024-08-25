import { Fragment } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import Projectsupload from '../../../../components/professional-projects/projectuploads/ProjectsUpload'

const ProfessionalProjectUpload = () => {
  let { pathname } = useLocation();
  return (
    <Fragment>
      <SEO
        titleTemplate="Professional Home"
        description="Professional home of Ooridoo"
      />
      <ProfessionalLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Professional Upload Project", path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <ProfileHeader />
        <div className='container '>
          <Projectsupload />
        </div>
      </ProfessionalLayout>
    </Fragment>
  );
};

export default ProfessionalProjectUpload;
