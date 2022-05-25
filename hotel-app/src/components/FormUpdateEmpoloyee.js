import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import './FormNewHotel.css'

function FormUpdateEmployee(props){

    const location=useLocation();
    const navigate=useNavigate();
 
    let {name}=location.state;
    let {lastName}=location.state;
    let {position}=location.state;
    let {hotelStreetAndNumber}=location.state;
    let {workingTime}=location.state;
    let {username}=location.state;
    let {password}=location.state;

     const state={
         name:name,
         lastname:lastName,
         position:position,
         working:workingTime,
         username:username,
         password:password
     };
  
     const getValue=(event)=>{
         const name=event.target.name;
         const value=event.target.value;
         if(name=='employee_name')
         state.name=value
         if(name=='employee_lastname')
         state.lastname=value
         if(name=='employee_position')
         state.position=value
         if(name=='working_time')
         state.working=value
         if(name=='employee_username')
         state.username=value
         if(name=='employee_password')
         state.password=value
         
      }
      const handleSubmit=(event)=>{
          let check=0;
          if(state.name=='')
          {
            check++;
            let x=document.getElementById('1');
            x.className='error';
          }
          if(state.lastname=='')
          {
            check++;
            let y=document.getElementById('2');
            y.className='error';
          }
          if(state.position=='')
          {
            check++;
            let y=document.getElementById('3');
            y.className='error';
          }
          if(state.working=='')
          {
            check++;
            let y=document.getElementById('4');
            y.className='error';
          }
          if(state.username=='')
          {
            check++;
            let y=document.getElementById('5');
            y.className='error';
          }
          if(state.password=='')
          {
            check++;
            let y=document.getElementById('6');
            y.className='error';
          }
          if(check>0)
          alert("Fiil red fields");
          else
          {
              const employee={ 
                name : state.name,
                lastName : state.lastname,
                workspace : state.position,
                hotelStreetAndNumber : hotelStreetAndNumber,
                workingTimeStart: state.working,
                oldusername: username,
                username: state.username,
                password: state.password
              
            };
            axios.post('http://localhost/proba/updateEmployee.php',employee).then(navigate('/employees_in_one_hotel',{
                state:
                {
                    street_name:hotelStreetAndNumber
                }
            }));
            
            
          }
            
  
      }
      return(
          <div className='form_div'>
  
              <h2>Update Employee</h2>
  
              <div class="input_field">
              <input  placeholder="Name Of Employee" required  className='input' defaultValue={name} onChange={getValue} name='employee_name' id='1'/>
              </div>
  
              <div class="input_field">
              <input placeholder="LastName Of Employee" required  className='input' defaultValue={lastName} onChange={getValue} name='employee_lastname' id='2'/>
              </div>
  
              <div class="input_field">
              <input placeholder="Employee position" required  className='input' defaultValue={position} onChange={getValue} name='employee_position' id='3'/>
              </div>

              <div class="input_field">
              <input placeholder="Employee username" required  className='input' defaultValue={username} onChange={getValue} name='employee_username' id='5'/>
              </div>

              <div class="input_field">
              <input placeholder="Employee password" required  className='input' defaultValue={password} onChange={getValue} name='employee_password' id='6'/>
              </div>

              <div class="input_field">
                <input type='time'  className='input' onChange={getValue} defaultValue={workingTime} name='working_time' id='4'/>
              </div>
  
              <button className='button' onClick={handleSubmit}>Update Employee</button>
  
          </div>
      )
  }
  
  export default FormUpdateEmployee;