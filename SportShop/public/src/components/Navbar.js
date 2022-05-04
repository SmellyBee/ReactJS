import React, { useState, useEffect } from 'react';
import { ButtonSignUp } from './ButtonSignUp';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { BsPersonCircle } from "react-icons/bs";
import { BsFillBasket2Fill } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

function Navbar({isLogin, korpa}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SportPMD
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/muskarci'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Muškarci
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/zene'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Žene
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/deca'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Deca
              </Link>
            </li>
            
          </ul>
          {(!isLogin) ? <ButtonSignUp buttonStyle='btn--outline'>Prijavi se</ButtonSignUp> : 
            <div className='nav-item'>
              <Link
                to='/user'
                className='nav-links'
              >
                <BsPersonCircle/>
              </Link>
            </div>}
            {(!isLogin) ? <div ></div> : 
            <div className='nav-item'>
              <Link
                to='/korpa'
                className='nav-links'
              >
                <BsFillBasket2Fill/>
              </Link>
            </div>}
            {(!isLogin) ? <div ></div> : 
            <div className='nav-item'>
              <Link
                to='/user'
                className='nav-links'
              >
                <IoIosLogOut/>
              </Link>
            </div>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
