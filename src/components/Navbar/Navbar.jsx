import React from 'react'
import './Navbar.css'
import images from '../../constants/images'
const Navbar = () => {
  return (<>
        <div className="header">
        <div className="img">
        <img src={images.vector} alt=""/>
        </div>
        <div className="title">
          Chilled grape
        </div>  

        <div className="app__navbar">
          <ul className="app__navbar-links">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="app__navbar-login">
          <button><span>
            Login</span></button>
        </div>
        </div>
  </>
  )
}

export default Navbar