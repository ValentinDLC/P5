import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <nav className='header'>
      <div className='logo'>
        <img src='kasa-logo.svg' alt='logo de kasa' />
      </div>
      <div className='lien'>Acceuil</div>
      <div>A propos</div>
    </nav>
  )
}

export default Header
