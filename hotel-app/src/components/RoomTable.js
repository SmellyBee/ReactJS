import React from 'react';
import './RoomTable.css'
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function RoomTable(props) {

    const[rooms,setRooms]=useState([]);

    useEffect(() => {

        GetingRooms();

    },[]);

    const GetingRooms=async()=>
    {
        const res=await axios.get("http://localhost/proba/CRUD_room.php?hotelStreetAndNumber="+props.id,{
        method:"GET",
        headers: { "Content-Type": "application/json", }
        }
        )
         setRooms(res.data);
    }
    
    const navigate=useNavigate();  

    return (
        <>
        <div class="container">
        <ul class="responsive-table">
        <li class="table-header">
        <div class="col col-1">Room capacity</div>
        <div class="col col-1">Room number</div>
        <div class="col col-1">Cost per day</div>
        </li>
        <li class="table-row-new-room" onClick={()=>navigate('/newroom',{
            state:{ street_name:props.id }
        })}>
        <p>Add new room</p>    
        </li>
        {
            rooms.map(obj=>(
                <>
                <li class="table-row" onClick={()=>navigate('/updateroom',{
                    state:{
                    street_name:props.id,
                    room_capacity:obj.roomCapacity,
                    room_number:obj.roomNumber,
                    room_cost:obj.costPerDay,
                    pic1:obj.picture1,
                    pic2:obj.picture2,
                    pic3:obj.picture3,
                    pic4:obj.picture4
                }
                })}>
                <div class="col col-1" data-label="Room capacity">{obj.roomCapacity}</div>
                <div class="col col-1" data-label="Room number">{obj.roomNumber}</div>
                <div class="col col-1" data-label="Cost per day">{obj.costPerDay}$</div>
                </li>
                </>
            ))
        }
        </ul>
        </div>
        </>
        
    );
}

export default RoomTable;