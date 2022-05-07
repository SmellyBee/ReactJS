import React from 'react';
import './RoomTable.css'
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function EmployeeTable(props){

    return(
        <>
        <div class="container">
        <ul class="responsive-table">
        <li class="table-header">
        <div class="col col-1">Name</div>
        <div class="col col-1">Last name</div>
        <div class="col col-1">Work position</div>
        <div class="col col-1">Jos nesto</div>
        </li>
        {
           props.emp.map(obj=>(
                <>
                <li class="table-row">
                <div class="col col-1" data-label="Room capacity">{obj.name}</div>
                <div class="col col-1" data-label="Room number">{obj.lastName}</div>
                <div class="col col-1" data-label="Cost per day">{obj.workspace}</div>
                <div class="col col-1" data-label="Jos nesto">{obj.hotelStreetAndNumber}</div>
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