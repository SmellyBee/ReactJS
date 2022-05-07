import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>
        <footer class="footer-distributed">

            <div class="footer-left">

            <img src='logo2.webp' class='logo'></img>

            <p class="footer-links">
                <a href="#" class="link-1">Home</a>
                
                <a href="#">Hotels</a>
            
                <a href="#">Activities</a>
            
                <a href="#">Login</a>
                
                <a href="#">Sign Up</a>
                
            </p>

            <p class="footer-company-name">LAMP © 2022</p>
        </div>

        <div class="footer-center">

            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Aleksandra Medvedeva 14</span> Nis, Serbia</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+381 some number</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">LAMP@elfak.com</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>About the company</span>
                The LAMP team was made to implement the 24h-Hotel application as a project done at the faculty. Faculty of Electronics Nis
            </p>

            <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

            </div>

        </div>

        </footer>
       

        </>

    );
}

export default Footer;