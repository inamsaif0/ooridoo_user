import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";
import { useTranslation } from "react-i18next";

const BlogDetailsStandard = () => {
  let { pathname } = useLocation();
  const {t} = useTranslation()

  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of Ooridoo"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: t("refund_policy.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            {label: t("refund_policy.breadcrumb.refund_policy"), path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPost />

                  {/* blog post comment */}
                  {/* <BlogComment /> */}
                </div>
              </div>
              {/* <div className="col-lg-3"> */}
                {/* blog sidebar */}
                {/* <BlogSidebar /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogDetailsStandard;
