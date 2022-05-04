import React, { Component, useState } from 'react';
import { useEffect} from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom'
import FormaProizvod from '../FormaProizvod';

export default function Proizvod({product}) {

  const [proizvod, setProizvod] = useState([]);

  useEffect(() => {
    //getProduct();
},[proizvod] );

/*const getProduct = async () =>
    {
        const requestOptions = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }};
        const response = await fetch("https://localhost:44396/Sport/GetProductByName/" + product.username,requestOptions);
        const data = await response.json();
        setProizvod(data);
    }*/

  const location = useLocation()
  const { src } = location.state
  const { text } = location.state
  const { label } = location.state
  const { cena } = location.state
  const { poeni } = location.state
  const { ocena } = location.state
  const { akcija } = location.state

  return ( 
    <>
    <FormaProizvod 
    src={src}
    text={text}
    label={label}
    cena={cena}
    poeni={poeni}
    ocena={ocena}
    akcija={akcija}
    ></FormaProizvod>
    </>
  );
}