import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            {/* Logo */}
            <img src="/logo.svg" alt="" className='logo' />
        </div>
        <div className="header__left">
            {/* Header Menu */}
            <ul className='header__menu'>
                <li><a href="">Feed</a></li>
                <li><a href="">Explore</a></li>
                <li><a href="">Notifications</a></li>
                <li><a href="">Message</a></li>
                <li><a href="">Profile</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header