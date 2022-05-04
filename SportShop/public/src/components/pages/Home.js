import '../../App.css'
import HeroSection from '../HeroSection';
import React, {useEffect, useState} from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function Home() {

    return (
        <>
            <HeroSection />
            <Cards />
            <Footer></Footer>
        </>
    )
}

export default Home;
