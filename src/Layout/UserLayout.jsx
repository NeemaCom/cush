import React from "react";
import User from "../pages/User";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <div>
      <User />
      <Outlet />
    </div>
  );
};

export default UserLayout;
