import React from 'react';
import './FormNewHotel.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function FormNewRoom(props) { 

  const location = useLocation();
  let {street_name}=location.state;

    const state={
        capacity:'',
        number:'',
        cost:'',
        picature1:'',
        picature2:'',
        picature3:'',
        picature4:'',
        street:street_name
    };

    console.log(state.street);

    const getValue=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='capacity')
        state.capacity=value
        if(name=='number')
        state.number=value
        if(name=='cost')
        state.cost=value
        if(name=='picature1')
        state.picature1=value
        if(name=='picature2')
        state.picature2=value
        if(name=='picature3')
        state.picature3=value
        if(name=='picature4')
        state.picature4=value
     }

     const handleSubmit=(event)=>{
        let check=0;
        if(state.capacity=='')
        {
          check++;
          let x=document.getElementById('1');
          x.className='error';
        }
        if(state.number=='')
        {
          check++;
          let y=document.getElementById('2');
          y.className='error';
        }
        if(state.cost=='')
        {
          check++;
          let y=document.getElementById('3');
          y.className='error';
        }
        if(state.picature1=='')
        {
          check++;
          let y=document.getElementById('4');
          y.className='error';
        }
        if(state.picature2=='')
        {
          check++;
          let y=document.getElementById('5');
          y.className='error';
        }
        if(state.picature3=='')
        {
          check++;
          let y=document.getElementById('6');
          y.className='error';
        }
        if(state.picature4=='')
        {
          check++;
          let y=document.getElementById('7');
          y.className='error';
        }

        if(check>0)
        alert("Fiil red fields");
        else
        {
          const room={
            roomCapacity:state.capacity,
            roomNumber:state.number,
            costPerDay:state.cost,
            picture1:state.picature1.substring(12),
            picture2:state.picature2.substring(12),
            picture3:state.picature3.substring(12),
            picture4:state.picature4.substring(12),
            hotelStreetAndNumber:state.street,
            status:'Slobodna'
          }
            axios.post('http://localhost/proba/CRUD_room.php',room).then(response=>alert("Room added"));
        }

    }


    return (
    <>
    <div className='form_div'>

    <h2>Add new Room</h2>

    <div class="input_field">
    <input  placeholder="Room capacity" required  className='input'  onChange={getValue} name='capacity' id='1' />
    </div>

    <div class="input_field">
    <input placeholder="Room number" required  className='input' onChange={getValue} name='number' id='2' />
    </div>

    <div class="input_field">
    <input placeholder="Cost per day" required  className='input' onChange={getValue} name='cost' id='3' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'  onChange={getValue} name='picature1' id='4' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'  onChange={getValue} name='picature2' id='5' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input' onChange={getValue} name='picature3' id='6' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input' onChange={getValue} name='picature4' id='7'/>
    </div>

    <button className='button' onClick={handleSubmit} >Add new Room</button>

    </div>
    </>
    );
}

export default FormNewRoom;