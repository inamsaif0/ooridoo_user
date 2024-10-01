import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/section-title/SectionTitle";
import BaseUrl from "../../BaseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const VerifeidTV = () => {
  const [getvideos, setGetvideos] = useState([]);
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    try {
      var config = {
        method: "get",
        url: `${BaseUrl.baseurl}videos`,
      };
      axios(config)
        .then(function (response) {
          console.log(response, "video");
          setImgurl(response?.data?.imagePath);
          setGetvideos(response?.data?.video);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message,
        animation: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  }, []);
  const myproduct =[
    {
    name:'iphone',
    username:'ahmed',
    image:'img1',
    users_count:'2',
    description:'hellosdfdsf'

  },
  {
    name:'iphone2',
    username:'ahmed',
    image:'http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'2',
    description:'hello'

  },
  {
    name:'iphone3',
    username:'ahmed3',
    image:'	http://localhost:3000/static/media/kt3.b4bba8cc613612224b7b.jpg',
    users_count:'22',
    description:'hellosdfsd'

  },
  {
    name:'iphone4',
    username:'ahmed3',
    image:'img1',
    users_count:'23',
    description:'helloadsfsdf'

  }
]
  console.log(getvideos, "getvideos");
  return (
    <>
      <SectionTitle
        titleText="Ooridoo TV"
        positionClass="text-center"
      />
      <div className="row my-5">
        <div className="col-md-12 mt-2 border border-2 bg-white">
          {myproduct.length !== 0 ? (
            myproduct?.map((e) => {
              return (
                <>
                  <Link to={`/video/${e?.slug}`}>
                    <div className="row border border-1">
                      <div className="col-md-2">
                        {" "}
                        <img
                          src={imgurl + e?.image}
                          class="card-img-top mw-100 rounded my-2"
                          alt="..."
                          height={175}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="my-3">
                          <h3 className="fw-bold text-capitalize">{e?.name}</h3>
                          <p className="mt-3">{e?.description}</p>
                          <div className="d-flex">
                            <i
                              class="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              class="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })
          ) : (
            <h3 className="text-center mt-1">No Data Found</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifeidTV;
