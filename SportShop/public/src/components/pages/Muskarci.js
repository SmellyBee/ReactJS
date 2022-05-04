import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';

export default function Muskarci() {
  return (
    <div className='cards'>
      <h1>Istražite ponudu za muškarce</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-sho.jpg'
              text='Istražite ponudu muške obuće'
              label='Obuća'
              path='/obucaMen'
            />
            <CardItem
              src='images/img-clo.jpg'
              text='Istražite ponudu muške odeće'
              label='Odeća'
              path='/odecaMen'
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
              text='Istražite ponudu muške opreme za trening'
              label='Oprema za trening'
              path='/equipmentMen'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
