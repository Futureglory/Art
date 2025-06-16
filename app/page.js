'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
const page = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default page