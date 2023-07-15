import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import specialItem from '../componenets/SpecialItem';

const SpecialView = ({bar, setBar, index}) => {

    let {bar_id, special_id} = useParams();
    let[special, setSpecial] = useState(null)

    useEffect(() =>{
        getBar()

    }, [special_id])

    let getBar = async () => {
        let barResponse = await fetch(`/api/bars/${bar_id}`)
        let barData = await barResponse.json()
        setBar(barData)
        console.log("bar", bar)
        let barSpecial = await fetch(`/api/bars/${bar_id}/specials/${special_id}`)
        let specialData = await barSpecial.json()
        let specialItem = await specialData.specials
        setSpecial(specialItem)
        
        
    }

    if (!bar || !special) {
        return <p>Loading...</p>;
      }

  return (
    <div>
        Individual special info:
      <h1>{bar.name}</h1>
      <h2>{specialItem.name}</h2>
      <p>{specialItem.details}</p>
    </div>
  )
}

export default SpecialView
