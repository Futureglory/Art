'use client';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
const images = [
  { src: "/icons/face.jpg", alt: "a scared face" },
  { src: "/icons/smiles.jpg", alt: "children smiling" },
  { src: "/icons/women.jpg", alt: "women standing" },
  { src: "/icons/eyes.jpg", alt: "a creepy eyes" },
];
const Banner = () => {
  const [order, setOrder] = useState(images.map((_, i) => i)); // [0, 1, 2, 3]

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => {
        const newOrder = [...prev];
        const first = newOrder.shift();
        newOrder.push(first);           
        return newOrder;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container">

      <Navbar />
      <div className='banner-container'>
        <h1 className="banner-title">
          The <span className="highlight">Art</span> of Human Expression, Uncover <br />
          The <span className="lavish">Stories</span> Behind the Art

          <img
            src='/icons/image.png'
            alt='treeImage'
            className="treeImage"
          />
        </h1>
        <p className="banner-subtitle">
          Discover new favorites among our diverse exhibitions, Uncover the <br />
          stories and inspiration behind the art
        </p>
        <button className="explore-btn">Explore</button>
      </div>
      <div className="showcase-container">
        {order.map((imgIndex, position) => {
          const image = images[imgIndex];
          return (
            <img
              key={imgIndex}
              src={image.src}
              alt={image.alt}
              className={`showcase-img pos-${position}`}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Banner;
