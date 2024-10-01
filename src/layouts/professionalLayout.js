import PropTypes from "prop-types";
import { Fragment } from "react";
import ScrollToTop from "../components/scroll-to-top";
import ProfessionalHeader from "../wrappers/header/ProfessionalHeader";
import ProfessionalFooter from "../wrappers/footer/ProfessionalFooter";

const ProfessionalLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass,
}) => {
  return (
    <Fragment>
      <ProfessionalHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <ProfessionalFooter
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      
      <ScrollToTop />
    </Fragment>
  );
};

ProfessionalLayout.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default ProfessionalLayout;
