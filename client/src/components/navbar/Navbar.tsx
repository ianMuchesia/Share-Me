import { useEffect, useState } from "react";
import NavbarContainer from "./NavbarContainer";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)


    const toggleMenu = ()=>{
        setIsOpen((isOpen)=>!isOpen)
		
    }

    useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [isOpen]);

    return (
        <NavbarContainer toggleMenu={toggleMenu} isOpen={isOpen}/>
    )
}

export default Navbar