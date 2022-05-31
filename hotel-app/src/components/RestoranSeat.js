import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestoranSeat(props)
{

    const navigate=useNavigate();
    
    const state={
        seat:2,
        time_of_day:'Breakfast'
    };

    const getOption=(event)=>{
        let newValue = event.nativeEvent.target.value;
        let name = event.nativeEvent.target.name;
        if(name=='seat')
        state.seat=newValue;
        if(name=='drinks')
        state.drinks=newValue;
    }

    const handleSubmit=(event)=>{
        if(window.pom == undefined)
        {
        alert("You are not logged in to your account");
        alert("Please log in");
        navigate('/login');
        }
        else
        {
               alert("GG"); 
        }
    }

    return(
        <>

        <h2 className='contenttitle'>Reserve seat at hotel restaurant</h2>

        <div class="select" id="1">
             <p>Select size of table</p>
                <select className='celect-food' name='seat' onChange={getOption}>
                  <option value={'2'}>Seats for 2</option>
                  <option value={'3'}>Seats for 3</option>
                  <option value={'4'}>Seats for 4</option>
                  <option value={'5'}>Seats for 5</option>
                  <option value={'6'}>Seats for 6</option>
                  <option value={'1'}>Single seat</option>
                </select>
                <div class="select_arrow"></div>
        </div>

        <div class="select" id="2">
             <p>Select size of table</p>
                <select className='celect-food' name='time_of_day' onChange={getOption}>
                  <option value={'Breakfast'}>Breakfast</option>
                  <option value={'Brunch'}>Brunch</option>
                  <option value={'Lunch'}>Lunch</option>
                  <option value={'Dinner'}>Dinner</option>
                </select>
                <div class="select_arrow"></div>
        </div>

        <button className='ReserveButton' onClick={handleSubmit} >Reserve table seat</button>


        </>
    );

}

export default RestoranSeat;