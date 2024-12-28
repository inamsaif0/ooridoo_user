import { useState } from "react";
// import Bg_img from "../../assets/img/bg.jpg";
import Bg_img from "../../assets/img/books/bookcover.jpg";
import Pepsi from "../../assets/img/Pepsi.png";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const heroSliderData = [
  {
    id: 1,
    title: "Ready to Remodel? Find Home Professionals You Can Trust.",
    subtitle:
      "Thousands of homeowners connect with the right pro every week for their remodeling projects.",
    image: Pepsi,
    url: "/shop-grid-standard",
  },
];
const HeroSliderOne = () => {
  const [, setPublicIPAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
   const navigate =useNavigate()

   const {t} = useTranslation()

  // useEffect(() => {
  //   // Fetch public IP address
  //   fetch("https://api64.ipify.org?format=json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const ipAddress = data.ip;
  //       setPublicIPAddress(ipAddress);
  //       console.log(data, ipAddress, "location 1");

  //       // Fetch zip code from IP address
  //       fetch(
  //         `https://api.ipdata.co/${ipAddress}/postal?api-key=15a88f7849645d3f9b6d53237169e1b01626d4266fc950acabe354f0`
  //       )
  //         .then((response) => response.text())
  //         .then((data) => {
  //           setZipCode(data);
  //           console.log(data, "location 2");
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching zip code from IP address:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching public IP address:", error);
  //     });
  // }, []);
  return (
    <div className="slider-area">
      <div className="slider-active  nav-style-1">
        {heroSliderData.map((data, key) => (
          <div key={key}>
            <div className="single-slider align-items-center slider-height-1 bg-img">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                    <div className=" slider-animated-1">
                      <h2 className="animated text-white">{t("home_hero_heading")}</h2>
                      <br />
                      <h4 className="animated text-warning">{t("home_hero_para")}</h4>
                      <br />
                      <div className="slider-btn btn-hover">
                        <div className="row">
                          {/* <div className="col-md-8">
                            <div class="input-group">
                              <select
                                type="text"
                                aria-label="First name"
                                class="form-control-lg form-control w-50 animated fs-6 text-muted"
                              >
                                <option selected hidden>
                                  What Service Do You Need ?
                                </option>
                                <option>1</option>
                                <option>2</option>
                                <option>4</option>
                              </select>
                              <div class="input-group-addon">
                                <i class="fa fa-map-marker fs-5 text-success"></i>
                              </div>
                              <input
                                type="text"
                                disabled
                                value={zipCode}
                                class="form-control form-control-lg w-22 fs-5 animated"
                              />
                            </div>
                          </div> */}

                          <div className="col-md-4">
                            <Button className=" btn-lg btn-warning"
                            onClick={()=>{navigate('/shop/1')}}
                            >
                              Shop Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                  <div className="col-xl-1 col-lg-1 col-md-1 col-0 col-sm-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`.bg-img{
        background-image:url(${Bg_img});
        background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /
      }`}</style>
    </div>
  );
};

export default HeroSliderOne;
