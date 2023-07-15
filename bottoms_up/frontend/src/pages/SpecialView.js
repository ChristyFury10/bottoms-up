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

    // let getBar = async () => {
    //     try{}
    //     let barResponse = await fetch(`/api/bars/${bar_id}`)
    //     let barData = await barResponse.json()
    //     setBar(barData);
    //         if (barData.specials && barData.specials.length>0){
    //         let barSpecial = await bar.specials.find(special => special.id === parseInt(special_id))
    //         // let barSpecial = await fetch(`/api/bars/${bar_id}/specials/${special_id}`)
    //         // let specialData = await barSpecial.json()
    //          // let thisSpecial = await bar.specials.find(special.id === parseInt(special_id))
    //         // // setSpecial(specialData)
    //         setSpecial(barSpecial)
    //         }
    // }

    const getBar = async () => {
        try {
          const barResponse = await fetch(`/api/bars/${bar_id}`);
          const barData = await barResponse.json();
          setBar(barData);
    
          if (barData.specials && barData.specials.length > 0) {
            const matchedSpecial = barData.specials.find(special => special.id === parseInt(special_id));
            if (matchedSpecial) {
              setSpecial(matchedSpecial);
            } else {
              console.log('Special not found.');
            }
          } else {
            console.log('No specials available.');
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
    

    if (!bar || !special) {
        return <p>Loading...</p>;
    }

  return (
    <div>
        Individual special info:
      <h1>{bar.name}</h1>
      {/* <h2>{special.name}</h2> */}
      {/* <p>{specialItem.details}</p> */}
      {special.name}
    </div>
  )
}

export default SpecialView
