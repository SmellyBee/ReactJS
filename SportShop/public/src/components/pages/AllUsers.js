import React from 'react';
import { useEffect,useState} from 'react'
import '../../App.css';
import CardItemUser from '../CardItemUser';
import '../User.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Korpa from "../../State/Korpa"

export default function AllUsers() {

  const [articles,setAllUsers] = useState([]);

  useEffect(() => {
    
      getAllUsers();
      let k = Korpa("vratiKorpu",null);
      console.log(k);
      let k1 = Korpa("izprazniKorpu",null);
      console.log(k1)
},[articles.length] );

  const getAllUsers = async() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credential: 'include'
    }; 
    const response = await fetch(
      "https://localhost:44396/Sport/GetAllUsers/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setAllUsers(data);
  };

  

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
    <h1>Svi korisnici</h1>
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
            <CardItemUser
              src='images/img-profile.jpg'
              text={c?.name + " " + c?.lastName}
              user = {c}
              label={"Username:" + c?.username}
              path='/allusers'
              setAllUsers={setAllUsers}
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