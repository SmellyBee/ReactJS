import React, { Component, useState } from 'react';
import { useEffect} from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom'
import FormaUserProfile from '../FormaUserProfile';

export default function UserProfile({user}) {

  const [korisnik, setUserProfile] = useState([]);

  useEffect(() => {
    getUser();
},[korisnik] );

const getUser = async () =>
    {
        const requestOptions = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }};
        const response = await fetch("https://localhost:44396/Sport/GetUserByUsername/" + user.username,requestOptions);
        const data = await response.json();
        setUserProfile(data);
        console.log(data.username)
    }

  const location = useLocation()
  const { src } = location.state
  const { text } = location.state
  const { label } = location.state
  const { username } = location.state
  const { name } = location.state
  const { lastName } = location.state
  const { email } = location.state
  const { address } = location.state
  const { phoneNumber } = location.state
  const { pol } = location.state

  return ( 
    <>
    <FormaUserProfile 
        src={src}
        text={text}
        label={label}
        username={username}
        name={name}
        lastName={lastName}
        email={email}
        address={address}
        phoneNumber={phoneNumber}
        pol={pol}
    ></FormaUserProfile>
    </>
  );
}