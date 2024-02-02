import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}
const NavbarContainer = ({ toggleMenu, isOpen }: Props) => {
  const [navbar, setNavbar] = useState(false);


    // change navbar height on scroll
  useEffect(() => {
    const changeHeight = () => {
      if (window.scrollY > 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    const onScroll = setTimeout(() => {
      window.addEventListener("scroll", changeHeight);
    }, 500);

    return () => {
      clearTimeout(onScroll);
      window.removeEventListener("scroll", changeHeight);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center px-6 md:px-10 bg-black-500/80 lg:px-[50px]  ease-in-out duration-300 ${
          navbar
            ? "h-[70px] shadow-[0_10px_30px_-10px] shadow-shadow-black"
            : "h-[100px]"
        }`}
      >
        <nav className="flex items-center justify-between w-full">
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <Link href={"/"}>
              <Image
                className=" cursor-pointer"
                src="/Designer-removebg.png"
                alt="Timeless Logo"
                height={60}
                width={60}
              />
            </Link>
          </div>

          {/* menu bar */}
          <div className={`md:hidden ${isOpen ? "hidden":"block"}`} onClick={toggleMenu}>
            <CiMenuFries className="text-white text-2xl font-bold" />
          </div>

          <DesktopNavbar />
          <MobileNavbar isMenuOpen={isOpen} onToggleMenu={toggleMenu} />
        </nav>
      </div>
    </>
  );
};

export default NavbarContainer;
