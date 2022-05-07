import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './FormNewHotel.css'

function FormNewEmployee(props){
  
     const state={
         name:'',
         lastname:'',
         position:'',
         nesto:''
     };
  
     const getOption=(event)=>{
      let newValue = event.nativeEvent.target.value;
      state.star=newValue;
     }
     const getValue=(event)=>{
         const name=event.target.name;
         const value=event.target.value;
         if(name=='employee_name')
         state.name=value
         if(name=='employee_lastname')
         state.lastname=value
         if(name=='employee_position')
         state.position=value
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
          if(check>0)
          alert("Fiil red fields");
          else
          { 
            const requestOptions = {
              method : 'POST',
              mode : 'no-cors',
              headers : {
                "Content-Type" : "application/json",
               
              },
              body: JSON.stringify({
                'name' : state.name,
                'lastName' : state.lastname,
                'workspace' : state.position,
                'hotelStreetAndNumber' : props.street
              })
            };
            fetch('http://localhost/proba/CRUD_employee.php',requestOptions);
            props.emp();
           }
            
  
      }
      return(
          <div className='form_div'>
  
              <h2>Add new Employee</h2>
  
              <div class="input_field">
              <input  placeholder="Name Of Employee" required  className='input' onChange={getValue} name='employee_name' id='1'/>
              </div>
  
              <div class="input_field">
              <input placeholder="LastName Of Employee" required  className='input' onChange={getValue} name='employee_lastname' id='2'/>
              </div>
  
              <div class="input_field">
              <input placeholder="Employee position" required  className='input' onChange={getValue} name='employee_position' id='3'/>
              </div>
  
              <button className='button' onClick={handleSubmit}>Add new Employee</button>
  
          </div>
      )
  }
  
  export default FormNewEmployee;