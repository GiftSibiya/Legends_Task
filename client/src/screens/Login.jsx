import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  /// HOOKS ///
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passMatch, setPassMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /// FUNCTIONS ///
  async function checkUserExists(email, password) {
    try {
      const res = await axios.post("http://localhost:4000/api/checkUser", {
        email,
        password,
      });
      if (res.data.exists) {
        // Access the user's password separately
        const userPassword = res.data.user.password;

        if (password.trim() === userPassword.trim()) {
          console.log("Redirecting to home...");
          setPassMatch(true); // Set state after confirming the password match
          history("/home");
        } else {
          alert("Incorrect password, try again buddy");
          setPassword("");
        }
      } else {
        // User does not exist, maybe prompt for registration or other action
        alert("User not found.");
      }
    } catch (error) {
      alert("An error occurred");
      console.log(error);
    }
  }

  /// --///

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
        <form className="con--form">
          <div className="label--con">
            <p className="lables">Email</p>
          </div>
          <input
            type="email"
            className="Login--input"
            placeholder="m@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div className="pass">
            <p>Password</p>
            <p>Forgot Your Password</p>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="Login--input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </form>
        {/* -- */}

        {/* BUTTONS */}
        <div className="con--btn">
          <button
            type="submit"
            className="btn--black"
            onClick={() => checkUserExists(email, password)}
          >
            Log In
          </button>

          <button className="btn--white"> Login with Google</button>
        </div>
        {/* -- */}

        {/* SIGN IN */}
        <div className="con--signIn">
          <div className="sign--text">
            <p>Don't have an account?</p>
            <Link to={"/signup"}> Sign Up</Link>
          </div>
        </div>
        {/* -- */}
      </div>
    </div>
  );
}

export default Login;
