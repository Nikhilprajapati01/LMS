import React from 'react'
import { assets } from '../../assets/assets';

function Testimonilacard({testimonaildata}) {
    console.log(testimonaildata);
    
  return (
    <div className=' border-1 border-gray-400 rounded-xl shadow-2xl m-2.5  lg:w-[300px]'>
        <div className='flex flex-row bg-gray-300 p-4 gap-10 rounded-xl' >
            <img src={testimonaildata.image} alt=""  className='w-13'/>
            <div className=''>
                <h3 className='text-xl text-gray-900'>{testimonaildata.name}</h3>
                <p className='text-gray-700'>{testimonaildata.role}</p>
            </div>
        </div>
        <div className='flex flex-col gap-5 p-7 '>
              <div className='flex flex-row gap-3'>
            <p>{testimonaildata.rating}</p>
                {[...Array(5)].map((_,i) => (<img key={i} src={i < Math.floor(testimonaildata.rating) ? assets.star : assets.star_blank} alt='star'/>))}
              </div>
            <p className='text-gray-600 text-xl'>{testimonaildata.feedback}</p>
        </div>
        <a href="#" className='text-blue-700 '>Read more</a>
    </div>
  )
}

export default Testimonilacard