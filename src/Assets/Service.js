import React from 'react'
import ServiceImg1 from './Images/ServiceImg1.jpeg';
import ServiceImg2 from './Images/ServiceImg2.jpeg';
import ServiceImg3 from './Images/ServiceImg3.jpeg';


const Service = () => {
    return (
        <div className='Service'>
            <div className='Service-Tittle'>
                <h1>Our Service</h1>

            </div>


            <div className='Service-cont'>
                <div className='Service-cont2'>
                    <div className='box2'>
                        <div className='box2-img'>
                            <img src={ServiceImg2} />
                        </div>
                        <div className='box2-tittle'>
                            AI-Powered Gift Wrapping
                        </div>
                        <div className='box2-text'>
                            Experience unique and exquisite gift wrapping designs created by AI technology, adding that special touch to your presents.
                        </div>
                    </div>
                </div>


                <div className='Service-cont1'>
                    <div className='box1'>
                        <div className='box1-img'>
                            <img src={ServiceImg1} />
                        </div>
                        <div className='box1-tittle'>
                            Customized AI Gift Recommendations
                        </div>
                        <div className='box1-text'>
                            Get personalized gift recommendations based on AI algorithms that analyze your preferences and interests.
                        </div>
                    </div>
                </div>

                <div className='Service-cont3'>
                    <div className='box3'>
                        <div className='box3-img'>
                            <img src={ServiceImg3} />
                        </div>

                        <div className='box3-tittle'>
                            24/7 AI Customer Support
                        </div>
                        <div className='box3-text'>
                            Enjoy round-the-clock assistance from our AI-powered customer support to address any queries or concerns you may have.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
