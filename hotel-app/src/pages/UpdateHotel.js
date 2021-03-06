import React from 'react';
import FormUpdateHotel from '../components/FormUpdateHotel';
import RoomTable from '../components/RoomTable';
import { useLocation } from 'react-router-dom';
import AdminNavigation from '../components/AdminNavigation';
import './AdminHome.css'

function UpdateHotel(props) {

    const location = useLocation();
    let {street_name}=location.state;
    
    return (
        <>
        <AdminNavigation></AdminNavigation>
        <FormUpdateHotel></FormUpdateHotel>
        <RoomTable id={street_name}></RoomTable>
        </>

        
    );
}

export default UpdateHotel;