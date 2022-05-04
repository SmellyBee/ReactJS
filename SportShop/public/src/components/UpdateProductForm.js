import React, { useEffect, useState } from "react";
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import FormSuccess from './FormSuccess';
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import AddP from "./AddP";
import Select from 'react-select';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useLocation } from 'react-router-dom'

const UpdateProductForm = ({ submitForm, props}) => {
    const { handleSubmit, errors } = useForm(
      submitForm,
      validate
    );

    /*useEffect(() => {
        getProduct();
    },[] );*/

    const location = useLocation()
    const { src } = location.state
    const { text } = location.state
    const { poll } = location.state
    const { cenaa } = location.state
    const { poenii } = location.state
    const { ocenaa } = location.state
    const { akcijaa } = location.state

    const [product,setProduct]=useState([]);

    const [selectedFile, setState] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [ocena, setOcena] = useState("");
    const [discount, setDiscount] = useState("");
    const [gender, setPol] = useState("");
    const [image, setImage] = useState("");
    const [kategorija, setKategorija] = useState("");

    const history = useHistory();
    const [selectOptionPol, setOptionPol] = useState("");
    const [selectOptionCategory, setOptionCategory] = useState("");
    
    const nesto = (name,price,brand,ocena,
      discount,gender,image) => {
        let img = image.substring(12,image.length)
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
  
      };
  
      fetch('https://localhost:44396/Sport/UpdateProduct/' + text + "/" + name + "/"+ price + "/"+ brand + "/"+ ocena + 
      "/"+ discount + "/"+ gender + "/" + img, requestOptions);
    }

    useEffect(() => {}, []);

    const updateName = (e) => {
      setName(e.target.value);
    }

    const updatePrice = (e) => {
      setPrice(e.target.value);
    };

    const updateBrand = (e) => {
        setBrand(e.target.value);
    };

    const updateOcena = (e) => {
        setOcena(e.target.value);
    };

    const updateDiscount = (e) => {
        setDiscount(e.target.value);
    };

    const updatePol = (e) => {
        setPol(e.target.value);
    };

    const updateImage = (e) => {
      setImage(e.target.value);
    }

    const updateKategorija = (e) => {
        setKategorija(e.target.value);
    };

    useEffect( () => {
        if(selectOptionPol != null)
        {
          console.log("Option: pol", selectOptionPol)
          setPol(selectOptionPol.value)
          console.log(gender)
        }
          }, [selectOptionPol] );

    useEffect( () => {
        if(selectOptionCategory != null)
          setKategorija(selectOptionCategory.value)}, [selectOptionCategory] );

    const optionsPol = [
        { value: 'Muski', label: 'Muski' },
        { value: 'Zenski', label: 'Zenski' },
        { value: 'Decaci', label: 'Decaci' },
        { value: 'Devojcice', label: 'Devojcice' },
    ]

    const optionsCategory = [
        { value: 'Obuca', label: 'Obuca' },
        { value: 'Odeca', label: 'Odeca' },
        { value: 'Oprema', label: 'Oprema' },
        { value: 'Suplementi i vitamini', label: 'Suplementi i vitamini' },
        { value: 'Sprave', label: 'Sprave' }
    ]
  
    return (
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Izmena proizvoda: {text}
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Naziv</label>
            <input
              className='form-input'
              type='text'
              name='name'
              placeholder={text}
              
              value={name}
              onChange={updateName}
            />
          </div>
          
          <div className='form-inputs'>
            <label className='form-label'>Cena</label>
            <input
              className='form-input'
              type='number'
              name='price'
              placeholder={cenaa}
              
              value={price}
              onChange={updatePrice}
            />
          </div>

          <div className='form-inputs'>
            <label className='form-label'>Brend</label>
            <input
              className='form-input'
              type='text'
              name='brand'
              placeholder='Unesite brend'
              
              value={brand}
              onChange={updateBrand}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Ocena</label>
            <input
              className='form-input'
              type='number'
              name='ocena'
              placeholder={ocenaa}
              
              value={ocena}
              onChange={updateOcena}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Popust</label>
            <input
              className='form-input'
              type='number'
              name='discount'
              placeholder={akcijaa}
              
              value={discount}
              onChange={updateDiscount}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Pol</label>
            <Select 
                options={optionsPol}
                defaultValue={gender}
                onChange={setOptionPol}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Image</label>
            <input
              className='form-input-image'
              type='file'
              name='image'
              placeholder='Odaberite fajl'
              onChange={updateImage}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Kategorija</label>
            <Select 
                options={optionsCategory}
                defaultValue={kategorija}
                onChange={setOptionCategory}
            />
          </div>

          <button className='form-input-btn' type='submit' 
          /*onClick={() => nesto("Izmena1","789","izmenabrend","10", "50", "Zenski", "1232")}*/
          onClick={() => nesto(name, price, brand, ocena, discount, gender, image)}>
            Sacuvaj izmene
          </button>
          <span className='form-input-login'>
            Vrati se <a href='/allproducts'> nazad</a>
          </span>
        </form>
      </div>
    );
  };
  
  export default UpdateProductForm;