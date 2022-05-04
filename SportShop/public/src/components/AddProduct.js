import React, { useEffect, useState } from "react";
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import FormSuccess from './FormSuccess';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import AddP from "./AddP";
import Select from 'react-select';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

const AddProduct = ({ submitForm, setIsLogin}) => {
    const { handleSubmit, errors } = useForm(
      submitForm,
      validate
    );

    var pom = "";

    const [selectedFile, setState] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [ocena, setOcena] = useState("");
    const [discount, setDiscount] = useState("");
    const [gender, setPol] = useState("");
    const [image, setImage] = useState("");
    const [kategorija, setKategorija] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["User"]);
    const [nesto, setNesto] = useState(0);
    const history = useHistory();
    const [selectOptionPol, setOptionPol] = useState("");
    const [selectOptionCategory, setOptionCategory] = useState("");

    const AddProizvod = (name,price,brand,ocena,
      discount,gender,image,kategorija) => {
        let img = image.substring(12,image.length)
        const requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          /*body: JSON.stringify({"Name": name, "Price": price, "Brand": brand, 
          "Ocena": ocena, "Discount": discount, "Pol": pol,
          "Image": image, "Kategorija": kategorija })*/
        };
        fetch(
          "https://localhost:44396/Sport/AddProduct/" + name + "/"+ price + "/"+ brand + "/"+ ocena + 
          "/"+ discount + "/"+ gender + "/"+ img + "/"+ kategorija,  requestOptions
        );
    }

    const readProizvod = (name,price,brand,ocena,
      discount,pol,image,kategorija) => { 
        console.log(name,price,brand,ocena,
          discount,pol,image,kategorija);
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

    /*const updateImage = (base64) => {
        setImage(base64);
    };*/

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
        { value: 'Neutral', label: 'Neutral' },
    ]

    const fileSelectedHandler = event => {
      setState({
        selectedFile: event.target.files[0]
      })
    }

    const fileUploadHandler = () => {
      axios.post('');
    }

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
            Dodavanje proizvoda.
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Naziv</label>
            <input
              className='form-input'
              type='text'
              name='name'
              placeholder='Unesite naziv proizvoda'
              
              value={name}
              onChange={updateName}
            />
            {/*errors.username && <p>{errors.username}</p>*/}
          </div>
          
          <div className='form-inputs'>
            <label className='form-label'>Cena</label>
            <input
              className='form-input'
              type='number'
              name='price'
              placeholder='Unesite cenu'
              
              value={price}
              onChange={updatePrice}
            />
            {/*errors.password && <p>{errors.password}</p>*/}
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
            {/*errors.password && <p>{errors.password}</p>*/}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Ocena</label>
            <input
              className='form-input'
              type='number'
              name='ocena'
              placeholder='Unesite ocenu'
              
              value={ocena}
              onChange={updateOcena}
            />
            {/*errors.password && <p>{errors.password}</p>*/}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Popust</label>
            <input
              className='form-input'
              type='number'
              name='discount'
              placeholder='Unesite popust'
              
              value={discount}
              onChange={updateDiscount}
            />
            {/*errors.password && <p>{errors.password}</p>*/}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Pol</label>
            <Select 
                options={optionsPol}
                defaultValue={gender}
                onChange={setOptionPol}
            />
            {/*errors.password && <p>{errors.password}</p>*/}
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
            {/*errors.password && <p>{errors.password}</p>*/}
          </div>

          <button className='form-input-btn' type='submit' onClick={() => AddProizvod(name,price,brand,ocena,
                        discount,gender,image,kategorija)}>
            Dodaj proizvod
          </button>
          <span className='form-input-login'>
            Vrati se <a href='/admin'> nazad</a>
          </span>
        </form>
      </div>
    );
  };
  
  export default AddProduct;