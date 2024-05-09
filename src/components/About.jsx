import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="about"
      className="bg-no-repeat bg-cover bg-temp text-white bg-fixed p-4"
    >
      <div className="container h-96 flex items-center" data-aos="fade-up">
        <div className="grid grid-cols-12 text-white w-full">
          <h3 className="col-span-4 flex items-center justify-center mt-6">
            <h1 className="text-5xl">About</h1>
          </h3>
          <p className="col-span-8 text-[20px] text-center p-2 mt-6">
            Barbie Barbershop: Where Classic Cuts Meet Modern Style. Step into
            our men's barbershop for a grooming experience like no other. Our
            skilled barbers blend traditional techniques with contemporary
            trends to deliver sharp, sophisticated looks tailored to every
            gentleman's individual style. Join us and discover the art of
            refined grooming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
