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
    <div className='fixed bottom-0 mb-8 ml-8' onClick={()=>scrollToSection("hero")}>
        <button className='text-2xl hover:bg-stone-800 hover:scale-90 text-white p-3 bg-zinc-900 rounded-lg'><FaAngleUp/></button>
    </div>
  )
}

export default AnchorButton