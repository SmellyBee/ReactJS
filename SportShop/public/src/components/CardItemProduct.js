import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

function CardItemProduct(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['Product']);
    
    const {product, setAllProducts} = props;
    const history = useHistory();
    
    /*const deleteProduct = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: {  'Accept': 'application/json',
                        'Content-Type': 'application/json', }};
        console.log(product.name)
        const response = await fetch("https://localhost:44396/Sport/DeleteProductByName/"+ product.name, requestOptions);
        setAllProducts([])
    }*/

    const deleteProduct = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://localhost:44396/Sport/DeleteProduct/' + product.name, requestOptions);
        history.push("/allproducts")
    }

    return (
    <>
      <li className='cards__item'>
      <Link className='cards__item__link' to={{
         pathname:props.path,
         state:{src:props.src,text:props.text,
          label:props.label,cena:props.cena,
          poeni:props.poeni,ocena:props.ocena,akcija:props.akcija}
          }}>
        <div className='cards__item__link' to="/allusers">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <button className='delete-btn' onClick={() => deleteProduct()}>Obrisi proizvod</button>
          </div>
        </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemProduct;