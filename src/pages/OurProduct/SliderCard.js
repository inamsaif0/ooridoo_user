import React from "react";
import "./style.css"

const SliderCard = (props) => {

  console.log('==>props.image', props)
  return (
    <>
      {/* <div className="container w-100 border shadow p-3 mb-5 bg-body rounded" > */}
      <div className="container w-100 border shadow p-3 mb-5 bg-body rounded"
      // style={{height:'340px'}}
      >
        <div className="lg-my-3">
          <img
            src={props.image}
            className="rounded w-100"
            alt="No img Found"
            style={{ objectFit: 'cover', height: "150px" }}
          />
          <h5
            className={props.className ? props.className : "text-center mt-3"}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {props.productName}
          </h5>
          <div className="text-start text-capitalize">
            <span dangerouslySetInnerHTML={{ __html: props.description }} />
            {" ₩"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
