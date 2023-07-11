import React, {useState, useEffect} from 'react'
import BarItem from '../componenets/BarItem'

const BarListPage = ({bars, setBars}) => {


    useEffect(()=>{
        getBars()
    }, [])

    let getBars = async () => {
        let response = await fetch('/api/bars')
        let data =  await response.json()
        console.log("data:", data)
        setBars(data)

    }
  
  return (
    <div>
      <div className='bars-list'>
        
        {bars.map((bar, index) => (
            <BarItem key={index} bar={bar}/>
        ))}
      </div>
    </div>
  )
}

export default BarListPage
