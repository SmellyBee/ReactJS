import React from 'react';
import { useEffect,useState} from 'react'
import '../../App.css';
import CardItem from '../CardItem';

export default function Obuca() {

  useEffect(() => {
    getShoes();
},[] );

  const getShoes = async() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credential: 'include'
    }; 
    const response = await fetch(
      "https://localhost:44396/Sport/GetAllProducts/Obuca",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setArticles(data);
  };

  const [articles,setArticles] = useState([
    
    /*{ObucaIme:'Addidas n34',ObucaLabel:'Muske',ObucaSlika:'img/patika5.jpg'},
    {ObucaIme:'Nike AirMax',ObucaLabel:'Muske',ObucaSlika:'img/patika2.jpg'},
    {ObucaIme:'Cipele zimske',ObucaLabel:'Zenske',ObucaSlika:'img/patika3.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},
    {ObucaIme:'Patika4',ObucaLabel:'Zenske',ObucaSlika:'img/patika4.jpg'},*/

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
    <h1>Obuća</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>

        {

         podaci.map(childs=>(

         <ul className='cards__items_shoes'>

            {
            childs.map(c=>(
            <CardItem
              /*src={c?.ObucaSlika}
              te
              text={c?.name}
              label={"Cena:" + c?.price + "RSD"}*/
              src={'images/' + c?.image}
              text={c?.name}
              label={c?.gender}
              cena={c?.price}
              poeni={c?.poeni}
              ocena={c?.ocena}
              akcija={c?.discount}
              path='/proizvod'
              
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