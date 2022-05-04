import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
  <div className='hero-container'>
      <video src="/public/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>SportPMD</h1>
      <p>Dobrodošli na zvanični sajt prodavnice sportske opreme SportPMD</p>
      <div className="hero-btns">
            <Button 
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            > <i class="fas fa-search"></i>
            <li className='nav-item'>
              <Link
                to='/admin'
                className='nav-links-admin'
              >
                ADMIN
              </Link>
            </li>
            </Button>
      </div>
  </div>
  )
}

export default HeroSection;
