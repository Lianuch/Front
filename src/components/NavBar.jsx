import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Login from "./Forms/Login"
import Register from "./Forms/Register"

const NavBar = () => {
  const scrollToSection = (sectionId)=>{
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  }

  const [openSign,setOpenSign] = useState(false);

  function openSignPage(){
    setOpenSign(true)
  }
  return (
      <div  id="navbar" className="bg-neutral-900 text-xl">
        <motion.div initial={{x:"-250vw"}}  animate={{x:-1}} transition={{delay:0.12,type:"spring", stiffness:12}}  className="hidden md:flex font-light container px-2 py-2 mx-auto text-white  justify-between">
          <ul className="flex">
            <li className="hover:scale-110 flex items-center px-2 py-2">
              <a href="#" onClick={()=>scrollToSection("about")}>About</a>
            </li>
            <li className="hover:scale-110 flex items-center px-2 py-2">
              <a href="#" onClick={()=>scrollToSection("team")}>Team</a>
            </li>
            <li className="hover:scale-110 flex items-center px-2 py-2">
              <a href="#" onClick={()=>scrollToSection("price")}>Price</a>
            </li>
            <li className="hover:scale-110 flex items-center px-2 py-2">
              <a href="#" onClick={()=>scrollToSection("contacts")}>Contacts</a>
            </li>
          </ul>
          <div>
            <ul className="flex">
              <li className="hover:scale-110 flex items-center px-2 py-2">
                <a onClick={openSignPage} href="">Sign in</a>
                {openSign && <Login/>}
                </li>
              <li onClick={openSignPage} className="hover:scale-110 flex items-center px-2 py-2">
                <a href="">Sign up</a>
                {openSign && <Register/>}
                </li>
            </ul>
          </div>
        </motion.div>
        <div className="md:hidden text-white">
          <ul className="flex flex-col">
            <li className="flex items-center px-2 py-2">
            <a href="#" onClick={()=>scrollToSection("about")}>About</a>
              </li>
            <li className="flex items-center px-2 py-2">
            <a href="#" onClick={()=>scrollToSection("team")}>Team</a>
              </li>
            <li className="flex items-center px-2 py-2"><a href="">Price</a></li>
            <li className="flex items-center px-2 py-2"><a href="">Contacts</a></li>
            <li className="flex items-center px-2 py-2"><a href="">Sign in</a></li>
            <li className="flex items-center px-2 py-2"><a href="">Sign up</a></li>
          </ul>
        </div>
      </div>
  );
};

export default NavBar;
