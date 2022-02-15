import React from "react";
import profile from "../images/sample.jpg";

const About = () => {
  return (
    <>
      <div className="m-4">
        <h1 className="left-h1">
          <span className="sp-purple">About</span> me
        </h1>
      </div>
      <div className="about-container">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={profile} alt="profile" />
            </div>
            <div className="col-md-6">
              <div className="about-head">
                <h3>Sample Name</h3>
                <h5>Sample title</h5>
              </div>
            </div>
            <div className="col-md-2">
              <button className="profile-edit-btn">Edit Profile</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
