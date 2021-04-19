import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "../../App";
import "./Login.css";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import Footer from "../Shared/Footer/Footer";
import login from '../../Images/login.jpg';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
        error: ""
      });

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      console.log(loggedInUser);
      const history = useHistory();
      const location = useLocation();
      const { from } = location.state || { from: { pathname: "/" } };

      initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

    return (
        <div>
          <TopNavbar></TopNavbar>
          <div className="login_container">
            <div className="login_box ">
              <Row className="d-flex justify-content-center flex-column-reverse flex-lg-row">
                <Col lg={7}>
                  <img src={login} alt=""/>
                </Col>
                <Col lg={5}>
                  <div className="login_form">
                    <h3>Login</h3>
                      <div className="text-center">
                      <Button
                      onClick={googleSignIn}
                      
                      variant="outline-success"
                      size="lg"
                      >
                        <FontAwesomeIcon icon={faGoogle} /> Sign in using Google
                    </Button>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
          
          </div>
      <Footer></Footer>
        </div>
    );
};

export default Login;