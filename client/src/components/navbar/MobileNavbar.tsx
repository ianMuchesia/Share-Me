import { IoIosClose } from "react-icons/io";


;
interface Props{
    onToggleMenu: () => void;
    isMenuOpen: boolean;
}





const sideBarStyles =
	"fixed z-40 flex md:hidden right-0 top-0 h-screen gradient-bg-hero w-[75vw] max-w-[400px] py-[50px] px-[10px] justify-center items-center transition-all duration-500 ease-in-out mobile-links";

const overLayStyles = "fixed inset-0 bg-black/30 md:hidden min-h-screen";

const MobileNavbar = ({onToggleMenu, isMenuOpen}:Props) => {
  
  return (
    <>
    <div
      className={`${overLayStyles} ${
        isMenuOpen ? "block" : "hidden"
      }`}
      onClick={onToggleMenu}
    ></div>
    <aside
      className={`${sideBarStyles} ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="w-full flex flex-col items-center justify-between py-5 space-y-9 text-lg">
        <div className=""><IoIosClose className="text-8xl text-white"/></div>
       {/* navlinks */}
        <button
          className="py-4 px-[50px] text-sm bg-gray-800 text-white"
          
        >Login</button>
      </nav>
    </aside>
  </>
  )
}

export default MobileNavbar