import React from 'react';
import './Footer.css';
import { ButtonSignUp } from './ButtonSignUp';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Contact from './pages/Contact';

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O nama</h2>
            <Link to='/info'>Informacije</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontaktirajte nas</h2>
            <Link to='/kontakt'>Kontakt</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SportPMD
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SportPMD © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              //to='https://www.facebook.com/profile.php?id=100077903344762'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
