import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CleaningRoom(props)
{
    const navigate=useNavigate();
    
    const state={
        cleaning:''
    };

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='cleaning_time')
        state.cleaning=value
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
            if(state.cleaning=='')
            {
                check++;
                let y=document.getElementById('1');
                y.className='error';
            }

            if(check>0)
            alert("Fiil red fields");
            else
            {
                const req={
                    username:window.pom,
                    time:state.cleaning
                }
                axios.post('http://localhost/proba/cleaning-action.php',req).then(res=>{
                    if(res.status==201)
                    alert("Your stay at the hotel based on the reservation has not yet begun");
                    if(res.status==202)
                    alert("You have scheduled room cleaning");
                });
                let y=document.getElementById('1');
                y.value="";
            } 
        }
    }
    return(
        <>
        <h2 className='contenttitle'>Cleaning Room</h2>

        <div class="input_field">
            <input type='time'  className='input' onChange={getValue}  name='cleaning_time' id='1'/>
        </div>

        <button className='ReserveButton' onClick={handleSubmit} >Clean room</button>

        </>
    );

}
export default CleaningRoom;