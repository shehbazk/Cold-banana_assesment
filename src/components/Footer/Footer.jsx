import React from 'react'
import images from '../../constants/images'
import './Footer.css'
import {AiOutlineTwitter, AiOutlineFacebook , AiOutlineInstagram} from 'react-icons/ai'
import {FaTelegramPlane , FaTiktok} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'



const Footer = () => {
  return (
    <div className='footer'>
        <img src={images.vector7} className='footer__img' alt="" />
        <div className="footer__title">
            Chilled Grape
            <p className='footer__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div className="footer__text-title">
            <ul className='footer__text-li'>
                <li className='footer__li1'>
                    Company
                    </li>
                <li className='footer__li1'>Products</li>
                <li className='footer__li1'>Follow us</li>
            </ul>
            <ul className='footer__li2'>
                <li>About</li>
                <li>Careers</li>
                <li>Our Work</li>
                <li>Contact</li>
            </ul>
            <ul className='footer__li3'>
                <li>About</li>
                <li>Careers</li>
                <li>Our Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer__li4">

        <div className="footer__libox"><FaTelegramPlane  className='footer__icons' /></div>
        <div className="footer__libox"><AiOutlineTwitter className='footer__icons' /></div>
        <div className="footer__libox"><FiYoutube className='footer__icons'/></div>
        <div className="footer__libox"><AiOutlineFacebook className='footer__icons' /></div>
        <div className="footer__libox"><AiOutlineInstagram className='footer__icons'/></div>
        <div className="footer__libox"><FaTiktok className='footer__icons'/></div>

        </div>
    </div>
  )
}

export default Footer