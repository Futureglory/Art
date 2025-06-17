"use client";
import { useState } from "react";
import Link from "next/link";
import React from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img src='/icons/search.svg' alt='logo-icon' />
        <p>Qlick</p>
      </div>

      <div className='navbar'>
        <ul>
          <li className="navLink">
            <Link
              href="/"
              onClick={() => setActiveTab('Home')}
              className={activeTab === 'Home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li className="navLink">
            <Link
              href="#"
              onClick={() => setActiveTab('About')}
              className={activeTab === 'About' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li className="navLink">
            <Link
              href="#"
              onClick={() => setActiveTab('Feature')}
              className={activeTab === 'Feature' ? 'active' : ''}
            >
              Feature
            </Link>
          </li>
          <li className="navLink">
            <Link
              href="#"
              onClick={() => setActiveTab('Product')}
              className={activeTab === 'Product' ? 'active' : ''}
            >
              Product
            </Link>
          </li>
          <li className="navLink">
            <Link
              href="/gallery"
              onClick={() => setActiveTab('Gallery')}
              className={activeTab === 'Gallery' ? 'active' : ''}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      <button className='explore-but'>Explore</button>
    </div>
  );
}



export default Navbar