import React from 'react';
import './SelectedRoom.css'
import Galery from '../components/Galery';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import {Proba,Proba2} from './Global';

function SelectedRoom() {

    const location=useLocation();


    let {street_name}=location.state;
    let {room_capacity}=location.state;
    let {room_number}=location.state;
    let {room_cost}=location.state;
    let { pic1}=location.state;
    let { pic2}=location.state;
    let { pic3}=location.state;
    let { pic4}=location.state;

    const ReserveClick=()=>{
        alert(Proba());
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
                <button class="ReserveButton" onClick={ReserveClick}>Reserve</button>

            </div>
        </div>
        <Footer></Footer>
        </>

    );
}

export default SelectedRoom;