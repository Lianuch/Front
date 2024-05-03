import React from 'react'
import { FaAngleUp } from "react-icons/fa";
const AnchorButton = () => {
    const scrollToSection = (sectionId)=>{
    const section = document.getElementById(sectionId)
    if(section){
        section.scrollIntoView({behavior:"smooth"})
    }
   }
    return (
    <div className='absolute bottom-0 mb-8 ml-8' onClick={()=>scrollToSection("navbar")}>
        <button className='text-2xl hover:bg-stone-800 hover:scale-90 text-white p-3 bg-zinc-900 rounded-lg hidden sm:block'><FaAngleUp/></button>
    </div>
  )
}

export default AnchorButton