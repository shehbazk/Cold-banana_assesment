import React from 'react'
import './Header.css'
import images from '../../constants/images'

const Header = () => {
  return (<>
  <div className="header">

        <img src={images.vector2} className='header__img' alt="" />
    <h1 className='header__title'>
        Lorem ipsum dolor sit.
        </h1>
  </div>
        <img src={images.vector3} className='header__img2' alt="" />
        <div className="button">

        <button className='header__btn'><span>
            Read more
            </span>
            </button> 
        </div>
        <img src={images.vector2} className='header__img3' alt="" />
        <img src={images.vector5} className='header__img5' alt="" />
  </>
  )
}

export default Header