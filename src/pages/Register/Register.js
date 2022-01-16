import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
            <div>
              <label htmlFor="username" className="block mb-1 text-gray-600 font-semibold">
                Username
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="firstname" className="block mb-1 text-gray-600 font-semibold">
                First name
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block mb-1 text-gray-600 font-semibold">
                Last name
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block mb-1 text-gray-600 font-semibold">
                Gender
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 text-gray-600 font-semibold">
                Role
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">
                Email
              </label>
              <input
                type="email"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">
                Password
              </label>
              <input
                type="password"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
