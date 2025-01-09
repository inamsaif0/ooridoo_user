import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { HomeOwnerIcon, ProfessionaIcon } from '../../assets/icons/index';
import { toast } from "react-toastify";
import BaseUrl from "../../BaseUrl";
import defaultUser from '../../assets/img/default-user.png';
import GetStartedStep4 from "../../components/get-started/step4";
import axios from "axios";
import Swal from "sweetalert2";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const LoginSignUp = () => {
  const { pathname } = useLocation();
  const LoginTabRef = useRef(null);
  const Token = localStorage.getItem("Token")
  const [profileImage, setProfileImage] = useState(null);
  const [profilePriviewImage2, setProfilePriviewImage2] = useState(null);
  const [Fullname, setFullname] = useState(null);
  const [Bio, setBio] = useState(null);
  const [phone, setphone] = useState(null);
  const inputRef = useRef(null);
  const { t } = useTranslation();
  // function handleImageUpload(event) {
  //     const file = event?.target?.files[0];
  //     setProfilePriviewImage2(file)
  //     const imageUrl = URL.createObjectURL(file);
  //     setProfileImage(imageUrl);
  // }
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview of the selected image
      const imageUrl = URL.createObjectURL(file);
      setProfilePriviewImage2(file); // Set the selected image file to be sent to the API
      setProfileImage(imageUrl); // Display the selected image as a preview
    }
  };

  const handleImage = () => {
    inputRef.current.click();
  }
  const navigate = useNavigate()

  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(pathname === "/login")
  const [isProfile, setIsProfile] = useState(false)
  useEffect(() => {
    if (pathname === "/complete-profile") {
      setIsProfile(true)
    } else {
      setIsLogin(pathname === "/login");
      setIsProfile(false)
    }
  }, [pathname]);

  // const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: ""
  });
  const [errors, setErrors] = useState({});

  const validateLoginForm = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    // if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const formErrors = validateLoginForm();
    if (Object.keys(formErrors).length === 0) {

      const requestBody = {
        email: formData?.email,
        password: formData?.password,
        device_token: '123'

      }
      // Submit to API
      fetch(`${BaseUrl.baseurl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('response==>', data?.data?.token)
          console.log('UserId response', data?.data?.User)
          // Handle success
          if (data?.status == true) {
            toast.success(data?.message);
            localStorage.setItem('Token', JSON.stringify(data?.data?.token));
            localStorage.setItem('UserId', JSON.stringify(data?.data?.User?._id));
            navigate('/shop')
            LoginTabRef.current.click()
            console.log("Success:", data);
          }
          else {
            toast.error(data?.message);
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    } else {
      setErrors(formErrors);
    }
  };
  // api/auth/register
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };


  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return false; // Must be at least 8 characters long
    }

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      return false; // Must have at least one of each
    }

    return true; // Valid password
  };


  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const formErrors = validateSignUpForm();
    if (Object.keys(formErrors).length === 0) {
      if (!validatePassword(formData?.password)) {
        toast.error("Please enter valid password")
        // alert('Password does not meet requirements');
        return; // Stop further processing
      }

      const requestBody = {
        email: formData?.email,
        password: formData?.password,
        name: formData?.userName,
        role: 'user'

      }
      // Submit to API
      fetch(`${BaseUrl.baseurl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('response==>', data?.data?.token)
          // Handle success
          if (data?.status == true) {
            toast.success(data?.message);
            localStorage.setItem('Token', JSON.stringify(data?.data?.token));
            fetch(`${BaseUrl.baseurl}/api/otp/generate`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "email": formData?.email
              }),
            }).then((res) => {
              console.log(res)
              navigate("/verify-otp")
              // setIsSignUp(true)
            })
            console.log("Success:", data);
          }
          else {
            toast.error(data?.message);
          }
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const validateSignUpForm = () => {
    let formErrors = {};
    if (!formData.userName) formErrors.userName = "User Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password && formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    }
    return formErrors;
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('Token'));

    // const token = JSON.parse(localStorage.getItem('Token'));
    // // var myHeaders = new Headers();
    // // myHeaders.append("token", Token);
    // // myHeaders.append("Content-Type", "application/json");
    // const formData = new FormData();
    // // formData.append('token',Token)
    // formData.append('profile_image', profilePriviewImage2);
    // formData.append('full_name', Fullname);
    // formData.append('phone_number', phone);
    // formData.append('bio', Bio);

    // fetch(`${BaseUrl.baseurl}/api/user/complete-profile`, {
    //   method: "POST",
    //   // headers: myHeaders,
    //   headers: {
    //     token: Token, // Token for authentication
    //   },
    //   body: formData,  // Send FormData to handle file upload
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status === true) {
    //       toast.success(data.message);
    //     } else {
    //       toast.error(data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    if (!profilePriviewImage2) {
      toast.error('Please upload an image');
      return;
    }

    console.log('profilePriviewImage2==>', profilePriviewImage2)

    // const requestBody={
    //   profile_image:profilePriviewImage2,
    //   full_name:Fullname,
    //   phone_number:phone,
    //   bio:Bio
    // }

    // console.log('requestBody==>',requestBody)

    const formData = new FormData();
    formData.append('profile_image', profilePriviewImage2);
    formData.append('full_name', Fullname);
    formData.append('phone_number', phone);
    formData.append('bio', Bio);



    try {
      const config = {
        method: "POST",
        url: `${BaseUrl.baseurl}/api/user/complete-profile`,
        // data: requestBody,
        data: formData,
        headers: {
          token: token,
          "Accept": "application/json",
          'Content-Type': 'multipart/form-data', // Ensure multipart/form-data is used
        },
      };

      const response = await axios(config);
      console.log('==>cart==>api', response)
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
        navigate('/')
        // dispatch(cartFlagfunction(true))
      } else {
        // setLoader(false);
        toast.error(response?.data?.message || "Failed to add review.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        showCloseButton: true,
        toast: true,
        icon: "error",
        title: error?.response?.data?.message || "Something went wrong!",
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } finally {
      // setLoader(false);
    }

  };



  return (
    <Fragment>
      <SEO titleTemplate="Login" description="Login page of Varified Calendar" />
      <LayoutOne>
        <Breadcrumb
          pages={[
            { label: t("global.breadcrumb.home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("global.breadcrumb.login_signup"), path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  {!isSignUp && !isProfile ? (
                    <Tab.Container activeKey={isLogin ? "/login" : "/signup"}>
                      <Nav variant="pills" className="login-register-tab-list" onSelect={(k) => {
                        navigate(k)
                        setIsLogin(k === "/login")
                      }}>
                        <Nav.Item>
                          <Nav.Link eventKey="/login" ref={LoginTabRef}>
                            <h4>{t("global.login")}</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="/signup">
                            <h4>{t("global.signup")}</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>

                        <Tab.Pane eventKey="/login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={handleSubmitLogin}>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder={t("global.email")}
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                                <input
                                  type="password"
                                  className="mb-0"
                                  name="password"
                                  placeholder={t("global.password")}
                                  value={formData.password}
                                  onChange={handleInputChange}
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                                <div className="button-box">
                                  <div className="login-toggle-btn mb-3">
                                    <Link to={process.env.PUBLIC_URL + "/forgotPassword"}>
                                      {t("global.forgotpassword")}
                                    </Link>
                                  </div>
                                  <button type="submit">
                                    <span>{t("global.login")}</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="/signup">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={handleSubmitSignUp}>
                                <input
                                  name="userName"
                                  className="mb-2"
                                  placeholder={t('global.username')}
                                  type="text"
                                  value={formData.userName}
                                  onChange={handleSignUpChange}
                                />
                                {errors.userName && <span className="error">{errors.userName}</span>}
                                <input
                                  className="mb-0 mt-4"
                                  name="email"
                                  placeholder={t('global.email')}
                                  type="email"
                                  value={formData.email}
                                  onChange={handleSignUpChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                                <input
                                  className="mb-0 mt-4"
                                  type="password"
                                  name="password"
                                  placeholder={t("global.createpassword")}
                                  value={formData.password}
                                  onChange={handleSignUpChange}
                                />
                                {errors.password && <span className="error ml-2">{errors.password}</span>}
                                <small className={errors.password ? "ml-4" : ""}  ><br />{t("global.password_description.line1")} <br />{t("global.password_description.line2")}</small>
                                <div className="button-box">
                                  <div className="login-toggle-btn mb-3">
                                    <Link to={"#"} onClick={() => LoginTabRef.current.click()}>
                                      {t("global.already_have_account")} <strong>{t("global.signin")}</strong>?
                                    </Link>
                                  </div>
                                  <button type="submit">
                                    <span>{t("global.signup")}</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  ) : (

                    // <GetStartedStep4 />
                    // <div className="card text-center which-describe">
                    //   <div className="card-header">Which describes you best?</div>
                    //   <div className="card-body">
                    //     <div className="row">
                    //       <div className="col-6 Homeowner">
                    //         <Link to={'/welcomeHomeOwner'}>
                    //           <div className="icon"><HomeOwnerIcon /></div>
                    //           <h3>Homeowner</h3>
                    //           <p>I am a homeowner or interested in home design.</p>
                    //         </Link>
                    //       </div>
                    //       <div className="col-6 Professional">
                    //         <Link to={'/welcomeProfessional'}>
                    //           <div className="icon"><ProfessionaIcon /></div>
                    //           <h3>Professional</h3>
                    //           <p>I offer home improvement services or sell home products.</p>
                    //         </Link>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </div>

                    // ----------- profile work --------------
                    <div>
                      <div className="login-form-container" >
                        <div className="login-register-form">
                          <form onSubmit={handleSubmitProfile}>
                            {/* <div className='row' >
                        <div className='col-md-4'> */}

                            {/* <div className='col-md-4 text-center ' >
                        <h4 className='' >Upload Profile Image</h4>   
                        <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                        <img className='profile-image' onClick={() => handleImage()} src={profileImage ? profileImage : defaultUser} alt="Profile" />

                        <div className='text-center'>
                            <button className='btn btn-primary mt-4 '  > Upload Profile </button>
                        </div>

                    </div> */}

                            {/* <div>
                      
                    </div> */}


                            <h3 className='fw-bold text-decoration-underline  text-center'>{t("global.complete_profile")}</h3>
                            <div className='d-flex align-items-center gap-4 mt-5'>
                              <div className="text-center" >
                                <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                                <img className='profile-image' style={{ height: '200px', width: '200px', borderRadius: '12px' }} onClick={() => handleImage()}

                                  // src={profileImage ? profileImage : defaultUser}
                                  src={profileImage || defaultUser}  // Show defaultUser if no profile image is uploaded
                                  alt="Profile" />
                              </div>
                            </div>
                            <button type='button' className='btn btn-outline-primary mt-4 ms-4 mb-4' onClick={handleImage}>{t("global.update_photo")}</button>
                            {/* </div>
                    </div> */}
                            <input
                              name="userName"
                              className="mb-2"
                              placeholder={t("global.full_name")}
                              type="text"
                              // value={formData.userName}
                              onChange={(e) => { setFullname(e?.target?.value) }}
                            />
                            {/* {errors.userName && <span className="error">{errors.userName}</span>} */}
                            <input
                              className="mb-0 mt-4"
                              name="phone_number"
                              placeholder={t("global.phone_number")}
                              type="text"
                              // value={formData.email}
                              onChange={(e) => { setphone(e?.target?.value) }}
                            />
                            {/* {errors.email && <span className="error">{errors.email}</span>} */}
                            <input
                              className="mb-0 mt-4"
                              type="text"
                              name="password"
                              placeholder={t("global.bio")}
                              // value={formData.password}
                              onChange={(e) => { setBio(e?.target?.value) }}
                            // onChange={handleSignUpChange}
                            />
                            <div className="button-box mt-4">
                              <button type="submit">
                                <span>{t("global.save")}</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginSignUp;
