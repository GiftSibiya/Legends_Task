import React, { useRef, useState } from "react";
import "./SignUp.css";
import axios from "axios";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// http://localhost:4000/api/CreateUser
function SignUp() {
  /// HOOKS ///

  /// FUNCTIONS ///
  const [userValue, setUserValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleOnchange = (e) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value,
    });
  };

  const CloseRef = useRef();
  const handleUserAdd = async (e) => {
    e.preventDefault();

    try {
      const addUser = await axios.post(
        " http://localhost:4000/api/CreateUser",
        userValue
      );
      const response = addUser.data;
      if (response.success) {
        toast.success(response.Message);
        CloseRef.current.click();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  /// --///
  return (
    <div className="main">
      <div className="main--Signup__con">
        {/* HEAD */}
        <div className="con--head">
          <h3>Sign In</h3>
          <p>Enter your email below to login to your account</p>
        </div>
        {/* -- */}

        {/* FORM */}
        <form className="con--form">
          <div className="label--con">
            <p className="lables">Full Name</p>
          </div>
          <input
            type="text"
            name="fullname"
            className="Login--input"
            placeholder="m@example.com"
            onChange={handleOnchange}
          ></input>
          <div className="label--con">
            <p className="lables">Email</p>
          </div>
          <input
            name="email"
            type="email"
            className="Login--input"
            placeholder="m@example.com"
            onChange={handleOnchange}
          ></input>
          <div className="pass">
            <p>Password</p>
            <p>Forgot Your Password</p>
          </div>
          <input
            name="password"
            type="password"
            className="Login--input"
            onChange={handleOnchange}
          ></input>
        </form>
        {/* -- */}

        {/* BUTTONS */}
        <div className="con--btn">
          <button
            type="submit"
            className="btn--black"
            onClick={handleUserAdd}
            ref={CloseRef}
          >
            Sign Up
          </button>

          <button className="btn--white"> Login with Google</button>
        </div>
        {/* -- */}

        {/* SIGN IN */}
        <div className="con--signIn">
          <div className="sign--text">
            <p>Have an account?</p>
            <Link to={"/"}> Log In</Link>
          </div>
        </div>
        {/* -- */}
      </div>
    </div>
  );
}

export default SignUp;
