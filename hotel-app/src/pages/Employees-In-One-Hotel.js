import React from 'react';
import EmployeeTable from '../components/EmployeTable';
import FormNewEmployee from '../components/FormNewEmployee';
import './AdminHome.css'
import { useLocation } from 'react-router-dom';

function Employees_In_One_Hotel() {

    let location=useLocation();
    let {street_name}=location.state;
    console.log(street_name);

    return (
        <>
        <FormNewEmployee></FormNewEmployee>
        <EmployeeTable street={street_name}></EmployeeTable>
        </>
    );
}

export default Employees_In_One_Hotel;