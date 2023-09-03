import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import specialItem from '../componenets/SpecialItem';
import Header from '../componenets/Header';

const SpecialView = ({bar, setBar, index, special, setSpecial}) => {

    let navigate = useNavigate();
    let {bar_id, special_id} = useParams();
    // let[special, setSpecial] = useState(null)

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
          let barResponse = await fetch(`http://18.116.241.164:8000/api/bars/${bar_id}`);
          let barData = await barResponse.json();
          setBar(barData);
          // console.log(bar)
    
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
    
      const handleDelete = async () => {
        const options = {
          method: "DELETE",
        };
    
        await fetch(`http://18.116.241.164:8000/api/bars/${bar_id}/specials/${special_id}/delete`, options);
    
        navigate(`/bars/${bar_id}`);
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


      <Link to={`/bars/${bar_id}/specials/${special_id}/update`}><a class="btn-floating btn-large waves-effect waves-light blue z-depth-5"><i class="material-icons">edit</i></a></Link>
      <a class="btn-floating btn-large waves-effect waves-light red z-depth-5" onClick={handleDelete}><i class="material-icons">delete</i></a>
      <Link to={`/bars/${bar_id}`}><a class="btn-floating btn-large waves-effect waves-light green z-depth-5"><i class="material-icons">arrow_back</i></a></Link>
    </div>
  )
}

export default SpecialView
