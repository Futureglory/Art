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
          <button className='explore-but2'>Explore</button>
          <div className='reviews'>
            <div className='review-count'>
              <h2>500+ Reviews</h2>
              <img src='/icons/star.svg' alt='5-star rating' className='stars'/>
                       <img src='/icons/star.svg' alt='5-star rating' className='stars'/>
              <img src='/icons/star.svg' alt='5-star rating' className='stars'/>
              <img src='/icons/star.svg' alt='5-star rating' className='stars'/>
              <img src='/icons/star.svg' alt='5-star rating' className='stars'/>

            </div>
            <div className='statistics'>
              <div className='copies-sold'>
                <h1>30K+</h1>
                <p>Copies Sold</p>
              </div>
              <div className='monthly-visitors'>
                <h1>150K</h1>
                <p>Monthly Visitors</p>
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='social'>
            <img src='/icons/facebook.svg' alt='facebook' />
            <img src='/icons/instagram.svg' alt='instagram' />
            <img src='/icons/twitter.svg' alt='twitter' />
            <img src='/icons/linkedin.svg' alt='linkedin' />
            <img src='/icons/youtube.svg' alt='youtube' />
            </div>
        </div>

        <div className='bannerImage'>
          <img src='/icons/art.png' alt='art' />
        </div>
      </div >
    </>
  )
}

export default Banner