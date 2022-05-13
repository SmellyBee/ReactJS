import React from 'react';

function Galery(props) {
    return (
        <>

            <div class="cardimg">
            
            <div class="card_part card_part-one">
            <img src={'./room_images/'+props.pic1} class='images'></img>   
            </div>
            
            <div class="card_part card_part-two">
            <img src={'./room_images/'+props.pic2}class='images'></img> 
            </div>
            
            <div class="card_part card_part-three">
            <img src={'./room_images/'+props.pic3} class='images'></img> 
            </div>

            <div class="card_part card_part-four">
            <img src={'./room_images/'+props.pic4} class='images'></img> 
            </div>

            </div>

        </>

    );
}

export default Galery;