import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="font-sans flex flex-none flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex bg-slate-500">
          <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            NannyNow
          </Link>
        </div>
        <div className="flex justify-between">
          <Link
            to="/login"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            Login
          </Link>
          <Link
            to="/register"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
