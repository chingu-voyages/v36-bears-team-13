import React from "react";

const CreateAd = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-100 to-indigo-200 justify-center items-center">
      <div className="flex justify-center items-center w-full h-full">
        <form>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Create new advert
              </h1>
              <div>
                <label htmlFor="title" className="block mb-1 text-gray-600 font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-1 text-gray-600 font-semibold">
                  Description
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="price" className="block mb-1 text-gray-600 font-semibold">
                  Price
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="area" className="block mb-1 text-gray-600 font-semibold">
                  Area
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="availability" className="block mb-1 text-gray-600 font-semibold">
                  Availability
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block mb-1 text-gray-600 font-semibold">
                  Experience
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>
            <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
              Create
            </button>
            <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
