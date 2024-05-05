// import React, { useEffect, useRef, useState } from "react";
// import { CiBoxList } from "react-icons/ci";
// import { IoMdPeople } from "react-icons/io";
// import { MdDateRange } from "react-icons/md";
// import Modal from "../modal";

// const Record = () => {
//   const [modal, setModal] = useState(false);

//   function openModal() {
//     setModal(true)
//   }
//   return (
//     <div className="bg-slate-300 rounded-md p-2">
//       <h1 className="text-xl">Barbie Barbershop</h1>
//       <p>Lviv</p>
//       <label for="f"> <IoMdPeople/> Choose master:</label>
//       <select id="master" name="master">
//           <option value="master1">Master 1</option>
//           <option value="master2">Master 2</option>
//           <option value="master3">Master 3</option>
//         </select>
//       <option value="f"></option>
//       <label for=""> 
//        <MdDateRange /> Choose date & time:
//        </label>
//       <input type="datetime-local" id="date" name="date" />

//       <label className="m-2" for=""><CiBoxList />Choose favor:</label>
//       <select id="service" name="service">
//           <option value="service1">Service 1</option>
//           <option value="service2">Service 2</option>
//           <option value="service3">Service 3</option>
//         </select>
//       <button onClick={openModal}>  
     
//       </button>
// <Modal open={openModal}>
   
// </Modal>
//     </div>
//   );
// };

// export default Record;

import React, { useEffect, useRef, useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import Modal from "../Forms/modal.jsx"
import Button from "../Button/Button.jsx"

const Record = () => {
  const [modalActive, setModalActive] = useState(true); 

  return (
    <div>
      {/* <Button active={modalActive} setActive={setModalActive} /> */}
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};


export default Record;

