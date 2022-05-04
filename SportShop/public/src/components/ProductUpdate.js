import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Form.css';

export default function ProductUpdate()
{
  const location = useLocation()
  const { src } = location.state
  const { text } = location.state
  const { label } = location.state
  const { cena } = location.state
  const { poeni } = location.state
  const { ocena } = location.state
  const { akcija } = location.state

  const nesto = (name,price,brand,ocena,
    discount,gender,image) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },

    };

    fetch('https://localhost:44396/Sport/UpdateProduct/' + text + "/" + name + "/"+ price + "/"+ brand + "/"+ ocena + 
    "/"+ discount + "/"+ gender + "/" + image, requestOptions);
  }

  return(
    <div className='product-update-container'>
      <form className='form-update' noValidate>
        <h1>
          Izmena proizvoda {text}
        </h1>
        <div className='form-inputs-update'>
          <label className='form-label-update'>Naziv</label>
          <input
            className='form-input-update'
            type='text'
            name='name'
            placeholder={text}
            value={text}
            on/>
        </div>
        <div className='form-inputs-update'>
          <label className='form-label-update'>Cena</label>
          <input
            className='form-input-update'
            type='text'
            name='name'
            placeholder={text}
            value={text}
            on/>
        </div>
        <div className='form-inputs-update'>
          <label className='form-label-update'>Brand</label>
          <input
            className='form-input-update'
            type='text'
            name='name'
            placeholder={text}
            value={text}
            on/>
        </div>
        <div className='form-inputs-update'>
          <label className='form-label-update'>Ocena</label>
          <input
            className='form-input-update'
            type='text'
            name='name'
            placeholder={text}
            value={text}
            on/>
        </div>
        <div className='form-inputs-update'>
          <label className='form-label-update'>Discount</label>
          <input
            className='form-input-update'
            type='text'
            name='name'
            placeholder={text}
            value={text}
            on/>
        </div>
      </form>
      <button onClick={() => nesto("Promenjeno","222","brendMenjan","5", "3", "Muski", "1232")}>Dugme</button>  
    </div>
    
  )
}