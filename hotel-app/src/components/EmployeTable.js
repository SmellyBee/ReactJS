import React from 'react';
import './RoomTable.css'
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function EmployeeTable(props){

    const navigate=useNavigate();

    return(
        <>
        <div class="container">
        <ul class="responsive-table">
        <li class="table-header">
        <div class="col col-1">Name</div>
        <div class="col col-1">Last name</div>
        <div class="col col-1">Work position</div>
        <div class="col col-1">Address of Hotel</div>
        </li>
        {
           props.emp.map(obj=>(
                <>
                <li class="table-row" onClick={()=>navigate('/update-employee',{
                    state:
                    {
                        name:obj.name,
                        lastName:obj.lastName,
                        position:obj.workspace,
                        hotelStreetAndNumber:obj.hotelStreetAndNumber,
                        workingTime:obj.workingTimeStart,
                        username:obj.username,
                        password:obj.password
                    }
                })}>
                <div class="col col-1" data-label="Room capacity">{obj.name}</div>
                <div class="col col-1" data-label="Room number">{obj.lastName}</div>
                <div class="col col-1" data-label="Work position">{obj.workspace}</div>
                <div class="col col-1" data-label="Address of Hotel">{obj.hotelStreetAndNumber}</div>
                </li>
                </>
            )) 
        }
        </ul>
        </div>
        </>
    );
}
export default EmployeeTable;