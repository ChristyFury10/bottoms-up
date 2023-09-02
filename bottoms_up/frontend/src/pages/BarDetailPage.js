import React, {useEffect, useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import SpecialItem from '../componenets/SpecialItem';
import Header from '../componenets/Header';

const BarDetailPage = ({bar, setBar, index}) => {

    let navigate = useNavigate();
    let {id} = useParams();
    console.log(id)

    let[specials, setSpecials] = useState([])
    // let[special, setSpecial] = useState([])

    console.log("specialState",specials)

    useEffect(() =>{
        getBar()

    }, [])

    
    let getBar = async () => {
        let response = await fetch(`http://18.116.241.164:8000/api/bars/${id}`)
        let data = await response.json()
        setBar(data)
        // let barSpecials = await fetch(`/api/bars/${id}`)
        // let specialData = await barSpecials.json()
        // setSpecials(specialData.specials)
        setSpecials(data.specials)

    }


    let specialList = specials.map((special, index)=>{
      return(<SpecialItem special={special} bar={bar} keu={index}/>)
      
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
     <Link to={`/bars/${id}/specials/new`}> <a class="btn-floating btn-large waves-effect waves-light blue z-depth-5"><i class="material-icons">add</i></a></Link>
     <Link to={`/bars/${id}/update`}><a class="btn-floating btn-large waves-effect waves-light orange z-depth-5"><i class="material-icons">edit</i></a></Link>
     <Link to={`/bars`}><a class="btn-floating btn-large waves-effect waves-light green z-depth-5"><i class="material-icons">arrow_back</i></a></Link>
    </div>
  );

}

export default BarDetailPage
