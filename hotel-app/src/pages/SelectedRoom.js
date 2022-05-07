import React from 'react';
import './SelectedRoom.css'
import Galery from '../components/Galery';
import Navigation from '../components/Navigation';
function SelectedRoom() {
    return (
        <>
        <Navigation></Navigation>
        <div class='divmain'>
            
          <Galery></Galery>

          <div class="roominfo">
                <p class='titleinfo'>Room information</p>
                <p class='info'>Room Number: 303</p>
                <div class="cost">
                    <p>Cost per day: 40$</p>
                </div>
                <p class='info'>sidjsfoisjvroienuriewru svreuwiofuseiorudofu dsioueior vurserov opRI</p>
                <button class="ReserveButton">Reserve</button>

            </div>
        </div>
        </>

    );
}

export default SelectedRoom;