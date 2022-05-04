import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Istražite našu ponudu!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Istražite ponudu obuće'
              label='Obuća'
              path='/obuca'
              
            />
            <CardItem
              src='images/img-2.jpg'
              text='Istražite ponudu odeće'
              label='Odeća'
              path='/odeca'
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
              text='Istražite ponudu opreme'
              label='Oprema za trening'
              path='/oprema'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
