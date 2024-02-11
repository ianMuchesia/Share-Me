import { useRouter } from "next/router";
import Navlinks from "./Navlinks";
import { useAppSelector } from "@/store/hooks";
import { FaUser } from "react-icons/fa";

const DesktopNavbar = () => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="items-center hidden space-x-8 text-sm md:flex">
      <Navlinks styles="flex space-x-[22px]" />
      {!auth.isAuthenticated && (
        <button
          className="py-2 px-[50px] text-sm text-white border rounded-lg border-black-300 hover:bg-black-400 transition duration-300 ease-in-out"
          onClick={() => router.push("/signin")}
        >
          Login
        </button>
      )}
      {auth.isAuthenticated && (
        <div
          className="flex flex-col items-center space-x-2 cursor-pointer"
          onClick={() => {
            router.push("/profile");
          }}
        >
          <FaUser className="text-2xl text-white" />
          <span className="text-white">{auth.user?.username}</span>
        </div>
      )}
    </div>
  );
};

export default DesktopNavbar;
