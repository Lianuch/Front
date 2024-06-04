import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchTeamInfo } from "../services/barbie"; 
const Team = () => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const fetchData = async () => {
      try {
        let data = await fetchTeamInfo();
        setTeam(data);
      } catch (e) {
        console.error("Failed to fetch team info:", e);
      }
    };

    fetchData();
  }, []);

  if (!team) {
    return <p>Loading...</p>;
  }

  return (
    <div id="team" className="bg-black text-white pb-4">
      <div className="container" data-aos="fade-right" data-aos-duration="3000">
        <h1 className="text-center pt-8 text-4xl">Our Team</h1>
        <div className="grid grid-cols-12 p-4">
          {team.map((barber, index) => (
            <div key={index} className="sm:col-span-3 col-span-6 text-center">
              <div className={`inline-block rounded-full w-32 h-32 bg-${barber.color || 'cyan'}-700 p-10 transition-transform duration-300 hover:scale-110`}></div>
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
