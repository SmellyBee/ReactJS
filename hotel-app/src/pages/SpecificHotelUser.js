import React from 'react';
import Navigation from '../components/Navigation';
import './Home.css'
import Footer from '../components/Footer';
import RoomTableView from '../components/RoomTableView';
import { useEffect,useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SpecificHotelUser() {

    const navigate=useNavigate();
    const location=useLocation();

    let {street_name}=location.state;
    

    return (
        <>
        <Navigation></Navigation>

        <div class='contentdiv'>
            <div class='Content'>
            <p>{street_name}</p>
            </div>
            <div class='ContentRoomTable'>

                <RoomTableView id={street_name}></RoomTableView>

            </div>
        </div>

        <Footer></Footer>
        </>

    );
}

export default SpecificHotelUser;