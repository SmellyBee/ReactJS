import React from 'react';
import EmployeeTable from '../components/EmployeTable';
import FormNewEmployee from '../components/FormNewEmployee';
import './AdminHome.css'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Employees_In_One_Hotel() {

    let location=useLocation();
    let {street_name}=location.state;

    const[employees,setEmployees]=useState([]);

    useEffect(() => {

        GetingEmployees();

    },[]);

    const GetingEmployees=async()=>
    {
        const res=await axios.get("http://localhost/proba/CRUD_employee.php?hotelStreetAndNumber="+street_name,{
        method:"GET",
        headers: { "Content-Type": "application/json", }
        }
        )
         setEmployees(res.data);
    }
    return (
        <>
        <FormNewEmployee street={street_name} emp={GetingEmployees}></FormNewEmployee>
        <EmployeeTable street={street_name} emp={employees}></EmployeeTable>
        </>
    );
}

export default Employees_In_One_Hotel;