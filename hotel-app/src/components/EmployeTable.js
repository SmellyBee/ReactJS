import React from 'react';
import './RoomTable.css'
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

function EmployeeTable(props){

    const[employee,setEmployee]=useState([
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
        {ime:'Pera',prezime:'Peric',radnomesto:'Cistac',josnesto:'Nesto'},
    ]);

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
            employee.map(obj=>(
                <>
                <li class="table-row">
                <div class="col col-1" data-label="Room capacity">{obj.ime}</div>
                <div class="col col-1" data-label="Room number">{obj.prezime}</div>
                <div class="col col-1" data-label="Cost per day">{obj.radnomesto}</div>
                <div class="col col-1" data-label="Jos nesto">{obj.josnesto}</div>
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