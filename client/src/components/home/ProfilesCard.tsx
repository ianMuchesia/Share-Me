import { BiUser } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

const ProfilesCard = () => {
  return (
    <div className="flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <div className="rounded-md shadow-sm shadow-pink-500 p-2">
        <BiUser />
      </div>

      <div>
        <h4 className="text-sm">My Name</h4>
        <small className="flex flex-row justify-start items-center">
          <span className="mr-1">Visit Profile</span>
          <a href="#" className="text-pink-500 mr-2"></a>
          <a href="#">
            <MdOpenInNew />
          </a>
        </small>
      </div>

      {/* <p className="text-sm font-medium"></p> */}
    </div>
  );
};

export default ProfilesCard;
