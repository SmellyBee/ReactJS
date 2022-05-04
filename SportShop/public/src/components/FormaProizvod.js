import React from 'react';
import CardItem from './CardItem';
import './FormaProizvod.css';
import RaitingStar from './RaitingStar';


import Korpa from "../State/Korpa";

export default function FormaProizvod(props)
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

        <div className='Forma'>

            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                src={props.src}
                text={props.text}
                label={props.label}
                path='/'
                />
              </ul>
              <h1>Cena: {props.cena} RSD </h1>
              <h1>Broj SportPDM poena: {props.poeni}</h1>
              <h1 className='akcija'>Akcija: {props.akcija}%</h1>
              <h1>Ocena Proizvoda: {props.ocena} &#9733;</h1>
            </div>     
     <div className='StarAndButton'>
     <center> <h2>Ocenite proizvod</h2>  </center>   
      <RaitingStar></RaitingStar>
      
        <button className='Korpa' onClick={dodaj}>Ubaci u korpu</button>

        </div>   

        </div>
         
    );
}
