import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='nav-wrapper'>
      <a href="/" id="header-text"><img id="logo-img"src="https://i.imgur.com/ir32k2T.png"/></a>
      <div className='header-text-wrapper'>
          <h1 className='header'>BottomsUp!</h1>
      </div>
    </div>
  
  )
}

export default Header
