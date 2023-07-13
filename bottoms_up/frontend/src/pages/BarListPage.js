import React, {useState, useEffect} from 'react'
import BarItem from '../componenets/BarItem'
import './BarListPage.css'
import Header from '../componenets/Header'

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
      <div id='bars-list'>
      <div id='list-label'>Some Local Baltimore Bars</div>
        {bars.map((bar, index) => (
          <div key={index} className='bar-item'>
            <ul class="collection">
            <BarItem  bar={bar}/>
            </ul>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BarListPage
