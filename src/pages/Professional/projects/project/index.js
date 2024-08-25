import { Fragment } from "react";
import SEO from "../../../../components/seo";
import ProfessionalLayout from '../../../../layouts/professionalLayout';
import Breadcrumb from "../../../../wrappers/breadcrumb/Breadcrumb";
// import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import ProfileHeader from '../../../../components/professional-profile/Profileheader/ProfileHeader';
import Projects from '../../../../components/professional-projects/projects/Projects'

const ProfessionalProject = () => {
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
                        { label: "Professional Project", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <ProfileHeader />
                <div className='container'>
                    <div className='row mt-3 mb-3' >
                        <div className='col-lg-3' >
                            <h5 className="mb-3" style={{fontWeight:"bold"}} >Projects</h5>
                            <ul>
                              <li style={{cursor:"pointer"}} >All Projects</li>
                            </ul>
                        </div>

                        <div className='col-lg-7' >
                            <Projects />
                        </div>

                    </div>

                </div>
      </ProfessionalLayout>
    </Fragment>
  );
};

export default ProfessionalProject;
