import React from "react";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import AnchorButton from "./Button/AnchorButton";

const Footer = () => {
  return (
    <div className="relative bg-black text-white">
        <AnchorButton/>

      <div className="container h-32 flex justify-center items-center gap-4">
        <a className="hover:scale-90 " href="">
        <FaInstagram />
        </a>
        <a className="hover:scale-90 " href="">
        <IoCall />
        </a>
        <a className="hover:scale-90 " href="">
        <MdOutlineEventNote />
        </a>
        <a className="hover:scale-90 " href="">
    
        <MdLocationPin />
        </a>

        <p className="text-lg">© BARBIE BARBERSHOP 2024</p>
      </div>
    </div>
  );
};

export default Footer;
