import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'
import Company from '../../components/students/company'
import CourseSection from '../../components/students/CourseSection'
import TestimonialSection from '../../components/students/TestimonialSection'
import CalltoAction from '../../components/students/CalltoAction'

function Home() {
   
  return (
    <div className='flex flex-col text-center items-center space-x-1.5 '>
        <Hero/>
        <Company/>
        <CourseSection/>
        <TestimonialSection/>
        <CalltoAction/>
        
    </div>
  )
}

export default Home