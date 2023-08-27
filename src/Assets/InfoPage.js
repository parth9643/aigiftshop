import React from 'react';
import InfoImg1 from './Images/InfoImg1.jpeg'
const InfoPage = () => {
  return (
    <div className='InfoContainer'>
        <img src={InfoImg1} alt="Info Image 1" className='InfoImg'/>
        <div className='overlay-text'>Discover Unique AI Gifts</div>
        <div className='overlay-text1'><p>Explore the Finest AI-Powered Gifts for Your Loved Ones, All in One Place! </p></div>
    </div>
  )
}

export default InfoPage
