import React, { useEffect, useState } from "react";
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import FormSuccess from './FormSuccess';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Admin from "./pages/Admin";

const FormLogin = ({ submitForm, setIsLogin,setKorpa}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );

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
      console.log(data.role);
      /*if (data == null) {
        const response2 = await fetch(
          "https://localhost:44396/Sport/GetUserByUsername/" + username,
          requestOptions
        );
        const data2 = await response2.json();
        setCookie("tip", "netacno");
        if (data2 == null) return;
      } else {
        setCookie("tip", "tacno");
      }*/
      setCookie("id", data.username);
      setIsLogin(true);
      history.push("/");
    };

    useEffect(() => {}, []);

    const updateUsername = (e) => {
      setUsername(e.target.value);
    }

    const updatePassword = (e) => {
      setPassword(e.target.value);
    };
  
    return (
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Prijavite se.
          </h1>
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

          <button className='form-input-btn' type='submit' onClick={getUser} Link>
            Login
          </button>
          <span className='form-input-login'>
            Ukoliko nemate nalog, registrujte se <a href='/sign-up'> ovde</a>
          </span>
        </form>
      </div>
    );
  };
  
  export default FormLogin;