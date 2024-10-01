import PropTypes from "prop-types";
import clsx from "clsx";

const BrandLogoOneSingle = ({ data, spaceBottomClass,title ,onclick }) => {
  console.log('ahmed==>data==>',data)
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)} onClick={onclick} >
      <img src={data} alt="" 
      // style={{height:'120px',width:'100%',maxWidth:'120px',objectFit:'cover',objectPosition:'top',borderRadius:'15px'}}

      style={{height:'60px',width:'100%',maxWidth:'60px',objectFit:'cover',objectPosition:'top',borderRadius:'15px'}}
      
      />
      <p>{title}</p>
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BrandLogoOneSingle;
