import React from 'react';
import Navigation from '../components/Navigation';
import './Home.css'
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { useEffect,useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

function AllHotelUser() {

    const navigate=useNavigate();

    const [hotels,setHotels]=useState([]);

    useEffect(() => {

        GetingHotels();

    },[]);

    const GetingHotels=async()=>
    {
        const res=await axios.get("http://localhost/proba/index.php",{
        method:"GET",
        headers: { "Content-Type": "application/json", }
        }
        )
         setHotels(res.data);
    }

    return (
        <>
        <Navigation></Navigation>

        <div class='contentdiv'>

            <div className='divAllHotelsUsers'>
                {
                    hotels.map(obj=>(
        
                        <Cards 

                            name={obj.hotelName}
                            namesecond={obj.cityName} 
                            street={obj.streetAndNumber} 
                            star={obj.noStars}
                            des={obj.hotelDescription}
                            img="./hotel.jpg" 
                            url='/specific-hotel'>

                        </Cards>
                        
                        ))
                }
            </div>
        </div>
        <Footer></Footer>
        </>

    );
}

export default AllHotelUser;