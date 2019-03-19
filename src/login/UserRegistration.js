import React from "react";
import { Link } from "react-router-dom";

const UserRegistrationPage = () => (
  <div className="jumbotron">
    <h1>Welcome to </h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-danger btn-md">
      Learn more
    </Link>
  </div>
);

export default UserRegistrationPage;
