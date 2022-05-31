import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'; 
import CleaningRoom from '../components/CleaningRoom';
import RoomService from '../components/RoomService';
import RestoranSeat from '../components/RestoranSeat';
import './Activities.css';

function Activities(props)
{
    return(
        <>
        <Navigation></Navigation>

        <div class='contentdiv-activities'>

        <div class='Content-activities'>

            <CleaningRoom></CleaningRoom>

        </div>

        <div class='Content-activities'>

            <RoomService></RoomService>
            
        </div>

        <div class='Content-activities'>

            <RestoranSeat></RestoranSeat>
            
        </div>

        </div>

        <Footer></Footer>
        </>
    );

}
export default Activities;