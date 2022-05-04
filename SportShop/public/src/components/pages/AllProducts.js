import React from 'react';
import { useEffect,useState} from 'react'
import '../../App.css';
import CardItem from '../CardItem';
import '../User.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import CardItemProduct from '../CardItemProduct';

export default function AllUsers() {

  useEffect(() => {
    getAllProductsShoes();
},[] );

  const getAllProductsShoes = async() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credential: 'include'
    }; 
    const response = await fetch(
      "https://localhost:44396/Sport/GetSviProizvodi",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setAllProducts(data);

  };

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
    <div className='cards_user'>
    <h1>Svi proizvodi</h1>
    <div className='cards__container_user'>
    <Link
      to='/admin'
      className='link-back'
      >
      <BsFillArrowLeftCircleFill/>BACK
    </Link>
    <div className='cards__wrapper'>
        {
         podaci.map(childs=>(
         <ul className='cards__items_user'>
            {
            childs.map(c=>(
            <CardItemProduct
              product = {c}
              src={'images/' + c?.image}
              text={c?.name}
              label={c?.gender}
              cena={c?.price}
              poeni={c?.poeni}
              ocena={c?.ocena}
              akcija={c?.discount}
              path='/updateProdF'
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