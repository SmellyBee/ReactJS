import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';

export default function Decaci() {
  return (
    <div className='cards'>
      <h1>Istražite ponudu za dečake</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/boysSho.jpg'
              text='Istražite ponudu obuće za dečake'
              label='Obuća'
              path='/decaciObuca'
            />
            <CardItem
              src='images/img-boys.jpg'
              text='Istražite ponudu odeće za dečake'
              label='Odeća'
              path='/decaciOdeca'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/boysEqu.jpg'
              text='Istražite ponudu opreme za dečake'
              label='Oprema za trening'
              path='/decaciOprema'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
