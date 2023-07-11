import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const BarDetailPage = ({bar, setBar, index}) => {

    let {id} = useParams();
    console.log(id)


    useEffect(() =>{
        getBar()

    }, [id])

    
    let getBar = async () => {
        let response = await fetch(`/api/bars/${id}`)
        let data = await response.json()
        setBar(data)
    }

    // let updateBar = async () => {
    //     await fetch(`/api/bars/${id}/update/`, {
    //         method: "PUT", 
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(bar)
    //     })
    // }

    console.log(bar)
    return (
    <div>
      <h3>Name:{bar.name}
            <br/>
            Address:{bar.address}
            <br/>
            Hours:{bar.hours}</h3>
    </div>
  )
}

export default BarDetailPage
