import React from "react";
import { Outlet } from "react-router";
import UserHeader from "../components/user/UserHeader";

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <Outlet />
    </div>
  );
};

export default UserLayout;
