import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom'


const WelcomePage = () => {
  return (
    <div id='welcome'>
      <div id='icon'><img id="icon-img" src="https://i.imgur.com/ir32k2T.png" alt="bottoms up logo"/></div>
      <div id="cities" >
        Select a city below to find happy hours and events in your area!
        <br/>
        <Link to="/bars">
        <span><i class="small material-icons">local_bar</i>BALTIMORE</span>
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage
