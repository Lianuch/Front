import React, { useState } from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Record from "./Forms/Record";
import { motion } from "framer-motion";

const HeroSection = ({textCopy}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCopy = () => {
  navigator.clipboard.writeText(textCopy)
  .then(()=>{
    console.log('Text copied to clipboard:', textToCopy);

  })
  .catch(err => {
    console.error('Failed to copy text: ', err);
  });
  };

  return (
    <motion.div  id="hero" className="flex flex-col justify-center items-center bg-cover h-[1000px] bg-saloon ">
      {showModal && <Record setActive={setShowModal} />}
      <motion.div initial={{x:'100vw'}} animate={{x:1}} transition={{type:'spring', delay:0.5,  stiffness:12}} className="flex flex-col justify-center items-center">

      <button onClick={toggleModal} className="inline-block text-4xl  hover:scale-110 border rounded-md border-white-900 text-center p-1 m-1">
        <MdOutlineEventNote className="inline-block mr-1 text-white" />
        <span className="text-white">Record</span>
      </button>
      <button onClick={handleCopy} className="hover:scale-110 text-4xl rounded-md text-center p-1 m-1 text-white">
        <IoCall className="inline-block mr-1" />
        380 95 164 5489
      </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
