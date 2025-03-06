import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <NavLink to={"/"}>Back to Home</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
