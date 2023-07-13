import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import specialItem from '../componenets/specialItem';

const BarDetailPage = ({bar, setBar, index}) => {

    let {id} = useParams();
    console.log(id)

    let[specials, setSpecials] = useState([])
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

    // let specials = bar.specials[0].name
    console.log("bar", bar)
    // console.log("specials", specials)


  //   return (
  //   <div>
  //     hello
  //     <h3>Name:{bar.name}
  //           <br/>
  //           Address:{bar.address}
  //           <br/>
  //           Hours:{bar.hours}</h3>
  //           {specials[0].name}
  //   </div>
  // )

  return (
    <div>
      hello
      <h3>
        Name: {bar.name}
        <br />
        Address: {bar.address}
        <br />
        Hours: {bar.hours}
      </h3>
      {specials.length > 0 ? (
        <p>{specials[0].name}</p>
      ) : (
        <p>Loading specials...</p>
      )}
    </div>
  );

}

export default BarDetailPage
