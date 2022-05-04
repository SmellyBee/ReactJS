import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import { useCookies } from 'react-cookie';

function CardItemUser(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['User']);
    
    const {user, setAllUsers} = props;
    
    const deleteUser = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: {  'Accept': 'application/json',
                        'Content-Type': 'application/json', },
            /*body: JSON.stringify({"User":user})*/};
        console.log(user.username)
        const response = await fetch("https://localhost:44396/Sport/DeleteUserByUsername/"+ user.username, requestOptions);
        setAllUsers([])
    }

    return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to="/allusers">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <button className='delete-btn' onClick={deleteUser}>Obrisi korisnika</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemUser;