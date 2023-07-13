import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div id='welcome'>
      <div id='icon'>ICON</div>
      <div id="cities" >
        Select a city below to find happy hours and event sin your area!
        <br/>
        <Link to="/bars">
        <span><i class="small material-icons">local_bar</i>BALTIMORE</span>
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage
