
const ImagePostsCard = () => {
  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"

      alt={"picture"}
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">title</h4>
    <p className="text-gray-400 text-xs my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, consequatur.</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
        {/* <small className="text-xs">{new Date().getFullYear()}</small> */}
        <p className="text-sm font-semibold">0.0001 Likes</p>
      </div>

      <button
        className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
          hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
      
      >
        View Profile
      </button>
    </div>
  </div>
  )
}

export default ImagePostsCard