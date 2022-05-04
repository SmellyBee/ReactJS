import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './FormNewHotel.css'

function FormNewHotel(){

  const navigate=useNavigate();

  const addHotel = (hotelName,cityName,noStars,streetAndNumber) => {
    const requestOptions = {
      method : 'POST',
      mode : 'no-cors',
      headers : {
        "Content-Type" : "application/json",
       
      },
      body: JSON.stringify({
        'hotelName' : hotelName,
        'cityName' : cityName,
        'noStars' : noStars,
        'streetAndNumber' : streetAndNumber
      })
    };
    fetch('http://localhost/proba/index.php',requestOptions);
   }

   const state={
       hotel:'',
       city:'',
       street:'',
       star:'1'
   };

   const getOption=(event)=>{
    let newValue = event.nativeEvent.target.value;
    state.star=newValue;
   }
   const getValue=(event)=>{
       const name=event.target.name;
       const value=event.target.value;
       if(name=='hotel')
       state.hotel=value
       if(name=='city')
       state.city=value
       if(name=='street')
       state.street=value
    }
    const handleSubmit=(event)=>{
        let check=0;
        if(state.hotel=='')
        {
          check++;
          let x=document.getElementById('1');
          x.className='error';
        }
        if(state.city=='')
        {
          check++;
          let y=document.getElementById('2');
          y.className='error';
        }
        if(state.street=='')
        {
          check++;
          let y=document.getElementById('3');
          y.className='error';
        }
        if(check>0)
        alert("Fiil red fields");
        else
        { 
        addHotel(state.hotel,state.city,state.star,state.street);
         navigate('/allhotels');   
        }

    }
    return(
        <div className='form_div'>

            <h2>Add new Hotel</h2>

            <div class="input_field">
            <input  placeholder="Name Of Hotel" required  className='input' onChange={getValue} name='hotel' id='1'/>
            </div>

            <div class="input_field">
            <input placeholder="Name Of City" required  className='input' onChange={getValue} name='city' id='2'/>
            </div>

            <div class="input_field">
            <input placeholder="Street and number" required  className='input' onChange={getValue} name='street' id='3'/>
            </div>

            <div class="select" id="4">
             <p>Select number of stars</p>
                <select onChange={getOption}>
                  <option value={'1'}>Star 1</option>
                  <option value={'2'}>Star 2</option>
                  <option value={'3'}>Star 3</option>
                  <option value={'4'}>Star 4</option>
                  <option value={'5'}>Star 5</option>
                </select>
                <div class="select_arrow"></div>
              </div>

            <button className='button' onClick={handleSubmit}>Add new Hotel</button>

        </div>
    )
}

export default FormNewHotel;