import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../componenets/Header';

const SpecialUpdate = () => {

    let {bar_id, special_id} = useParams();
    let [nameState, setNameState] = useState("");
	  let [daysState, setDaysState] = useState("");
	  let [detailsState, setDetailsState] = useState("");
    let [special, setSpecial] = useState(null)
    let [bar, setBar] = useState("")
    const navigate = useNavigate();

    // let setCurrentSpecial = async () => {
    //       setNameState(special.name);
    //       setDaysState(special.days);
    //       setDetailsState(special.details);
    //     };

    useEffect(() =>{
        getBar()
        
        
    }, [bar_id, special_id])
    
    
    
    let getBar = async () => {
      try {
        let barResponse = await fetch(`/api/bars/${bar_id}`);
        let barData = await barResponse.json();
        setBar(barData);
        
        if (barData.specials && barData.specials.length > 0) {
          let matchedSpecial = barData.specials.find(special => special.id === parseInt(special_id));
          if (matchedSpecial) {
            setSpecial(matchedSpecial);
            console.log(special)
            setNameState(special.name);
            setDaysState(special.days);
            setDetailsState(special.details);
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

    const onChangeHandler = (e, setValue)=>{
        setValue(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedSpecial = {
          name: nameState,
          days: daysState,
          details: detailsState
        };
        // setSpecial(updatedSpecial)
        const options = {
          method: "PUT",
          'headers': {
            "Content-type": 'application/json'
          },
          body: JSON.stringify(updatedSpecial)
        }
        await fetch(`http://localhost:8000/api/bars/${bar_id}/specials/${special_id}/update`, options);

        navigate(`/bars/${bar_id}/specials/${special_id}`)
    }

    return (
    <div>
      <Header/>
      Editing {bar.name} {special.name}

      <form on onSubmit={handleSubmit}>
        Name: <input type='text' value={nameState} name="name"  onChange={(e) => onChangeHandler(e, setNameState)}></input>
        
        Days:<input type='text' value={daysState} name="days" placeholder={special.days} onChange={(e) => onChangeHandler(e, setDaysState)}></input>
        
        Details:<input type='text' value={detailsState} name="details" placeholder={special.details} onChange={(e) => onChangeHandler(e, setDetailsState)}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default SpecialUpdate
