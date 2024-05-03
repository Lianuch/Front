import React from "react";
import { MdOutlineEventNote } from "react-icons/md";

const Button = () => {
  return (
    <div className="z-10 fixed bottom-0 right-0 mb-8 mr-8">
      <button className="text-lg hover:scale-90 hover:bg-stone-900 text-white p-3 bg-zinc-900 rounded-md hidden md:block">
        Online record 
      </button>
    </div>
  );
};

export default Button;
