import React from 'react';
import Navigation from '../components/Navigation';
import './Home.css'
import Footer from '../components/Footer';

function Home() {
    return (
        <>
        <Navigation></Navigation>

        <div class='contentdiv'>

            <div class='Content'>
                <h2 class="contenttitle">Welcome</h2>
                <p class='contenttext'>The 24h-Hotel application is a quick and easy application that will allow you 
                    to view all information about hotel rooms and hotel activities. It is also possible to quickly
                    and easily register in order to enjoy the full services of this application.
                    Such as booking a room and using the additional services of the hotel
                    where you booked the room.
                </p>
            </div>

            <div class='Content'>
                <h2 class="contenttitle">You are not registered yet?</h2>
                <p class='contenttext'>Apply quickly and easily</p>
                <button class='buttonSignUp'>Sign Up</button>
                <button class='buttonSignUp'>Login</button>
            </div>

        </div>
        <Footer></Footer>
        </>

    );
}

export default Home;