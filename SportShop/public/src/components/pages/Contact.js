import React from 'react';
import '../../App.css';
import '../Contact.css';
import { Link } from 'react-router-dom';
import { ButtonSignUp } from '../ButtonSignUp';
import { Button } from '../Button';
import emailjs from '@emailjs/browser';


export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_8kj2qpe', e.target, 'user_nhLlXrZRagZ6U668bxCUN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return(
    <div className='kontakt'>
      <form onSubmit={sendEmail}>
      <div className='form-contact'>
          <h1 className='naslov'>Kontaktirajte nas</h1>
          <div className='form-inputs'>
              <label className='form-label'>Ime</label>
              <input
                className='form-input'
                type='text'
                placeholder='Ime'
                name='to_name'
                ></input>
          </div>
          <div className='form-inputs'>
              <label className='form-label'>E-mail</label>
              <input
                className='form-input'
                type='text'
                placeholder='E-mail'
                name='email'
                ></input>
          </div>
          <div className='form-inputs'>
              <label className='form-label'>Poruka</label>
              <textarea
                className='form-input-msg'
                type='text'
                placeholder='Poruka'
                name='message'
                ></textarea>
          </div>
          <div className="contact-btns">
            <button
            type='submit'
            className='btn-send' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            > Pošalji <i class="fas fa-paper-plane"></i>
            </button>
      </div>
      </div>  
      </form>
      
      <section class='social-media1'>
        <div class='social-media-wrap1'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo1'>
              SportPMD
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights1'>SportPMD © 2022</small>
          <div class='social-icons1'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100077903344762'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
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
