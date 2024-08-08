import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='Nav'>
        <div>
            <img src={logo} className='logo' />
        </div>

        <div className='navItems'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Nav