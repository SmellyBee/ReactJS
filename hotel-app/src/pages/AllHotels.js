import React from 'react';
import Cards from '../components/Cards';
import './AdminHome.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavigation from '../components/AdminNavigation';

function AllHotels() {

    const [hotels,setHotels]=useState([]);

    useEffect(() => {

        GetingHotels();

    },[]);

    const GetingHotels=async()=>
    {
        const res=await axios.get("http://localhost/proba/index.php?admin="+window.pom,{
        method:"GET",
        headers: { "Content-Type": "application/json", }
        }
        )
         setHotels(res.data);
         console.log(res.data);
    }

    return (
        <>
        <AdminNavigation></AdminNavigation>
        
        <div className='maindiv'>
            {
                hotels.map(obj=>(

                    <Cards 

                        name={obj.hotelName}
                        namesecond={obj.cityName} 
                        street={obj.streetAndNumber} 
                        star={obj.noStars}
                        des={obj.hotelDescription}
                        img="./hotel.jpg" 
                        url='/updatehotel'>

                     </Cards>
                    
                    ))
            }

            <Cards name="Hotel" namesecond="Add new hotel" img="./addhotel.jpg" url='/newhotel'></Cards>
        </div>
        </>
    );
}

export default AllHotels;