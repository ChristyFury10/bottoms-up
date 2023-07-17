import React, {useState, useEffect} from 'react'
import BarItem from '../componenets/BarItem'
import './BarListPage.css'
import Header from '../componenets/Header'
import MapComp from '../componenets/MapComp'


const BarListPage = ({bars, setBars}) => {


    useEffect(()=>{
        getBars()
    }, [])

    let getBars = async () => {
        let response = await fetch('/api/bars')
        let data =  await response.json()
        setBars(data)

    }
  
  return (
    <div>
      <Header/>
      <div className='main-list'>
          <div div id='bars-list'>
          <div id='list-label'>Some Local Baltimore Bars</div>
            {bars.map((bar, index) => (
              <div key={index} className='bar-item'>
                <ul class="collection">
                <BarItem  bar={bar}/>
                </ul>
                </div>
            ))}
          </div>
          <div>
            <MapComp bars={bars}></MapComp>
          </div>
        </div>
      <span>Want to add a bar that's not here yet?  </span>
      <a href = "/#/bars/create"><button>Add Bar</button></a>
    </div>
  )
}

export default BarListPage
