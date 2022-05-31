import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import AdminNavigation from '../components/AdminNavigation';
import './AdminHome.css'

function AdminHome() {
    return (
        <>
        <AdminNavigation> </AdminNavigation>
        <div className='maindiv'>
        <Cards name="Hotels" namesecond="Hotel Management" img="./hotel.jpg" url='/allhotels'></Cards>
        <Cards name="Employees" namesecond="Employees Managenent" img="./employee.jpg" url='/employees'></Cards>
        </div>
        </>
    );
}

export default AdminHome;

