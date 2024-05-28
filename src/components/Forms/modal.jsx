import React from "react";
import "../Forms/modal.css";
import { MdOutlineDateRange } from "react-icons/md";
import Calendar from "../Forms/Calendar";
import { useState,useEffect } from "react";
const Modal = ({ active, setActive }) => {
  const closeModal = () => {
    setActive(false);
  };

  const [openCal,setOpenCal] = useState(false);
  function openCalendar(){
    setOpenCal(true)
  }
  function closeCalendar(){
    setOpenCal(false)
  }
  
  useEffect(()=>{
    if(active){
      document.body.classList.add("modal-open");
    }
    else{
      document.body.classList.remove("modal-open");
    }
    return()=>{
      document.body.classList.remove("modal-open")
    }
  },[active])

  return (
    <div onClick={closeModal} className={active ? "fixed inset-0 flex justify-center items-center bg-black/30" : "hidden"}>
      <div onClick={(e) => e.stopPropagation()} className="p-5 border border-solid shadow-md border-gray-400 rounded-xl bg-white transition-all duration-400    ">
        <h1 className="text-2xl font-bold">Barbie Barbershop</h1>
        <p className="font-medium	">Lviv</p>

        <label  className="mr-2"> Choose master:</label>
        <select  name="master">
          <option value="master1">Senior</option>
          <option value="master2">Barber</option>
          <option value="master3">Junior</option>
        </select>

        <label className="block mr-2" for="">
          Choose date & time:<MdOutlineDateRange  onClick={openCalendar} className="inline-block ml-2" />

          {openCal && <Calendar onClose={closeCalendar}/>}
        </label>

        
        <label className="mt-2" >
          <span  className="">Choose favor: </span>
        </label>
        <select id="service" name="service">
          <option value="service1">Haircut</option>
          <option value="service2">Beard</option>
        </select>
        <button onClick={closeModal} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
