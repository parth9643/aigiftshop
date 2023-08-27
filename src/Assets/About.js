import React from 'react'
import AboutImg from './Images/AboutImg.jpeg';

const About = () => {
  return (
    <div id="About">
    <div className='About'>
    <div className='About-tittle'><h1>About us</h1></div>
      <div className='About-Us'>
      
        <div className='AboutUs-Left'>
        <img src={AboutImg} className='AboutImg'/>
        </div>
        <div className='About-content'>
      
        <div className='About-text'>Introducing Gift AI - the simplest method to discover the perfect present for any event! Our advanced AI tech employs the GPT API for crafting distinct and personalized gift concepts rooted in the recipient's preferences, inclinations, and past gifting chronicle. Through SmartGift AI, economize time and pressure, bestowing considerate and lasting presents consistently</div>
        <div className='About-text1'>Our interface is user-friendly: just share a few particulars regarding the recipient - like age, interests, and relation - and entrust SmartGift AI to manage the rest. Our AI model, utilizing natural language processing and machine learning, scrutinizes myriad gift options, yielding tailored suggestions within moments.</div>
        <div className='About-text2'>At Gift AI, we believe that gift-giving should be fun and stress-free. That's why we're dedicated to making the process as easy and enjoyable as possible. Whether you're shopping for a birthday, wedding, holiday, or just because, Gift AI has got you covered.
        </div>

        
      </div>
      </div>
    </div>
  </div>
  )
}

export default About
