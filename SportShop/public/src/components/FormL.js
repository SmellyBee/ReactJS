import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';

const FormL = ({setIsLogin, setKorpa}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'> <a href='/'>x</a></span>
        <div className='form-content-left'>
          <img className='form-img' src='/img/img-2.jpg' alt='image' />
        </div>
        {!isSubmitted ? (
          <FormLogin setIsLogin={setIsLogin} setKorpa={setKorpa} submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default FormL;
