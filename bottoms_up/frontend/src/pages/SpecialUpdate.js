import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../componenets/Header';

const SpecialUpdate = () => {

    let {bar_id} = useParams();
    let {special_id} = useParams();
    console.log(bar_id, special_id)
    const [nameState, setNameState] = useState("");
	const [daysState, setDaysState] = useState("");
	const [detailsState, setDetailsState] = useState("");
    let [special, setSpecial] = useState("")

    useEffect(() =>{
        getSpecial()
    
    }, [special_id])
    
    let getSpecial = async () => {
      let response = await fetch(`http://localhost:8000/api/bars/${bar_id}/specials/${special_id}`)
      let data = await response.json()
      setSpecial(data)
      const{nameState, daysState, detailsState} = data
      setNameState(nameState)
      setDaysState(daysState)
      setDetailsState(detailsState)
      console.log("nameState", nameState)

    }


    const onChangeHandler = (e, setValue)=>{
        setValue(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
    <div>
      <Header/>
      {/* Editing {special.name} */}

      <form on onSubmit={handleSubmit}>
        Name: <input type='text' value={nameState} name="name" onChange={(e) => onChangeHandler(e, setNameState)}></input>
        
        Days:<input type='text' value={daysState} name="days" onChange={(e) => onChangeHandler(e, setDaysState)}></input>
        
        Details:<input type='text' value={detailsState} name="details" onChange={(e) => onChangeHandler(e, setDetailsState)}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SpecialUpdate
