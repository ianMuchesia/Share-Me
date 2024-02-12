import { IoIosClose } from "react-icons/io";
import Navlinks from "./Navlinks";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";

interface Props {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

const sideBarStyles =
  "fixed z-40 flex md:hidden right-0 top-0 h-screen gradient-bg-hero w-[75vw] max-w-[400px] py-[50px] px-[10px] justify-center items-center transition-all duration-500 ease-in-out mobile-links";

const overLayStyles = "fixed inset-0 bg-black/30 md:hidden min-h-screen";

const MobileNavbar = ({ onToggleMenu, isMenuOpen }: Props) => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  

  return (
    <>
      <div
        className={`${overLayStyles} ${isMenuOpen ? "block" : "hidden"}`}
        onClick={onToggleMenu}
      ></div>
      <aside
        className={`${sideBarStyles} ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="w-full flex flex-col items-center justify-between py-5 space-y-9 text-lg">
          <div className="" onClick={onToggleMenu}>
            <IoIosClose className="text-8xl text-white" />
          </div>
          {/* navlinks */}
          <Navlinks styles="flex flex-col space-y-5 flex-1 justify-evenly w-full"  onToggleMenu={onToggleMenu}/>
          {auth.isAuthenticated === false && (
            <button
              className="py-4 px-[50px] text-sm bg-gray-800 text-white"
              onClick={async() => {await router.push("/signin");onToggleMenu();}}
            >
              Login
            </button>
          )}
        </nav>
      </aside>
    </>
  );
};

export default MobileNavbar;
