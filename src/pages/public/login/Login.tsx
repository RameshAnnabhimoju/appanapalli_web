import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import "./Login.css";
import loginImageBanner from "../../../assets/images/login_banner_image.png";

import lamp_left from "../../../assets/images/lamp_left.png";
import lamp_long_left from "../../../assets/images/lamp_long_left.png";
import lamp_right from "../../../assets/images/lamp_right.png";
import lamp_long_right from "../../../assets/images/lamp_long_right.png";
import pillar from "../../../assets/images/pillar.png";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent/FooterComponent";
import { login } from "../../../services/appService";
import { useState, ChangeEvent } from "react";
const Login = () => {
  const navigate = useNavigate();
  const loginInitialValues = {
    username: "",
    password: "",
  };
  const [loginValues, setLoginValues] = useState(loginInitialValues);
  const [loginErrors, setLoginErrors] = useState(loginInitialValues);
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);
  const loginHandler = () => {
    if (Object.values(loginValues).every((value) => value?.length > 0)) {
      setLoading(true);
      login(loginValues)
        .then((response) => {
          if (
            response?.response?.status === 400 &&
            response?.response?.data?.type === "fail"
          ) {
            if (
              response?.response?.data?.username &&
              response?.response?.data?.password
            ) {
              return setLoginErrors({
                username: response?.response?.data?.username,
                password: response?.response?.data?.password,
              });
            }
            if (response?.response?.data?.username) {
              return setLoginErrors({
                username: response?.response?.data?.username,
                password: "",
              });
            }
            if (response?.response?.data?.password) {
              return setLoginErrors({
                username: "",
                password: response?.response?.data?.password,
              });
            }
            if (
              response?.response?.data?.error &&
              response?.response?.data?.message
            ) {
              return setGeneralError(response?.response?.data?.message);
            }
          }
          if (response.type === "success" && response.isLoggedin) {
            navigate("/dashboard", { replace: true });
          }
        })
        .catch((error) => console.log("Error @ Login > loginHandler", error))
        .finally(() => {
          setLoading(false);
        });
    }
    if (Object.values(loginValues).every((value) => value?.length === 0)) {
      return setLoginErrors({
        password: "Password cannot be empty",
        username: "Username cannot be empty",
      });
    }
    if (loginValues.username.length === 0) {
      return setLoginErrors({
        password: "",
        username: "Username cannot be empty",
      });
    }
    if (loginValues.password.length === 0) {
      return setLoginErrors({
        password: "Password cannot be empty",
        username: "",
      });
    }
    return setLoginErrors(loginInitialValues);
    // navigate("/dashboard");
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };
  return (
    <div id="login-container">
      <HeaderComponent />
      <div id="login-background-container">
        <img src={pillar} alt="pillar_image" className="pillar_image" />
        <div>
          <div id="garland_image" />
          <div id="login-body-container">
            <div id="login-left">
              <img
                id="lamp_long_left"
                src={lamp_long_left}
                alt="lamp_long_left"
                className="lamp_long"
              />
              <img
                id="lamp_left"
                src={lamp_left}
                alt="lamp_left"
                className="lamp_short"
              />
              <img id="login-image" src={loginImageBanner} alt="image-banner" />
              <img
                id="lamp_right"
                src={lamp_right}
                alt="lamp_right"
                className="lamp_short"
              />
              <img
                id="lamp_long_right"
                src={lamp_long_right}
                alt="lamp_long_right"
                className="lamp_long"
              />
            </div>

            <div id="login-right">
              <h3 id="login-heading-text">Admin Login</h3>
              <Form.Text className="login-error-text">{generalError}</Form.Text>
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="login-input"
              >
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={changeHandler}
                  isInvalid={loginErrors?.username?.length > 0}
                />
              </FloatingLabel>
              <Form.Text className="login-error-text">
                {loginErrors?.username}
              </Form.Text>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="login-input"
              >
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  isInvalid={loginErrors?.password?.length > 0}
                />
              </FloatingLabel>
              <Form.Text className="login-error-text">
                {loginErrors?.password}
              </Form.Text>
              <Button id="login_button" onClick={loginHandler}>
                LOGIN
              </Button>
            </div>
          </div>
        </div>
        <img src={pillar} alt="pillar_image" className="pillar_image" />
      </div>
      <FooterComponent />
      {loading ? <Spinner /> : ""}
    </div>
  );
};

export default Login;
