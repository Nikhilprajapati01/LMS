import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'

function Home() {
   
  return (
    <div>
        <Hero/>
        <div className=' flex justify-center'>
        <SearchBar/>

        </div>
    </div>
  )
}

export default Home