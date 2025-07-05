import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';



function Card({course}) {
  console.log(course);
  
  return (
    <>
    <Link to={'./Course/' + course._id} onClick={()=>(scrollTo(0,0,))} 
    className='border-1 border-gray-500/30 pb-6 overflow-hidden rounded-lg mt-15'>
    <img className='w-full' src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='lg:text-[13px] text-xl'>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div className='flex flex-row gap-4 pt-3'>
          <p>4.5</p>
          <div className='flex items-center space-x-2.5'>
            {[...Array(5)].map((_, i)=>(<img key={i} src={assets.star}/>))}
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default Card