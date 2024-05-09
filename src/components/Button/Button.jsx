import React, { useState } from "react";
import Modal from "../Forms/modal";
import { motion, useAnimation } from "framer-motion";
const Button = () => {
  
 
  const [openModal, setOpenModal] = useState(false);
  function openModalWindow() {
    setOpenModal(true);
  }

  return (
    <motion.div  initial={{ opacity: 0, y: 50 }}   animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 3 } }}  className="z-10 fixed bottom-0 right-0 mb-8 mr-8">
      <button onClick={openModalWindow} className="text-lg hover:scale-90 hover:bg-stone-900 text-white p-3 bg-zinc-900 rounded-md hidden md:block">
        Online record
      </button>
      {openModal && <Modal active={openModal} setActive={setOpenModal} />}
    </motion.div>
  );
};

export default Button;
