import React from 'react'

const OtherPostsCard = () => {
  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"

      alt={"picture"}
      className="h-50 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">title</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consequatur.</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        {/* <small className="text-xs">{new Date().toUTCString()}</small> */}
        <p className="text-sm font-semibold">0.0001 Likes</p>
      </div>

     
    </div>
  </div>
  )
}

export default OtherPostsCard