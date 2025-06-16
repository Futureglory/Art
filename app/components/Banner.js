import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <div>
        <h1 className='banner-content'>
          The Art of Human Expression, Uncover
        </h1>
        <h1 className='banner-content2'>
          The <img src='/icons/stories.jpg' alt='stories' /> Behind the Art
          <img src='/icons/image.png' alt='treeImage' />
        </h1>
        <p className='banner-content3'>
Discover new favorites among our diverse exhibitions, Uncover the stories and inspiration behind the art 
        </p>
      </div>
      <div className='bannerImage'>
        <img src='/icons/art.png' alt='art' />
      </div>
     </div>
    </>
  )
}

export default Banner