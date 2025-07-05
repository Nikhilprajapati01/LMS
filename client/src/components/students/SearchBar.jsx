import React, { useState} from 'react'
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

function SearchBar({data}) {
  const navigate = useNavigate();
  const [input , setinput] = useState( data ? data : '');
  console.log(input);
  

  const navigatebar = (e)=>{
     e.preventDefault();
     navigate('/course-List/' + input)
  }
  return (

   <>
   <form  onSubmit={navigatebar} className='mt-10 flex  border-1 to-black w-[80%] md:w-[60%] lg:w-[40%] items-center px-2 pl-2 py-1.5  rounded-[7px] '>
    <IoIosSearch size={30}/>
      <input 
      onChange={ (e) =>{setinput(e.target.value)} }
      value={input}
      type="text" placeholder='search for cource' className=' w-full h-full outline-none ml-3'/>
       <button type='submit' className='bg-blue-500 text-white px-4 py-1 lg:px-8 lg:py-2 rounded  cursor-pointer'>Search</button>

    </form>
   </>
  )
}

export default SearchBar