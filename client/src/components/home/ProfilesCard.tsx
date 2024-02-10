import { UserType } from "@/@types/auth";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

interface Props {
  user:UserType;
}

const ProfilesCard = ({user}:Props) => {
  
  return (
    <div className="flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <div className="rounded-md shadow-sm shadow-pink-500 p-2">
      <Image
      alt="profile"
      src={user.profilepic?user.profilepic:"/user.png"}
      width={30}
      height={30}
      />
      </div>

      <div>
        <h4 className="text-sm">{user.username}</h4>
        <small className="flex flex-row justify-start items-center">
          <span className="mr-1">Visit Profile</span>
          <Link href={`/users/${user.id}`}>
            <MdOpenInNew />
          </Link>
        </small>
      </div>

      {/* <p className="text-sm font-medium"></p> */}
    </div>
  );
};

export default ProfilesCard;
