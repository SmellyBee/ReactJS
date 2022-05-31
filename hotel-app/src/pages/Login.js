import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import {Proba,Proba2} from './Global';

function Login() {


    const navigate=useNavigate();
    const autentifitation=async()=>{

        await axios.get("http://localhost/proba/guestLogin.php?username="+state.username+"&password="+state.password,{
        method:"GET",
        headers: { "Content-Type": "application/json", }
        }
        ).then(response=>{
            window.pom=response.data.username;
            if(response.data.message=="Succesful")
            {
                alert("Succesful");
                navigate(response.data.route);
            }
            else alert("Incorrect login");
        });
    };

    const state={
        username:'',
        password:'',
        
    };

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='username')
        state.username=value
        if(name=='password')
        state.password=value    
    };

     const handleSubmit=(event)=>{
        let check=0;
        if(state.username=='')
        {
          check++;
          let x=document.getElementById('1');
          x.className='error';
        }
        if(state.password=='')
        {
          check++;
          let y=document.getElementById('2');
          y.className='error';
        }
        if(check>0)
        alert("Fiil red fields");
        else
        { 
            autentifitation();
        }
    }
    

    return (
        <>
        <Navigation></Navigation>
        <div class='contentdiv'>
            <div class='Content'>
                <h2 class="contenttitle">Login</h2>
                
                <div class="input_field">
            <input  placeholder="Username" required  className='input' onChange={getValue} name='username' id='1'/>
            </div>

            <div class="input_field">
            <input  placeholder="Password" type='password' required  className='input' onChange={getValue} name='password' id='2'/>
            </div>

            <button class='buttonSignUp' onClick={handleSubmit}>Login</button>

            <a onClick={()=>navigate('/signup')}  class="link">Sign Up</a>

            </div>
        </div>

        <Footer></Footer>
        </>

    );
}

export default Login;