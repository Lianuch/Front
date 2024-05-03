import React from "react";

const NavBar = () => {
  const scrollToSection = (sectionId)=>{
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  }
  return (
      <div id="navbar" className="bg-neutral-900">
        <div className="hidden md:flex font-light container px-2 py-1 mx-auto text-white justify-between">
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
              <li className="hover:scale-110 flex items-center px-2 py-2"><a href="">Sign in</a></li>
              <li className="hover:scale-110 flex items-center px-2 py-2"><a href="">Register</a></li>
            </ul>
          </div>
        </div>
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
            <li className="flex items-center px-2 py-2"><a href="">Register</a></li>
          </ul>
        </div>
      </div>
  );
};

export default NavBar;
