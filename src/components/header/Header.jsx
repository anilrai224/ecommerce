import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div className="navigation">
                    <NavLink to='/' className='logo'>LOGO</NavLink>
                    <div className="nav-list">
                        <NavLink to='/' className='nav-links'>Home</NavLink>
                        <NavLink to='/shop' className='nav-links'>Shop</NavLink>
                        <NavLink to='/cart' className='nav-links'>Cart</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header