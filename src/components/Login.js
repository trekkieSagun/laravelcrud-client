import Axios from "axios";

import React, { useState } from "react";
import usericon from "../images/usericon.png";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_baseUrl;

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      email: data.email,
      password: data.password,
    };

    Axios.post(`${baseUrl}/login`, postData)
      .then((result) => {
        if (result.status === 200) {
          if (result.data.data.token) {
            let user = {
              loggedIn: true,
              token: result.data.data.token,
              name: result.data.data.name,
              profileImg: result.data.data.profileImg,
            };
            localStorage.setItem("user", JSON.stringify(user));

            window.alert(result.data.message);
            navigate("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid email or password");
      });
  };

  return (
    <div className="m-4">
      <h1 className="center-h1">
        <span className="sp-green">Login</span> Page.
      </h1>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={usericon} id="icon" alt="User Icon" />
          </div>

          <form method="POST">
            <input
              type="text"
              className="fadeIn second"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
