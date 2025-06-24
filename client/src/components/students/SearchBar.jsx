import React from 'react'

function SearchBar() {
  return (
   <>
   <div className='mt-10 flex  border-1 to-black w-[40%] items-center px-2 pl-5 py-1.5  rounded-[7px] '>
      <input type="text" placeholder='search for cource' className=' w-full h-full '/>
       <button className='bg-blue-500 px-8 py-2 rounded-[7px] cursor-pointer'>Search</button>
    </div>
   </>
  )
}

export default SearchBar