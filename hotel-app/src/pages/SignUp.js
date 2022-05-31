import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import './Home.css'
import './SignUp.css'

function SignUp() {

  const navigate=useNavigate();

    const state={
        username:'',
        password:'',
        confirmpassword:'',
        email:'',
        firstname:'',
        lastname:'',
        zipCode:'',
    };

    const res = async ()=>{

      const requestOptions = {
        method : 'POST',
        //mode : 'no-cors',
        headers : {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          'firstName' : state.firstname,
          'lastName' : state.lastname,
          'email' : state.email,
          'username' : state.username,
          'password' : state.password,
          'zipCode' : state.zipCode
        })
      };

    const res= await fetch('http://localhost/proba/createGuest.php',requestOptions);
    if(res.status == 201)
    {
      alert('Username alrady exists');
      let x=document.getElementById('3');
      x.className='error';
      x.value='';
    }
    else
    {
      alert('You are Registered');
      navigate('/');
    }
  }

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='username')
        state.username=value
        if(name=='password')
        state.password=value   
        if(name=='password2')
        state.confirmpassword=value
        if(name=='email')
        state.email=value
        if(name=='zipCode')
        state.zipCode=value
        if(name=='firstname')
        state.firstname=value
        if(name=='lastname')
        state.lastname=value

     }
     const handleSubmit=(event)=>{
        let check=0;
        if(state.username=='')
        {
          check++;
          let x=document.getElementById('3');
          x.className='error';
        }
        if(state.password=='')
        {
          check++;
          let y=document.getElementById('4');
          y.className='error';
        }
        if(state.confirmpassword=='' || state.confirmpassword!=state.password)
        {
          check++;
          let y=document.getElementById('5');
          y.className='error';
        }
        if(state.firstname=='')
        {
          check++;
          let y=document.getElementById('1');
          y.className='error';
        }
        if(state.lastname=='')
        {
          check++;
          let y=document.getElementById('2');
          y.className='error';
        }
        if(state.email=='')
        {
          check++;
          let y=document.getElementById('6');
          y.className='error';
        }
        if(state.zipCode=='')
        {
          check++;
          let y=document.getElementById('7');
          y.className='error';
        }

        if(check>0)
        alert("Fiil red fields");
        else
        { 
          res();
        }
    }

    return (
        <>
        <Navigation></Navigation>
        <div class='contentdiv2'>
            <div class='Content2'>
                <h2 class="contenttitle">Sign Up</h2>

                <div class="input_field">
                    <input  placeholder="First name" required  className='input' onChange={getValue} name='firstname' id='1'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Last name"  required  className='input' onChange={getValue} name='lastname' id='2'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Username" required  className='input' onChange={getValue} name='username' id='3'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Password" type='password' required  className='input' onChange={getValue} name='password' id='4'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Confirm Password" type='password' required  className='input' onChange={getValue} name='password2' id='5'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Email" type='email' required  className='input' onChange={getValue} name='email' id='6'/>
                </div>

                <div class="input_field">
                    <input  placeholder="Zip code"  required  className='input' onChange={getValue} name='zipCode' id='7'/>
                </div>

                <button class='buttonSignUp' onClick={handleSubmit}>Register</button>
               
            </div>
        </div>

        <Footer></Footer>
        </>

    );
}

export default SignUp;