"use client";
import { useState, useContext, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import React from 'react';

const Navbar = () => {

  return (
    <>
        <div className='navbar-container'>
           <div className='logo'>
              <img src='/icons/search.svg' alt='logo-icon'/>
              <p>Qlick</p>
            </div>
           <div className='navbar'>
               <ul>
                   <li className="navLink">
                      <Link href="/">Home</Link>
                   </li>
                   <li className="navLink">
                    <Link href="/about"> About</Link>
                    </li>
                      <li className="navLink">
                    <Link href="/feature"> Feature</Link>
                    </li>
                      <li className="navLink">
                    <Link href="/product"> Product</Link>
                    </li> 
                     <li className="navLink">
                    <Link href="/gallery"> Gallery</Link>
                    </li>
               </ul>
           </div>
          <button className='explore-but'>Explore</button>
       </div>
    </>
  )
}

export default Navbar;