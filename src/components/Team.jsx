import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
const Team = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div id="team" className="bg-black text-white pb-4">
      <div className="container" data-aos="fade-right" data-aos-duration="3000" >
      <h1 className=" text-center pt-8 text-4xl"  >Our Team</h1>
        <div className="grid grid-cols-12 p-4 ">
          <div className="sm:col-span-3 col-span-6 text-center">
            <div className="inline-block rounded-full w-32 h-32 bg-green-600 p-10 transition-transform duration-300 hover:scale-110"></div>
            <h1 className="text-4xl ">Arthur</h1>
            <p className="text-xl">Founder</p>
          </div>
          <div className="sm:col-span-3 col-span-6 text-center">
            <div className="inline-block rounded-full w-32 h-32 bg-cyan-700 p-10 transition-transform duration-300 hover:scale-110"></div>
            <h1 className="text-4xl ">Jeremy</h1>
            <p className="text-xl">Senior Barber</p>
          </div>
          <div className="sm:col-span-3 col-span-6 text-center">
            <div className="inline-block rounded-full w-32 h-32 bg-cyan-700 p-10 transition-transform duration-300 hover:scale-110"></div>
            <h1 className="text-4xl ">Andrew</h1>
            <p className="text-xl">Barber</p>
          </div>
          <div className="sm:col-span-3 col-span-6 text-center">
            <div className="inline-block rounded-full w-32 h-32 bg-green-700 p-10 transition-transform duration-300 hover:scale-110"></div>
            <h1 className="text-4xl">Michael</h1>
            <p className="text-xl">Junior Barber</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
