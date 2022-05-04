import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Zene() {
  return (
    <div className='cards'>
      <h1>Istražite ponudu za žene</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-sho1.jpg'
              text='Istražite ponudu ženske obuće'
              label='Obuća'
              path='/obucaWomen'
            />
            <CardItem
              src='images/img-clo1.jpg'
              text='Istražite ponudu ženske odeće'
              label='Odeća'
              path='/odecaWomen'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Istražite ponudu sprava za trenig'
              label='Sprave za trening'
              path='/sprave'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Istražite ponudu suplemenata i vitamina'
              label='Suplementi'
              path='/suplementi'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Istražite ponudu ženske opreme za trening'
              label='Oprema za trening'
              path='/equipmentWomen'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
