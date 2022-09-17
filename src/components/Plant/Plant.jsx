import React from 'react'
import './Plant.css'
import images  from '../../constants/images'
const Plant = () => {
  return (
    <div className='plant'>
        <div className='plant__text'>
        <div className='plant__title'>

            <h2>Lorem ipsum dolor sit.</h2>
            </div>
            <p className='plant__title-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className='plant__title-btn'><span className='plant__title-btntext'>
              Read More</span></button>
        </div>
        <div className='plant__img'>
            <div className="plant__png1">

            <img src={images.png1} className="png1"alt="" />
            </div>
            <img src={images.vector6}className='vector6' alt="" />

        </div>
    </div>
  )
}

export default Plant