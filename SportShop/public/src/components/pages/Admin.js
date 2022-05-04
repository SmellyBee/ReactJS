import React, { useEffect, useState } from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import '../Admin.css';


export default function Admin(setIsLogin) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["User"]);
    const [nesto, setNesto] = useState(0);
    const history = useHistory();
    const [role, setRole] = useState("");
    
    const getUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credential: 'include'
      };
      const response = await fetch(
        "https://localhost:44396/Sport/GetUserByUsername/" + username,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setCookie("username", data.username);
      setRole(response.data.user[0].role);
      history.push("/");
    };

  function logout(){
    removeCookie("id");
    history.push("/");
    window.location.reload(true);
  }

  return (
    <div className='cards-admin'>
    <h1>Admin {role}</h1>
    <div className='cards__container_admin'>
      <div className='cards__wrapper_admin'>
        <ul className='cards__items_admin'>
          <CardItem
            src='images/img-shop.jpg'
            text='Svi proizvodi'
            label='Proizvodi'
            path='/allproducts'
          />
          <CardItem
            src='images/img-allusers.jpg'
            text='Svi korisnici'
            label='Korisnici'
            path='/allusers'
          />
          <CardItem
            src='images/img-add.jpg'
            text='Dodavanje proizvoda'
            label='Dodaj proizvod'
            path='/addProduct'
          />
        </ul>
        <button className='logout-btn' type='submit' onClick={logout}>Logout</button>
      </div>
    </div>
  </div>
  );
}
