import React, { useEffect, useState } from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import '../User.css';
import Korpa from "../../State/Korpa"


export default function Card({props}) {

  let k = Korpa("vratiKorpu",null);

  useEffect(() => {
    
    /*let k = Korpa("vratiKorpu",null);
    console.log(k);
    let k1 = Korpa("izprazniKorpu",null);
    console.log(k);*/
},[] );

const [articles,setAllProducts] = useState([]);


var chunks = function (array, size = 4) {
  var results = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};

const podaci = chunks(articles, 4);


  return (
    <div className='cards-user'>
    <h1>Korpa:  </h1>
    <div className='cards__container_user'>
      <div className='cards__wrapper_user'>
        <ul className='cards__items_user'>
          {k.map(pObj=> (
            <CardItem key={pObj.text} 
              src={pObj.src}
              text={pObj.text}
              label={pObj.label}
              cena={pObj.cena}
              poeni={pObj.poeni}
              akcija={pObj.akcija}
              ocena={pObj.akcija}
              path='/proizvodKorpa'> 
            </CardItem>
          ) 
          )}
        </ul>
      </div>
    </div>
  </div>
  );
}
