import React from "react";

const SliderCard = (props) => {
  return (
    <>
      {/* <div className="container w-100 border shadow p-3 mb-5 bg-body rounded" > */}
      <div className="container w-100 border shadow p-3 mb-5 bg-body rounded" 
      // style={{height:'340px'}}
       >
        <div className="my-3">
          <img
            src={props.image}
            class="rounded mw-100 w-100"
            alt="No img Found"
            // height={161.19}
            style={{objectFit:'cover'}}
            height={320}
          />
          <h5 class={props.className ? props.className : "text-center mt-3"}>
            {props.productName}
          </h5>
          <div
            className="text-start text-capitalize"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default SliderCard;
