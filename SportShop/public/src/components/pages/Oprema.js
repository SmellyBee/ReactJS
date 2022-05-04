import React from 'react';
import { useEffect,useState} from 'react'
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';

export default function Equipment() {

  useEffect(() => {
    getEquipment();
},[] );

  const getEquipment = async() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credential: 'include'
    }; 
    const response = await fetch(
      "https://localhost:44396/Sport/GetAllProducts/Oprema",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setArticles(data);
  };

  const [articles,setArticles] = useState([

  ]);

  var chunks = function (array, size = 4) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  };

  const podaci = chunks(articles, 4);

  return (
    <div className='cards'>
    <h1>Oprema</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>

        {

         podaci.map(childs=>(

         <ul className='cards__items_oprema'>

            {
            childs.map(c=>(
            <CardItem
            src={'images/' + c?.image}
            text={c?.name}
            label={c?.gender}
            cena={c?.price}
            poeni={c?.poeni}
            ocena={c?.ocena}
            akcija={c?.discount}
              path='/proizvod'
            />
            ))
            }
            </ul>
         ))
        }
      </div>
    </div>
  </div>
  );
}