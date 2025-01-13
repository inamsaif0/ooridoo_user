import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";


const BlogPost = () => {

  const {t} = useTranslation()

const refundPolicy = [
  {
    title: t("refund_policy.section1.title"),
  },
  {
    title: t("refund_policy.section2.title"),
    subpoints: [
      t("refund_policy.section2.subpoints.point1"),
      t("refund_policy.section2.subpoints.point2"),
      t("refund_policy.section2.subpoints.point3"),
      t("refund_policy.section2.subpoints.point4"),
      t("refund_policy.section2.subpoints.point5"),
      t("refund_policy.section2.subpoints.point6")
    ],
  },
  {
    title: t("refund_policy.section3.title"),
  },
  {
    title: t("refund_policy.section4.title"),
    subpoints: [
      t("refund_policy.section2.subpoints.point1"),
      t("refund_policy.section2.subpoints.point2"),
      t("refund_policy.section2.subpoints.point3")
    ],
  },
  {
    title: t("refund_policy.section5.title"),
  },
  {
    title: t("refund_policy.section6.title"),
  },
  {
    title: t("refund_policy.section7.title"),
  },
  {
    title: t("refund_policy.section8.title"),
  },
  {
    title: t("refund_policy.section9.title"),
  },
  {
    title: t("refund_policy.section10.title"),
  },
];


  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-content">
          <h3>{t("refund_policy.heading")}</h3>
          {refundPolicy.map((item, index) => (
            <div key={index}>
              {/* <h4 style={{marginBottom:'10px'}} >{item.title}</h4> */}
              <div class="single-mission mb-30"><h4>{item.title}</h4></div>
              {item.subpoints && (
                <ul>
                  {item.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>
                      <blockquote>{subpoint}</blockquote>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
