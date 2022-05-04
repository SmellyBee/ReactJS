import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItemKorisnik(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{
         pathname:props.path,
         state:{src:props.src,text:props.text,
          label:props.label,username:props.username,
          name:props.name,lastName:props.lastName,email:props.email
          ,address:props.address,phoneNumber:props.phoneNumber,
          pol:props.pol}
          }}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemKorisnik;