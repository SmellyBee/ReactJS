import React from 'react';
import Cards from '../components/Cards';
import './AdminHome.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Employees() {

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
        <div className='maindiv'>
            {
                hotels.map(obj=>(
    
                    <Cards 

                        name={obj.hotelName}
                        namesecond={obj.cityName} 
                        street={obj.streetAndNumber} 
                        star={obj.noStars}
                        img="./hotel.jpg" 
                        url='/employees_in_one_hotel'>

                     </Cards>
                    
                    ))
            }
        </div>
    );
}

export default Employees;