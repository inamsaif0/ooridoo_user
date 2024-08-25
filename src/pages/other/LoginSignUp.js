import React, { Fragment, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { HomeOwnerIcon, ProfessionaIcon } from '../../assets/icons/index'

const LoginSignUp = () => {
  let { pathname } = useLocation();
  const LoginTabRef = useRef(null);

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  }

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of Varified Calender"
      />
      {/* <LayoutOne headerTop="visible"> */}
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Login | Sign Up", path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  {!isSignUp ?
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login" ref={LoginTabRef}>
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="sign-up">
                            <h4>Sign Up</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <input
                                  type="text"
                                  name="user-name"
                                  placeholder="Username or Email"
                                />
                                <input
                                  type="password"
                                  className="mb-0"
                                  name="user-password"
                                  placeholder="Password"
                                />
                                <div className="button-box">
                                  <div className="login-toggle-btn mb-3">
                                    {/* <input type="checkbox" />
                                  <label className="ml-10">Keep me sign in</label> */}
                                    <Link to={process.env.PUBLIC_URL + "/forgotPassword"}>
                                      Forgot your password?
                                    </Link>
                                  </div>
                                  <button type="submit">
                                    <span>Login</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sign-up">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={handleSubmit}>
                                <input
                                  name="user-email"
                                  placeholder="Email"
                                  type="email"
                                />
                                <input
                                  className="mb-0"
                                  type="password"
                                  name="user-password"
                                  placeholder="create a password"
                                />
                                <small>Use 8 or more characters, with a mix of letters, numbers and symbols</small>
                                <div className="button-box">
                                  <div className="login-toggle-btn mb-3">
                                    {/* <label className="ml-10">Keep me sign in</label> */}
                                    <Link to={"#"} onClick={() => LoginTabRef.current.click()}>
                                      Already have an account? <strong>Sign in</strong>?
                                    </Link>
                                  </div>
                                  <button type="submit">
                                    <span>Sign Up</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                    :
                    <div class="card text-center which-describe">
                      <div class="card-header">
                        Which describes you best?
                      </div>
                      <div class="card-body">
                        <div className="row">
                          <div className="col-6 Homeowner">
                            <Link to={'/welcomeHomeOwner'}>
                              <div className="icon"><HomeOwnerIcon /></div>
                              <h3>Homeowner</h3>
                              <p>I am a homeowner or interested in home design.</p>
                            </Link>
                          </div>
                          <div className="col-6 Professional">
                            <Link to={'/welcomeProfessional'}>
                              <div className="icon"><ProfessionaIcon /></div>
                              <h3>Professional</h3>
                              <p>I offer home improvement services or sell home products.</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
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
