import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import SpecialItem from '../componenets/SpecialItem';
import Header from '../componenets/Header';

const BarDetailPage = ({bar, setBar, index}) => {

    let {id} = useParams();
    console.log(id)

    let[specials, setSpecials] = useState([])
    let[special, setSpecial] = useState([])

    console.log("specialState",specials)

    useEffect(() =>{
        getBar()

    }, [])

    
    let getBar = async () => {
        let response = await fetch(`/api/bars/${id}`)
        let data = await response.json()
        setBar(data)
        let barSpecials = await fetch(`/api/bars/${id}`)
        let specialData = await barSpecials.json()
        setSpecials(specialData.specials)
    }

    let specialList = specials.map((special, index)=>{
      return(<SpecialItem special={special} bar={bar}/>)
      
    })
// <div>{special.name}</div>

  return (
    <div>
      <Header/>

      <h3>
        Name: {bar.name}
        <br />
        Address: {bar.address}
        <br />
        Hours: {bar.hours}
      </h3>
      {/* {specials.length > 0 ? (
        <p>{specials[0].name}</p>
      ) : (
        <p>Loading specials...</p>
      )} */}
      {specialList}
     <Link to={`/bars/${id}/specials/new`}><button>Add special</button></Link>
     <Link to={`/bars/${id}/update`}><button>Update Bar Info</button></Link>
     <Link to={`/bars`}><button>Back to List</button></Link>
    </div>
  );

}

export default BarDetailPage
