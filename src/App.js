import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-top";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import VerifyOtp from "./pages/other/VerifyOtp";
// import SuccessPage from "./pages/other/SuccessPage";
// import "/node_modules/video-react/dist/video-react.css"; // import css

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const AllShop = lazy(() => import("./product/AllShop"));
const StoryDetails = lazy(() => import("./product/StoryDetails"));
const VideoDetails = lazy(() => import("./product/VideoDetails"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const Furniture = lazy(() => import("./product/Furniture"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
// const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginSignUp = lazy(() => import("./pages/other/LoginSignUp"));
const ForgotPassword = lazy(() => import("./pages/other/ForgotPassword"));
// UserProfileRoute
const UserProfile = lazy(() =>
  import("./pages/other/profile/profileinfo/index")
);
const UserContact = lazy(() =>
  import("./pages/other/profile/profileinfo/index")
);
const UserNewPassword = lazy(() =>
  import("./pages/other/profile/newpassword/index")
);
const UserSocial = lazy(() =>
  import("./pages/other/profile/socialmedia/index")
);
const UserShippingAddress = lazy(() =>
  import("./pages/other/profile/shippingaddress/index")
);
const UserBillingInfo = lazy(() =>
  import("./pages/other/profile/billinginfo/index")
);
const UserBillingPayment = lazy(() =>
  import("./pages/other/profile/billingpayment/index")
);

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const SuccessPage = lazy(() => import("./pages/other/SuccessPage"));

const FailedPage = lazy(() => import("./pages/other/FailedPage"));

// ProfessionalRoutes
const ProfessionalHome = lazy(() => import("./pages/Professional/home/index"));
const ProfessionalProfile = lazy(() =>
  import("./pages/Professional/profile/profileinfo/index")
);
const ProfessionalContact = lazy(() =>
  import("./pages/Professional/profile/contact/index")
);
const ProfessionalNewPassword = lazy(() =>
  import("./pages/Professional/profile/newpassword/index")
);
const ProfessionalSocial = lazy(() =>
  import("./pages/Professional/profile/socialmedia/index")
);
const ProfessionalShippingAddress = lazy(() =>
  import("./pages/Professional/profile/shippingaddress/index")
);
const ProfessionalBillingInfo = lazy(() =>
  import("./pages/Professional/profile/billinginfo/index")
);
const ProfessionalBillingPayment = lazy(() =>
  import("./pages/Professional/profile/billingpayment/index")
);
const ProfessionalProject = lazy(() =>
  import("./pages/Professional/projects/project/index")
);
const ProfessionalProjectUpload = lazy(() =>
  import("./pages/Professional/projects/uploadproject/index")
);
const FindProfessional = lazy(() => import("./pages/Professional/find/index"));
const WelcomeHomeOwner = lazy(() => import("./pages/other/WelcomeHomeOwner"));
const WelcomeProfessional = lazy(() =>
  import("./pages/other/WelcomeProfessional")
);
const ChooseYourPlan = lazy(() => import("./pages/other/Plans"));
const GetStarted = lazy(() => import("./pages/other/GetStarted"));

const Detail = lazy(() => import("./pages/Professional/detailpage/index"));
const Photos = lazy(() => import("./product/Photos"));
const PhotosDetails = lazy(() => import("./product/PhotosDetails"));
const ProfessionalIdeabooks = lazy(() =>
  import("./pages/Professional/ideabooks/ideabook")
);
const ProfessionalReview = lazy(() =>
  import("./pages/Professional/review/review")
);
const ProfessionalReviewRequest = lazy(() =>
  import("./pages/Professional/review/review/requestreview")
);
const ProfessionalPastReviewRequest = lazy(() =>
  import("./pages/Professional/review/review/pastreviewrequest")
);

const ProfessionalQuestion = lazy(() =>
  import("./pages/Professional/questions/index")
);
const ProfessionalUnanswerQuestion = lazy(() =>
  import("./pages/Professional/questions/unanswerquestion")
);
const ProfessionalActivityUpdate = lazy(() =>
  import("./pages/Professional/activity/index")
);
const ProfessionalActivityComments = lazy(() =>
  import("./pages/Professional/activity/activitycomment")
);
const ProfessionalActivityPosts = lazy(() =>
  import("./pages/Professional/activity/activitypostshare")
);
const ProfessionalActivityReviews = lazy(() =>
  import("./pages/Professional/activity/activityreviews")
);
const ProfessionalActivityPhoto = lazy(() =>
  import("./pages/Professional/activity/activityphoto")
);
const ProfessionalOrders = lazy(() =>
  import("./pages/Professional/orders/index")
);
const ProfessionalOrderMessage = lazy(() =>
  import("./pages/Professional/orders/ordermessage")
);
const ProfessionalOrdersSentMessage = lazy(() =>
  import("./pages/Professional/orders/sentmessage")
);
const ProfessionalVerifiedCalender = lazy(() =>
  import("./pages/Professional/verifiedcalender/index")
);

const ProfessionalList = lazy(() =>
  import("./pages/Professional/professionalList/index")
);

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomeFashion />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Photos/:slug"}
              element={<Photos />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Blog/:slug"}
              element={<StoryDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/video/:slug"}
              element={<VideoDetails />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/Photos/Details/:slug"}
              element={<PhotosDetails />}
            />

            {/* Shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/Shop/:slug"}
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/AllShop"}
              element={<AllShop />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
              element={<ShopGridTwoColumn />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
              element={<ShopGridNoSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
              element={<ShopGridFullWidth />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
              element={<ShopGridRightSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-standard"}
              element={<ShopListStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-full-width"}
              element={<ShopListFullWidth />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-two-column"}
              element={<ShopListTwoColumn />}
            />

            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/shop/productDetail/:slug"}
              element={<Product />}
            />
            {/* <Route
              path={process.env.PUBLIC_URL + "/product/Furniture/:slug"}
              element={<Product />}
            /> */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:slug"}
              element={<Furniture />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
              element={<ProductTabRight />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/product-sticky/:id"}
              element={<ProductSticky />}
            />
            {/* <Route
              path={process.env.PUBLIC_URL + "/productDetail/:id"}
              // path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            /> */}
              
              <Route
              path={process.env.PUBLIC_URL + "/productDetail"}
              // path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />

<Route
              path={process.env.PUBLIC_URL + "/productDetail/:id"}
              // path={process.env.PUBLIC_URL + "/product-slider/:id"}
              element={<ProductSlider />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />

            {/* Blog pages */}
            <Route
              path={process.env.PUBLIC_URL + "/blog-standard"}
              element={<BlogStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
              element={<BlogNoSidebar />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
              element={<BlogRightSidebar />}
            />
            {/* <Route
              path={process.env.PUBLIC_URL + "/blog-details-standard"}
              element={<BlogDetailsStandard />}
            /> */}
            <Route
              path={process.env.PUBLIC_URL + "/refund-policy"}
              element={<BlogDetailsStandard />}
            />

            {/* Other pages */}
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
            {/* <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              element={<MyAccount />}
            /> */}
            <Route
              path={process.env.PUBLIC_URL + "/login"}
              element={<LoginSignUp />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/signup"}
              element={<LoginSignUp />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/complete-profile"}
              element={<LoginSignUp />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/verify-otp"}
              element={<VerifyOtp />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/forgotPassword"}
              element={<ForgotPassword />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/welcomeHomeOwner"}
              element={<WelcomeHomeOwner />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/welcomeProfessional"}
              element={<WelcomeProfessional />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/choose-your-plans"}
              element={<ChooseYourPlan />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional-onBoarding"}
              element={<GetStarted />}
            />


            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />

            {/* User Profile Routes */}
            <Route
              path={process.env.PUBLIC_URL + "/profile"}
              element={<UserProfile />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/usercontact"}
              element={<UserContact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/newpassword"}
              element={<UserNewPassword />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/socialmedia"}
              element={<UserSocial />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shippingaddress"}
              element={<UserShippingAddress />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/billinginfo"}
              element={<UserBillingInfo />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/billingpayment"}
              element={<UserBillingPayment />}
            />

            {/* User Profile Routes */}

            <Route path="*" element={<NotFound />} />

            <Route
              path={process.env.PUBLIC_URL + "/success"}
              element={<SuccessPage />}
            />

<Route
              path={process.env.PUBLIC_URL + "/failed"}
              element={<FailedPage />}
            />




            {/* professional Routes  */}
            <Route
              path={process.env.PUBLIC_URL + "/professional/home"}
              element={<ProfessionalHome />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/findProfessional"}
              element={<FindProfessional />}
            />
            <Route
              path={
                process.env.PUBLIC_URL + "/professional/Professional-Detail"
              }
              element={<Detail />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/profile"}
              element={<ProfessionalProfile />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/contact"}
              element={<ProfessionalContact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/newpassword"}
              element={<ProfessionalNewPassword />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/socialmedia"}
              element={<ProfessionalSocial />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/shippingaddress"}
              element={<ProfessionalShippingAddress />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/billinginfo"}
              element={<ProfessionalBillingInfo />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/professional/billingpayment"}
              element={<ProfessionalBillingPayment />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/projects"}
              element={<ProfessionalProject />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/projectsupload"}
              element={<ProfessionalProjectUpload />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/ideabooks"}
              element={<ProfessionalIdeabooks />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/review"}
              element={<ProfessionalReview />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/reviewrequest"}
              element={<ProfessionalReviewRequest />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/professional/pastreviewrequest"}
              element={<ProfessionalPastReviewRequest />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/questions"}
              element={<ProfessionalQuestion />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/unansweredquestions"}
              element={<ProfessionalUnanswerQuestion />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/activityupdates"}
              element={<ProfessionalActivityUpdate />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/activitycomments"}
              element={<ProfessionalActivityComments />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/professional/activitypostshare"}
              element={<ProfessionalActivityPosts />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/activityreviews"}
              element={<ProfessionalActivityReviews />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/activityphoto"}
              element={<ProfessionalActivityPhoto />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/orders"}
              element={<ProfessionalOrders />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/ordermessage"}
              element={<ProfessionalOrderMessage />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/ordersent"}
              element={<ProfessionalOrdersSentMessage />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/verifiedcalender"}
              element={<ProfessionalVerifiedCalender />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/professional/list"}
              element={<ProfessionalList />}
            />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
