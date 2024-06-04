import React, { useState } from 'react'
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
const Price = ({list}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick=(idx)=>{
    setCurrentIndex(-1);
    setCurrentIndex(idx);
  }
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div id='price' className='bg-no-repeat text-xl bg-cover bg-temp text-white bg-fixed p-4'>
      <div data-aos="zoom-in-up">
        <h1 className='text-4xl text-center'>Price</h1>
        <div className="container mt-2 flex justify-center text-left">
          <div className="order-2 border overflow-auto border-white p-5">
            <table className='table-auto border-collapse border border-white'>
              <thead className='border'>
                <tr className=''>
                  <th className="border border-white p-2">Man haircut</th>
                  <th className="border border-white p-2">550</th>
                  <th className="border border-white p-2">Beard haircut</th>
                  <th className="border border-white p-2">500</th>
                  <th className="border border-white p-2">Hair & beard</th>
                  <th className="border border-white p-2">750</th>
                </tr>
                <tr className='border'>
                  <td className="border border-white p-2">Long haircut</td>
                  <td className="border border-white p-2">450</td>
                  <td className="border border-white p-2">Children's haircut</td>
                  <td className="border border-white p-2">400</td>
                  <td className="border border-white p-2">Haircut & facial shaving</td>
                  <td className="border border-white p-2">650</td>
                </tr>
                <tr className='border'>
                  <td className="border border-white p-2">Nozzle</td>
                  <td className="border border-white p-2">450</td>
                  <td className="border border-white p-2">Toning of the head</td>
                  <td className="border border-white p-2">400</td>
                  <td className="border border-white p-2">Head shaving & beard trimming</td>
                  <td className="border border-white p-2">550</td>
                </tr>
                <tr className='border'>
                  <td className="border border-white p-2">Hair styling</td>
                  <td className="border border-white p-2">450</td>
                  <td className="border border-white p-2">Toning of the beard</td>
                  <td className="border border-white p-2">400</td>
                  <td className="border border-white p-2">Father & son</td>
                  <td className="border border-white p-2">750</td>
                </tr>
                <tr className='border'>
                  <td className="border border-white p-2">Wax hair removal</td>
                  <td className="border border-white p-2">450</td>
                  <td className="border border-white p-2"></td>
                  <td className="border border-white p-2"></td>
                  <td className="border border-white p-2"></td>
                </tr>
              </thead>
              <tbody className='border'>
              </tbody>
            </table>
          </div>
          <ul className='order-1'>
            {list.map((item, idx) => (
              <li className={currentIndex === idx ? "relative border-y border-l border-white px-2 py-1 -mr-px" : ''} key={idx}>
                <button onClick={() => handleClick(idx)}>{item.title}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Price