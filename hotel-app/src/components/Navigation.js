import React from 'react';
import './Navigation.css';
function Navigation() {
    
const navBurger=()=>{

  const navV = document.getElementById("nav");
  const navB=document.getElementById("nav-burger");
  const navC = document.getElementById("nav-cancel");

  navB.classList.toggle("is-active");
  navC.classList.toggle("is-active");
  navV.classList.toggle("is-active");
}

const navCancel=()=>{

    const navV = document.getElementById("nav");
    const navB=document.getElementById("nav-burger");
    const navC = document.getElementById("nav-cancel");
  
    navB.classList.toggle("is-active");
    navC.classList.toggle("is-active");
    navV.classList.toggle("is-active");
  }


    return (
        <>
        <header class="header">
        <div class="brand">
        <a href="/" class="brand-logo">
            <img src="logo2.webp" alt="" width="120px" height='100px'/>
        </a>
        <div class="nav-burger" id="nav-burger" onClick={navBurger}>
          <img src="hamburger-button.png" alt="Menu"/>
        </div>
        <div class="nav-cancel is-active" id="nav-cancel" onClick={navCancel}>
          <img src="cancel-button.png" alt="Cancel"/>
        </div>
      </div>
      
      <nav class="nav is-active" id="nav">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">Hotels</a>
        <a href="#" class="nav-link">Activities</a>
        <a href="#" class="nav-link">Login/Sign Up</a>
      </nav>
      
    </header>

        </>

    );
}

export default Navigation;