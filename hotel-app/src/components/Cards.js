import React from 'react';
import './Cards.css';
import { useNavigate  } from 'react-router-dom';
function Cards(props) {

    const navigate=useNavigate();
    
    return (
        <>
        
            <div className='carddiv' onClick={() =>
            navigate(props.url,{
            state:{
            hotel_name:props.name,
            city_name:props.namesecond,
            street_name:props.street,
            star_number:props.star
            }})}>
                <img src={props.img} className='image'></img>
                <h2>{props.name}</h2>
                <p className='ime_grada'>{props.namesecond}</p>
            </div>
            
        
        </>
    );
}

export default Cards;