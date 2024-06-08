import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
const Team = ({team}) => {
 

  return (
    <div id="team" className="bg-black text-white pb-4">
      <div className="container" data-aos="fade-right" data-aos-duration="3000">
        <h1 className="text-center pt-8 text-4xl">Our Team</h1>
        <div className="grid grid-cols-12 p-4">
          {team.map((barber, index) => (
            <div key={index} className="sm:col-span-3 col-span-6 text-center">
              <div className={`inline-block rounded-full w-32 h-32 bg-cyan-700 p-10 transition-transform duration-300 hover:scale-110`}></div>
              <h1 className="text-4xl">{barber.name}</h1>
              <p className="text-xl">{barber.barberClass}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
