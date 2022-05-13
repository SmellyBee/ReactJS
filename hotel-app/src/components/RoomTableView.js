import React from 'react';
import './RoomTableView.css'
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function RoomTableView(props) {

    const navigate=useNavigate();  

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

    return (
        <>
        <div class="container-view">
        <ul class="responsive-table">
        <li class="table-header-view">
        <div class="col-view col-1">Room capacity</div>
        <div class="col-view col-1">Room number</div>
        <div class="col-view col-1">Cost per day</div>
        </li>
        
        {
            rooms.map(obj=>(
                <>
                <li class="table-row-view"onClick={()=>navigate('/room',{
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
                <div class="col-view col-1" data-label="Room capacity">{obj.roomCapacity}</div>
                <div class="col-view col-1" data-label="Room number">{obj.roomNumber}</div>
                <div class="col-view col-1" data-label="Cost per day">{obj.costPerDay}$</div>
                </li>
                </>
            ))
        }
        </ul>
        </div>
        </>
        
    );
}

export default RoomTableView;