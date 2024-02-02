import { useState } from "react";
import { FaTimes } from "react-icons/fa";
// import Identicon from 'react-identicons'

const GeneratedPost = () => {
   

    const handleClose = () => { }
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300 `}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">Your Generated Image</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">Prompt</h4>
            <p className="text-gray-400 text-xs my-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus, eligendi.
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                {/* <Identicon
                string={"owner"}
                size={50}
                className="h-10 w-10 object-contain rounded-full mr-3"
              /> */}
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@owner</small>
                  <small className="text-pink-800 font-semibold">...</small>
                </div>
              </div>

              <div className="flex flex-col">
                <small className="text-xs">Current Likes</small>
                <p className="text-sm font-semibold self-end">0</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2">
            (
            <button
              className="flex flex-row justify-center items-center
              w-full text-[#e32970] text-md border-[#e32970]
              py-2 px-5 rounded-full bg-transparent 
              drop-shadow-xl border hover:bg-[#bd255f]
              hover:bg-transparent hover:text-white
              hover:border hover:border-[#bd255f]
              focus:outline-none focus:ring mt-5"
            >
              Close
            </button>
            ) 
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPost;
