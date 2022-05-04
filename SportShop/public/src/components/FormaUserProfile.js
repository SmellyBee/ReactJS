import React from 'react';
import './FormaProizvod.css';


import Korpa from "../State/Korpa";
import CardItemKorisnik from './CardItemKorisnik';

export default function FormaUserProfile(props)
{

  function dodaj(){
    let postoji = "ne"
    let k = Korpa("vratiKorpu",null);
    k.forEach((p)=> 
    {
      if(p === props)
        postoji = "da";
    }
    )
    if(postoji === "ne"){
      let k = Korpa("dodajUKorpu",props);
      console.log(k);
    }
    else{
      let k = Korpa("izbaciProizvod",props);
      console.log(k);
    }
  }
  
    return(

        <div className='Forma-user'>

            <div className='cards__wrapper-user'>
              <ul className='cards__items-user'>
                <CardItemKorisnik
                src={props.src}
                text={props.text}
                label={props.label}
                path='/'
                />
              </ul>
              <h1>Korisnicko ime: {props.username} </h1>
              <h1>Ime: {props.name}</h1>
              <h1>Prezime: {props.lastName}</h1>
              <h1>Email: {props.email}</h1>
              <h1>Adresa: {props.address} </h1>
              <h1>Broj telefona: {props.phoneNumber}</h1>
              <h1>Pol: {props.pol}</h1>
            </div>
        </div>
         
    );
}
