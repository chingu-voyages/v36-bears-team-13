import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
const Auth = ({ children }) => {
  console.log("children", children);
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-400 to-indigo-800 justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Auth;

Auth.propTypes = {
  children: PropTypes.node
};
