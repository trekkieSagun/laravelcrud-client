import Axios from "axios";
import React, { useEffect, useState } from "react";
import sample from "../images/sample.jpg";

const baseUrl = process.env.REACT_APP_baseUrl;
const imgUrl = process.env.REACT_APP_imageUrl;

const Home = () => {
  const [blogs, setBlogs] = useState("");

  const getAllBlogs = () => {
    Axios.get(`${baseUrl}/get-published-blog`)
      .then((response) => {
        const allBlogs = response.data.data;

        setBlogs(allBlogs);
      })
      .catch(console.error("Error"));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="m-4">
      <h1 className="center-h1">Check out some of our blogs.</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="blog-container">
            <div className="blog-img">
              <img src={sample} alt="sample" />
            </div>
            <h2>Blog title</h2>
            <p>
              Blog Description goes here. Do people born in 2000 get to choose
              if they are Generation Y or Generation Z? How do you decide what
              generation you want to belong to?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
