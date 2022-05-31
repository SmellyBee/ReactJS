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
    let {hotel_description}=location.state;
    let {hotel_name}=location.state;
    let {city_name}=location.state;
    let {star_number}=location.state;

    return (
        <>
        <Navigation></Navigation>

        <div class='contentdiv'>
            <div class='Content'>
            <h2 className='contenttitle'>{hotel_name}</h2>
            <p className='contenttitle'>{city_name} {street_name}</p>
            <p className='contenttitle'>Stars: {star_number} &#9733;</p>
            <p>{hotel_description}</p>
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