import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../componenets/Header';

const BarCreate = ({bar, setBar}) => {

    const navigate = useNavigate();
    const [nameState, setNameState] = useState("");
	const [hoursState, setHoursState] = useState("");
	const [addressState, setAddressState] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBar = {
            name: nameState,
            address: addressState,
            hours: hoursState
        };
        const options = {
			method: "POST", 
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newBar)
		}
        await fetch(`/api/bars/create`, options)

        // setBar(newBar)
        // createBar();
        navigate('/bars')

    }

    const onChangeHandler = (e, setValue)=>{
        setValue(e.target.value)
    }

  return (
         <div>
            <Header/>
            <h5>Enter the information for the new bar/restaurant you would like to add.</h5>
        <form onSubmit={handleSubmit}>
        Name:<input type="text" value={nameState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setNameState)}></input>
            <br/>
        Address:<input type="text" value={addressState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setAddressState)}></input>
            <br/>
        Hours:<input type="text" value={hoursState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setHoursState)}></input>
        <br/>
        <input type="submit" className='btn-floating btn-large waves-effect waves-light blue z-depth-5' value="ok"></input>
        <Link to={`/bars`}><a class="btn-floating btn-large waves-effect waves-light green z-depth-5"><i class="material-icons">arrow_back</i></a></Link>
        </form>
        
         
    </div>
  )
}

export default BarCreate
