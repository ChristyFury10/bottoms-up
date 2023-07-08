import React, {useState, useEffect} from 'react'
import BarItem from '../componenets/BarItem'

const BarListPage = () => {

    let [bars, setbars] = useState([])

    useEffect(()=>{
        getBars()
    }, [])

    let getBars = async () => {
        let response = await fetch('/api/bars')
        let data =  await response.json()
        console.log("data:", data)
        setbars(data)

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
