import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './FormNewHotel.css'
import axios from 'axios';

function FormUpdateHotel(props){

  const location = useLocation()
  let { hotel_name } = location.state
  let { city_name } = location.state
  let {street_name}=location.state
  let {star_number}=location.state
  let {hotel_description}=location.state

  let navigate=useNavigate();

   const state={
       hotel:hotel_name,
       city:city_name,
       street:street_name,
       oldstreet:street_name,
       star:star_number,
       description:hotel_description
   };

   const getValue=(event)=>{
       const name=event.target.name;
       const value=event.target.value;
       if(name=='hotel')
       state.hotel=value
       if(name=='city')
       state.city=value
       if(name=='street')
       state.street=value
       if(name=='description')
       state.description=value
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
        if(state.description=='')
        {
          check++;
          let y=document.getElementById('4');
          y.className='errorText';
        }
        if(check>0)
        alert("Fiil red fields");
        else
        {
            axios.put("http://localhost/proba/index.php?oldStreet="+state.oldstreet+"&hotelName="+state.hotel+"&cityName="+state.city+"&noStars="+state.star+"&streetAndNumber="+state.street)
            .then(navigate('/allhotels'));
        }
    }
    return(
        <div className='form_div'>

            <h2>Update Hotel</h2>

            <div class="input_field">
            <input  type='text' placeholder="Name Of Hotel" required  className='input' defaultValue={hotel_name} onChange={getValue} name='hotel' id='1'></input>
            </div>

            <div class="input_field">
            <input placeholder="Name Of City" required  className='input' defaultValue={city_name} onChange={getValue} name='city' id='2'/>
            </div>

            <div class="input_field">
            <input placeholder="Street and number" required  className='input' defaultValue={street_name} onChange={getValue} name='street' id='3'/>
            </div>

            <div class="input_field">
            <textarea placeholder="Add description text" required  className='input_description' defaultValue={hotel_description} onChange={getValue} name='description' id='4'/>
            </div>

            <div class="select">
             <p>Select number of stars</p>
                <select>
                <option value={star_number} selected disabled hidden>Star {star_number}</option>
                  <option value={"1"}>Star 1</option>
                  <option value={"2"}>Star 2</option>
                  <option value={"3"}>Star 3</option>
                  <option value={"4"}>Star 4</option>
                  <option value={"5"}>Star 5</option>
                </select>
                <div class="select_arrow"></div>
              </div>

            <button className='button' onClick={handleSubmit}>Update Hotel</button>

        </div>
    )
}

export default FormUpdateHotel;