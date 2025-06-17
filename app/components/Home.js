'use client'
import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Banner2 from './Banner2';
const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Banner />
    </div>
    <>
    <Navbar />
    <Banner2 />
    </>
    </>
  )
}

export default Home