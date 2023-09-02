import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../componenets/Header';

const SpecialUpdate = ({special, setSpecial}) => {

    let {bar_id, special_id} = useParams();
    let [nameState, setNameState] = useState(special.name);
	  let [daysState, setDaysState] = useState(special.days);
	  let [detailsState, setDetailsState] = useState(special.details);
    let [bar, setBar] = useState("");
    let [specialForm, setSpecialForm] = useState({
      name: special.name,
      days: special.days,
      details: special.details 
      
    });
    const navigate = useNavigate();

    // let setCurrentSpecial = async () => {
    //       setNameState(special.name);
    //       setDaysState(special.days);
    //       setDetailsState(special.details);
    //     };

    useEffect(() =>{
        getBar()
    }, [])
    
    
    let getBar = async () => {
      try {
        let barResponse = await fetch(`/api/bars/${bar_id}`);
        let barData = await barResponse.json();
        setBar(barData);
          let barSpecials = await fetch(`/api/bars/${bar_id}`)
          let specialData = await barSpecials.json()
          setSpecial(specialData.special)
        
        if (barData.specials && barData.specials.length > 0) {
          let matchedSpecial = barData.specials.find(special => special.id === parseInt(special_id));
          if (matchedSpecial) {
            setSpecial(matchedSpecial);
            // console.log(special)
            setNameState(specialForm.name);
            setDaysState(specialForm.days);
            setDetailsState(specialForm.details);
            setSpecialForm(matchedSpecial)

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

    if (!special || !bar) {
      return <p>Loading...</p>;
    }

    // const onChangeHandler = (e, setValue)=>{
    //     setValue(e.target.value)
    //     console.log(nameState, daysState, detailsState)
    // }

    const onChangeHandler = (e)=>{
      setSpecialForm((baseState)=>({
        ...baseState,
        [e.target.name]: e.target.value
      }))
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedSpecial = {
          name: specialForm.name,
          days: specialForm.days,
          details: specialForm.details
        };
        setSpecial(updatedSpecial)
        
        // let updatedSpecial = await 
        const options = {
          method: "PUT",
          'headers': {
            "Content-type": 'application/json'
          },
          body: JSON.stringify(specialForm)
        }
        await fetch(`/api/bars/${bar_id}/specials/${special_id}/update`, options);

        navigate(`/bars/${bar_id}/specials/${special_id}`)
    }

    return (
    <div>
      <Header/>
      Editing 
      <br/>barName:{bar.name} 
      <br/>special name:{special.name}

      <form onSubmit={handleSubmit}>
        Name: <input type='text' value={specialForm.name} name="name" onChange={onChangeHandler}></input>
        
        Days:<input type='text' value={specialForm.days} name="days" placeholder={special.days} onChange={onChangeHandler}></input>
        
        Details:<input type='text' value={specialForm.details} name="details" placeholder={special.details} onChange={onChangeHandler}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SpecialUpdate
