import { useRouter } from "next/router"
import Navlinks from "./Navlinks"

const DesktopNavbar = () => {
  const router = useRouter()
  return (
    <div className="items-center hidden space-x-8 text-sm md:flex">
        <Navlinks styles="flex space-x-[22px]"/>
        <button className="py-2 px-[50px] text-sm text-white border rounded-lg border-black-300 hover:bg-black-400 transition duration-300 ease-in-out" onClick={()=>router.push("/signin")}>
          Login
        </button>
        </div>
  )
}

export default DesktopNavbar