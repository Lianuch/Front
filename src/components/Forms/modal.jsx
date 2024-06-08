import React, { useState, useEffect } from "react";
import "../Forms/modal.css";
import { MdOutlineDateRange } from "react-icons/md";
import Calendar from "../Forms/Calendar";
import ProgressBar from "../Forms/ProgressBar";

const Modal = ({ active, setActive }) => {
  const closeModal = () => {
    setActive(false);
  };

  const [openCal, setOpenCal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  function openCalendar() {
    setOpenCal(true);
  }

  function closeCalendar() {
    setOpenCal(false);
  }

  useEffect(() => {
    if (active) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [active]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack=()=>{
    setActiveStep((prevActiveStep)=>prevActiveStep-1)
  };
  return (
    <div
      onClick={closeModal}
      className={active ? "fixed inset-0 flex justify-center items-center bg-black/30" : "hidden"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-5 border border-solid shadow-md border-gray-400 rounded-xl bg-white transition-all duration-400"
      >
        <h1 className="text-2xl font-bold">Barbie Barbershop</h1>
        <p className="font-medium pb-2">Lviv</p>

        <ProgressBar activeStep={activeStep} />

        {activeStep === 0 && (
          <div className="pt-1">
            <label className="mr-2 ">Choose master:</label>
            <select name="master">
              <option value="master1">Senior</option>
              <option value="master2">Barber</option>
              <option value="master3">Junior</option>
            </select>
            <div className="flex justify-end">
            <button onClick={handleNext} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Next</button>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div className="pt-1 ">
            
          <label className="block  mr-2">
      
              Choose date & time:
              
              <MdOutlineDateRange onClick={openCalendar} className="inline-block ml-2" />
              {openCal && <Calendar onClose={closeCalendar} />}
            </label>
            <div className="flex justify-between">
            <button onClick={handleBack} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Back</button>
            <button onClick={handleNext} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Next</button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="pt-1">
          <label className="mt-2">
              <span>Choose favor: </span>
            </label>
            <select id="service" name="service">
              <option value="service1">Haircut</option>
              <option value="service2">Beard</option>
            </select>
            <div className="flex justify-between">
            <button onClick={handleBack} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Back</button>
            <button onClick={handleNext} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Next</button>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="flex justify-between">
          <button onClick={handleBack} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Back</button>
          <button onClick={closeModal} className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">
            Confirm
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
