import React, {useState, useEffect} from 'react'
import BarItem from '../componenets/BarItem'
import './BarListPage.css'

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
      <div id='bars-list'>
        hello
      <div id='list-label'>Some Local Bars</div>
        {bars.map((bar, index) => (
          <div key={index} className='bar-item'>
            <BarItem  bar={bar}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BarListPage
