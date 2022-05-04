import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import AddProduct from './AddProduct';
import FormSuccess from './FormSuccess';

const AddP = ({setIsLogin}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'> <a href='/admin'>x</a></span>
        <div className='form-content-left'>
          <img className='form-img' src='/img/img-2.jpg' alt='image' />
        </div>
        {!isSubmitted ? (
          <AddProduct setIsLogin={setIsLogin} submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default AddP;
