import React from 'react'
import { assets } from '../../assets/assets'

function Company() {
  return (
    <>
    <div className='pt-16 m-1 '>
        <p className='text-base  text-gray-500'>Trusted by the company</p>
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10 md:gap-30'>
            <img src={assets.microsoft_logo} alt="" />
            <img src={assets.walmart_logo} alt="" />
            <img src={assets.accenture_logo} alt="" />
            <img src={assets.paypal_logo} alt="" />
        </div>
    </div>
    </>
  )
}

export default Company