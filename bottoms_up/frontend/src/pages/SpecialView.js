import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import specialItem from '../componenets/SpecialItem';
import Header from '../componenets/Header';

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

    let getBar = async () => {
        try {
          let barResponse = await fetch(`/api/bars/${bar_id}`);
          let barData = await barResponse.json();
          setBar(barData);
    
          if (barData.specials && barData.specials.length > 0) {
            let matchedSpecial = barData.specials.find(special => special.id === parseInt(special_id));
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
      <Header/>
      {special.name} at {bar.name} <br/>
      When?  
      {special.days} <br/>
      What?  
      {special.details} <br/>


      <Link to={`/bars/${bar_id}/specials/${special_id}/update`}><button>Update this special</button></Link>
      <button>Remove this special</button>
    </div>
  )
}

export default SpecialView
