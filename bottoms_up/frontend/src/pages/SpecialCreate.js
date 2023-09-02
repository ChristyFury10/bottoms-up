import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../componenets/Header';


const SpecialCreate = ({bar, setBar}) => {

  let {id} = useParams();
  console.log(id)

  const navigate = useNavigate();
  let[specials, setSpecials] = useState([]);
  const [nameState, setNameState] = useState("");
	const [daysState, setDaysState] = useState("");
	const [detailsState, setDetailsState] = useState("");

  useEffect(() =>{
    getBar()

}, [id])

let getBar = async () => {
  let response = await fetch(`http://18.116.241.164:8000/api/bars/${id}`)
  let data = await response.json()
  setBar(data)
  // let barSpecials = await fetch(`/api/bars/${id}`)
  // let specialData = await barSpecials.json()
  // setSpecials(specialData.specials)
}

const onChangeHandler = (e, setValue) => {
  const value = e.target.value;
  setValue(value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const newSpecial = {
      name: nameState,
      days: daysState,
      details: detailsState
  };

  const options = {
method: "POST", 
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(newSpecial)
}
  await fetch(`http://18.116.241.164:8000/api/bars/${id}/specials/new`, options)

  navigate(`/bars/${id}`)

}
  return (
    <div>
      <Header/>
      You are adding a special to: {bar.name}

      <form on onSubmit={handleSubmit}>
        Name: <input type='text' value={nameState} name="name" onChange={(e) => onChangeHandler(e, setNameState)}></input>
        
        Days:<input type='text' value={daysState} name="days" onChange={(e) => onChangeHandler(e, setDaysState)}></input>
        
        Details:<input type='text' value={detailsState} name="details" onChange={(e) => onChangeHandler(e, setDetailsState)}></input>

        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SpecialCreate
