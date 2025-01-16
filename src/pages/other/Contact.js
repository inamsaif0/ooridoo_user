import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map"
import { useTranslation } from "react-i18next";

const Contact = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation()

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of Ooridoo"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("contact.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("contact.breadcrumb.contact"), path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <GoogleMap lat={47.444} lng={-122.176} />
            </div>
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>010-3322-9798</p>
                      {/* <p>010-3322-9798</p> */}
                      {/* <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p> */}
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:Ooridoo.contact@gmail.com">
                        Ooridoo.contact@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="https://ooridoo.com">
                        www.ooridoo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>{t("contact.address.line1")}, </p>
                      <p>{t("contact.address.line2")}</p>
                      {/* <p>street, Crossroad 123.</p> */}
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>{t("global.follow_us")}</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>{t("contact.form.heading")}</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder={t("contact.form.name")+"*"} type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder={t("contact.form.email")+"*"} type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder={t("contact.form.subject")+"*"}
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder={t("contact.form.message")+"*"}
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                        {t("contact.form.send")}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
