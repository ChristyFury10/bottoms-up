import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../componenets/Header';

const BarUpdatePage = ({bar, setBar}) => {

    const navigate = useNavigate();

    let {id} = useParams();
    console.log(id)

    const [nameState, setNameState] = useState("");
	const [hoursState, setHoursState] = useState("");
	const [addressState, setAddressState] = useState("");

    useEffect(() =>{
        getBar()

    }, [id])

    
    let getBar = async () => {
        let response = await fetch(`/api/bars/${id}`)
        let data = await response.json()
        setBar(data)
        const{name, address, hours} = data
        setAddressState(address)
        setNameState(name)
        setHoursState(hours)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBar = {
            name: nameState,
            address: addressState,
            hours: hoursState
        };
        setBar(updatedBar)
        const options = {
			method: "PUT", 
			'headers': {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedBar)
		}
        console.log("barState:", bar)

        await fetch(`http://localhost:8000/api/bars/${id}/update`, options);
        
        navigate(`/bars/${id}`)
    
        
    }
    const deleteBar = async ()=>{
            fetch(`http://localhost:8000/api/bars/${id}/delete`, {
                method: 'DELETE', 
                'headers': {
                    'Content-Type' :'application/json'
                }
            })
            navigate(`/bars`)
        }


    const onChangeHandler = (e, setValue)=>{
        setValue(e.target.value)
    }



  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
        Name:<input type="text" value={nameState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setNameState)}></input>
            <br/>
        Address:<input type="text" value={addressState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setAddressState)}></input>
            <br/>
        Hours:<input type="text" value={hoursState} name="name" placeholder="name" onChange={(e) => onChangeHandler(e, setHoursState)}></input>
        <br/>
        <input type="submit"></input>
        <button onClick={deleteBar}>Delete</button>

        </form>
      
    </div>
  )
}

export default BarUpdatePage
