import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Deca() {
  return (
    <div className='cards'>
    <h1>Istražite ponudu za decu</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/img-boys.jpg'
            text='Istražite ponudu za dečake'
            label='Dečaci'
            path='/decaci'
          />
          <CardItem
            src='images/img-girls.jpg'
            text='Istražite ponudu za devojčice'
            label='Devojčice'
            path='/devojcice'
          />
        </ul>
        
      </div>
    </div>
  </div>
  );
}
