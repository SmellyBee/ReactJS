import React, { useEffect, useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import Select from 'react-select';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, errors,name,lastname,
    username,email,
    password,passwordConf,
    phoneNumber,address, 
    updateName, updateLastname,
    updateUsername ,updateEmail,
    updatePassword,updatePasswordConf,
    updatePhoneNumber,updateAdress} = useForm(
    submitForm,
    validate
  );
  
  /*const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");*/
  const [pol, setPol] = useState("");
  const [selectOption, setOption] = useState("");

  useEffect( () => {
    if(selectOption != "")
      setPol(selectOption.value)}, [selectOption] );


  const postUser = async () => {
    console.log("nesto",name,lastname,username,pol);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"Name": name, "LastName": lastname, "Username": username, 
      "Email": email, "Password": password, "PasswordConf": passwordConf,
      "PhoneNumber": phoneNumber, "Address": address, "Pol": pol})
    };
    const response = await fetch(
      "https://localhost:44396/Sport/addUser", requestOptions
    );
  }

  /*const updateName = (e) => {
    setName(e.target.value);
  }

  const updateLastname = (e) => {
    setLastname(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updatePasswordConf = (e) => {
    setPasswordConf(e.target.value);
  }

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const updateAdress = (e) => {
    setAddress(e.target.value);
  }*/

  const options = [
    { value: 'Muski', label: 'Muski' },
    { value: 'Zenski', label: 'Zenski' },
    { value: 'Decaci', label: 'Decaci' },
    { value: 'Devojcice', label: 'Devojcice' }
  ]

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Registrujte se, ukoliko nemate nalog.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Ime</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Unesite ime'
            /*value={values.name}
            onChange={handleChange}*/
            value={name}
            onChange={updateName}
          />
          {/*errors.name && <p>{errors.name}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Prezime</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Unesite prezime'
            /*value={values.lastname}
            onChange={handleChange}*/
            value={lastname}
            onChange={updateLastname}
          />
          {/*errors.lastname && <p>{errors.lastname}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Korisničko ime</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Unesite korisničko ime'
            /*value={values.username}
            onChange={handleChange}*/
            value={username}
            onChange={updateUsername}
          />
          {/*errors.username && <p>{errors.username}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Unesite email'
            /*value={values.email}
            onChange={handleChange}*/
            value={email}
            onChange={updateEmail}
          />
          {/*errors.email && <p>{errors.email}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Šifra</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Unesite šifru'
            /*value={values.password}
            onChange={handleChange}*/
            value={password}
            onChange={updatePassword}
          />
          {/*errors.password && <p>{errors.password}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Potvrdite šifru</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Potvrdite šifru'
            /*value={values.password2}
            onChange={handleChange}*/
            value={passwordConf}
            onChange={updatePasswordConf}
          />
          {/*errors.passwordConf && <p>{errors.passwordConf}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Broj telefona</label>
          <input
            className='form-input'
            type='phoneNumber'
            name='phoneNumber'
            placeholder='Unesite broj telefona'
            /*value={values.brojTelefona}
            onChange={handleChange}*/
            value={phoneNumber}
            onChange={updatePhoneNumber}
          />
          {/*errors.phoneNumber && <p>{errors.phoneNumber}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Adresa</label>
          <input
            className='form-input'
            type='adresa'
            name='adresa'
            placeholder='Unesite adresu'
            /*value={values.adresa}
            onChange={handleChange}*/
            value={address}
            onChange={updateAdress}
          />
          {/*errors.address && <p>{errors.address}</p>*/}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Pol</label>
          <Select 
            options={options}
            defaultValue={pol}
            onChange={setOption}
          />
        </div>
        <button className='form-input-btn' type='submit' onClick={postUser}>
          Sign up
        </button>
        <span className='form-input-login'>
          Već imate nalog? Prijavite se <a href='/login'>ovde</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
