import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'
import { Appcontext } from '../../context/Appcontext'


function CourseSection() {

  const {allcources} = useContext(Appcontext)
  // console.log(allcources);
  
  return (
   <>
   <div className='mt-20 lg:px-10'>
    <div className='w-sm} pb-3'>
    <h1 className='text-3xl'>Learn from the best</h1>
    <p className='mt-4 text-gray-800'>Discover our top-rated courses across various categories. From coding and design to business and wellness, <br /> our courses are crafted to deliver results.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-4 '>
      { allcources.slice(0,4).map((course , index)=> <Card key={index} course={course}/> )
        }
    </div>
    <Link to={'/Course-List'} onClick={()=> {scrollTo(0,0)}}>
     <button  className='border-2 to-black py-3 px-2 mt-6 rounded'>See All courses</button>
    </Link>
   </div>
   </>
  )
}

export default CourseSection