// import React, { Fragment } from "react";

// const ProductRating = ({ ratingValue }) => {
//   // Calculate the number of full and empty stars
//   const fullStars = Math.floor(ratingValue);
//   const emptyStars = 5 - fullStars;

//   return (
//     <Fragment>
//       {/* Render filled stars */}
//       {[...Array(fullStars)].map((_, index) => (
//         <i key={index} className="fa fa-star yellow text-warning"></i>
//       ))}
//       {/* Render empty stars */}
//       {[...Array(emptyStars)].map((_, index) => (
//         <i key={index} className="fa fa-star-o yellow"></i>
//       ))}
//     </Fragment>
//   );
// };

// export default ProductRating;


// import React, { useState, Fragment } from "react";

// const ProductRating = ({ initialRatingValue, onRatingChange ,FormData,setFormData }) => {
//   const [ratingValue, setRatingValue] = useState(initialRatingValue);

//   const handleStarClick = (index) => {
//     // setRatingValue(index + 1);
//     if (FormData) {

//       setFormData((prev)=>({
//         ...prev,
//         rating:index + 1  
//       }))
//       // onRatingChange(index + 1);
//     }
//   };

//   return (
//     <Fragment>
//       {[...Array(5)].map((_, index) => (
//         <i
//           key={index}
//           className={`fa ${index < FormData ? 'fa-star yellow text-warning' : 'fa-star-o yellow'}`}
//           onClick={() => handleStarClick(index)}
//           style={{ cursor: 'pointer' }}
//         ></i>
//       ))}
//     </Fragment>
//   );
// };

// export default ProductRating;

import React, { Fragment } from "react";

const ProductRating = ({ FormData, setFormData ,onlyView=false }) => {
  const handleStarClick = (index) => {
    setFormData((prev) => ({
      ...prev,
      rating: index + 1,
    }));
  };

  return (
    <Fragment>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa ${index < FormData ? 'fa-star yellow text-warning' : 'fa-star-o yellow'}`}
          // onClick={() =>{onlyView ? null :  handleStarClick(index) }  }
          onClick={() => !onlyView && handleStarClick(index)}
          style={{ cursor: 'pointer' }}
        ></i>
      ))}
    </Fragment>
  );
};

export default ProductRating;

