import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='nav-links'>
            <NavLink to="/" end >Rockets</NavLink>
            <NavLink to="/missions">Missions</NavLink>
        </div>
    </div>
  )
}

export default Navbar