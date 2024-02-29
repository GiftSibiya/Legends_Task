import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main--container">
        {/* HEAD */}
        <div className="con--head">
          <h3>Login</h3>
          <p>Enter your email below to login to your account</p>
        </div>
        {/* -- */}

        {/* FORM */}
        <div className="con--form">
          <div className="label--con">
            <p className="lables">Email</p>
          </div>
          <input className="Login--input" placeholder="m@example.com"></input>
          <div className="pass">
            <p>Password</p>
            <p>Forgot Your Password</p>
          </div>
          <input className="Login--input"></input>
        </div>
        {/* -- */}

        {/* BUTTONS */}
        <div className="con--btn">
          <button className="btn--black" onClick={() => navigate("/home")}>
            <a href="http://localhost5173/home/">Login</a>
          </button>

          <button className="btn--white"> Login with Google</button>
        </div>
        {/* -- */}

        {/* SIGN IN */}
        <div className="con--signIn">
          <div className="sign--text">
            <p>Don't have an account?</p>
            <p>Sign up</p>
          </div>
        </div>
        {/* -- */}
      </div>
    </div>
  );
}

export default Login;
