import React from 'react'
import { assets } from "../../assets/assets";
import SearchBar from './SearchBar';

function Hero() {
  return (
   <>
   <div className="w-full flex flex-col justify-center items-center md:pt-35 pt-20 md:36 px-7 md:px-0 text-center bg-gradient-to-b from-cyan-100/70">
    {/* text-home-heading-large,text-home-heading-small */}
    <h1 className='md:text-5xl text-4xl relative text-gray-800 mx-auto max-w-3xl mb-9  '>Empower your future with the 
      courses designed to <span className='text-blue-600'>fit your choice.</span>
      <img src={assets.sketch} alt=""  className='hidden md:block absolute -bottom-7 right-0'/>
      </h1>
    
      <p className='text-gray-800 hidden md:block mx-auto max-w-3xl text-[18px]'>We bring together world-class instructors, interactive content, and a supportive
      </p>

      <p className='text-gray-800 hidden md:block mx-auto max-w-3xl text-[18px]'>community to help you achieve your personal and professional goals.</p>


    

    {/* for mobile responsive
     */}

     <p  className='text-gray-800 md:hidden mx-auto max-w-3xl'>We bring together world-class instructors to help</p>
     <p className='text-gray-800 md:hidden mx-auto max-w-3xl '> you achieve your professional goals.</p>

    <SearchBar/>
   </div>
   </>
  )
}

export default Hero