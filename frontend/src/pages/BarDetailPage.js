import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';

const BarDetailPage = () => {

    let {id} = useParams();
    let [bar, setBar] = useState(null)


    useEffect(() =>{

    })

    return (
    <div>
      <h3>Bar Detail Page {id}</h3>
    </div>
  )
}

export default BarDetailPage
