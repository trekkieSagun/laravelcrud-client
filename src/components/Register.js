import React, { useState } from "react";
import usericon from "../images/usericon.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_baseUrl;

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profileImg: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeImage = (e) => {
    setData({
      ...data,
      profileImg: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImg", data.profileImg);

    Axios.post(`${baseUrl}/register`, formData).then((result) => {
      if (result.data.success === true) {
        window.alert("User registered successfully.");
        navigate("/login");
      }
    });
  };

  return (
    <div className="m-4">
      <h1 className="center-h1">
        <span className="sp-purple">Registration</span> Page !!
      </h1>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={usericon} id="icon" alt="data Icon" />
          </div>

          <form method="POST">
            <input
              type="text"
              className="fadeIn second"
              name="name"
              placeholder="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="fadeIn second"
              name="email"
              placeholder="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              value={data.password}
              onChange={handleChange}
            />
            {/* <label for="profileImg">Profile Picture</label> */}
            <input
              type="file"
              className="fadeIn third"
              name="profileImg"
              // value={data.password}
              onChange={handleChangeImage}
            />

            <input
              type="submit"
              className="fadeIn fourth"
              value="Register"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
