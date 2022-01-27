import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="font-sans flex flex-none flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex-1 ">
        <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          NannyNow
        </Link>
      </div>
      <div className="flex flex-1 space-x-4 justify-end">
        <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Home
        </Link>
        <Link to="/create" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Create advert
        </Link>
        <Link to="/login" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Login
        </Link>
        <Link
          to="/register"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
