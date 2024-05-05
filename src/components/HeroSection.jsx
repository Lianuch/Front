import React, { useState } from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Record from "./Forms/Record";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div id="hero" className="flex flex-col justify-center items-center bg-cover h-[1000px] bg-saloon ">
      {showModal && <Record setActive={setShowModal} />}
      <button onClick={toggleModal} className="inline-block text-4xl  hover:scale-110 border rounded-md border-white-900 text-center p-1 m-1">
        <MdOutlineEventNote className="inline-block mr-1 text-white" />
        <span className="text-white">Record</span>
      </button>
      <button className="hover:scale-110 text-4xl rounded-md text-center p-1 m-1 text-white">
        <IoCall className="inline-block mr-1" />
        380 95 164 5489
      </button>
    </div>
  );
};

export default HeroSection;
