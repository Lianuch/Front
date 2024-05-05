// import React from 'react'

// const modal = ({children, open}) => {
//   return (
//     <dialog open={open}>
//         {children}
//     </dialog>
//   )
// }

// export default modal
import React from "react";
import "../Forms/modal.css";

const modal = ({ active, setActive }) => {
  const closeModal = () => {
    setActive(false);
  };

  return (
    <div onClick={closeModal} className={active ? "modal active" : "modal"}>
      <div onClick={(e) => e.stopPropagation()} className="modal_content ">
        <h1 className="text-2xl font-bold">Barbie Barbershop</h1>
        <p className="font-medium	">Lviv</p>

        <label for="master" className="mr-2"> Choose master:</label>
        <select id="master" name="master">
          <option value="master1">Senior</option>
          <option value="master2">Barber</option>
          <option value="master3">Junior</option>
        </select>

        <option value="f"></option>
        <label className="mt-1 mr-2" for="">
          Choose date & time:
        </label>
        <input type="datetime-local" id="date" name="date" />

        <br />
        <label className="mt-2" for="">
          <span className="">Choose favor: </span>
        </label>
        <select id="service" name="service">
          <option value="service1">Haircut</option>
          <option value="service2">Beard</option>
        </select>
        <button className="block mt-2 border bg-slate-200 border-slate-600 p-1 rounded-md text-xl font-medium">Confirm</button>
      </div>
    </div>
  );
};

export default modal;
