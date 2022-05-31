import React from 'react';
import './SelectedRoom.css'
import Galery from '../components/Galery';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SelectedRoom() {

    const location=useLocation();
    const navigate=useNavigate();

    let {street_name}=location.state;
    let {room_capacity}=location.state;
    let {room_number}=location.state;
    let {room_cost}=location.state;
    let { pic1}=location.state;
    let { pic2}=location.state;
    let { pic3}=location.state;
    let { pic4}=location.state;

    const state={
        firstDP:'',
        secondDP:''
    };

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='firstDP')
        state.firstDP=value;
        if(name=='secondDP')
        state.secondDP=value;
    }
    const ReserveClick=()=>{
        if(window.pom == undefined)
        {
        alert("You are not logged in to your account");
        alert("Please log in");
        navigate('/login');
        }
        else
        {
            let check=0;

            if(state.firstDP =='')
            {
                check++;
                alert("Fill first date picker");
            }
            if(state.secondDP=='')
            {
                check++;
                alert("Fill second date picker");
            }
            if(check==0)
            {
                const reserve={
                    username:window.pom,
                    firstDP:state.firstDP,
                    secondDP:state.secondDP,
                    roomNumber:room_number,
                    hotelStreetAndNumber:street_name
                  }
        
                axios.post("http://localhost/proba/reservations.php",reserve)
                .then(response=>{
                    if(response.status==201)
                        alert("The second date must be greater than the first");
                    if(response.status==202)
                    {
                        alert("You have successfully booked a room");
                        navigate('/');
                    }
                    if(response.status==203)
                        alert("In that period the room was already booked");        
                });
            }
        }
    }


    return (
        <>
        <Navigation></Navigation>
        <div class='divmain'>
            
          <Galery
          pic1={pic1}
          pic2={pic2}
          pic3={pic3}
          pic4={pic4}
          ></Galery>

          <div class="roominfo">
                <p class='titleinfo'>Room information</p>
                <p class='info'>Room Number: {room_number}</p>
                <div class="cost">
                    <p>Cost per day: {room_cost}$</p>
                </div>
                <p class='info'>Room capacity: {room_capacity}</p>

                <p className='info-date'>Date from:</p>
                <input type="date" className='date-input' onChange={getValue} name="firstDP" ></input>

                <p className='info-date'>Date to:</p>
                <input type="date" className='date-input'onChange={getValue} name="secondDP"></input>

                <button class="ReserveButton" onClick={ReserveClick}>Reserve</button>
            </div>
        </div>
        <Footer></Footer>
        </>

    );
}

export default SelectedRoom;