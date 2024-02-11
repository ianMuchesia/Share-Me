import React from "react";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { toast } from "react-toastify";

const GoogleAuth = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <button
          type="button"
          className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          onClick={() => {
            toast.info("Feature not available");
          }}
        >
          <AiOutlineGoogle className="text-2xl" />
          <span className="ml-8 text-xs sm:text-base">Sign in with Google</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
          onClick={() => {
            toast.info("Feature not available");
          }}
        >
          <AiFillApple className="text-2xl" />
          <span className="ml-8 text-xs sm:text-base">Sign in with Apple</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleAuth;
