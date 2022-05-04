import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import '../Cards.css';

export default function Devojcice() {
  return (
    <div className='cards'>
      <h1>Istražite ponudu za devojčice</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/girlsSho.jpg'
              text='Istražite ponudu obuće za devojčice'
              label='Obuća'
              path='/devojciceObuca'
            />
            <CardItem
              src='images/img-girls.jpg'
              text='Istražite ponudu odeće za devojčice'
              label='Odeća'
              path='/devojciceOdeca'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/girlsEqu.jpg'
              text='Istražite ponudu opreme za devojčice'
              label='Oprema za trening'
              path='/devojciceOprema'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
