import React from 'react';
import { useNavigate } from 'react-router-dom';

function RoomService(props)
{
    const navigate=useNavigate();
    
    const state={
        food:'Pizza',
        drinks:'Coca-cola',
        time:''
    };

    const getOption=(event)=>{
        let newValue = event.nativeEvent.target.value;
        let name = event.nativeEvent.target.name;
        if(name=='food')
        state.food=newValue;
        if(name=='drinks')
        state.drinks=newValue;
    }

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='roomservice_time')
        state.time=value
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
            let check=0;
            if(state.time=='')
            {
                check++;
                let y=document.getElementById('3');
                y.className='error';
            }

            if(check>0)
            alert("Fiil red fields");
            else
            {
                alert("Orderd");
                let y=document.getElementById('3');
                y.className='input';
                y.value="";
            }  
        }
    }


    return(
        <>
        <h2 className='contenttitle'>Room service</h2>

        <div class="select" id="1">
             <p>Select food</p>
                <select className='celect-food' name='food' onChange={getOption}>
                  <option value={'Pizza'}>Pizza</option>
                  <option value={'Burger'}>Burger</option>
                  <option value={'Spaghetti bolognese'}>Spaghetti bolognese</option>
                  <option value={'Burrito'}>Burrito</option>
                  <option value={'Lasagna'}>Lasagna</option>
                  <option value={'Chicken and french fries'}>Chicken and french fries</option>
                </select>
                <div class="select_arrow"></div>
        </div>

        <div class="select" id="2">
             <p>Select drink</p>
                <select className='celect-food' name='drinks' onChange={getOption}>
                  <option value={'Coca-cola'}>Coca-cola</option>
                  <option value={'Sprite'}>Sprite</option>
                  <option value={'Beer'}>Beer</option>
                  <option value={'Wine'}>Wine</option>
                  <option value={'Juice'}>Juice</option>
                  <option value={'Whiskey'}>Whiskey</option>
                </select>
                <div class="select_arrow"></div>
        </div>

        <div class="input_field">
            <input type='time'  className='input' onChange={getValue}  name='roomservice_time' id='3'/>
        </div>

        <button className='ReserveButton' onClick={handleSubmit} >Call room service</button>

        </>
    );
}

export default RoomService;