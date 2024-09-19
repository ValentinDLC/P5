import React from 'react'
import "./Header.scss"
import {  NavLink } from 'react-router-dom'


function Header() {
  return (
    <nav className='header'>
      <NavLink to="/">
      <div className='logo'>
        <img src='kasa-logo.svg' alt='logo de kasa' />
      </div>
      </NavLink>
      <NavLink to="/">Acceuil</NavLink>
      <NavLink to="/about">
      <div>A propos</div>
      </NavLink>
    </nav>
  )
}

export default Header
