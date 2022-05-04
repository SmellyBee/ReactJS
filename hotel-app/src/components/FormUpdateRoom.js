import React from 'react';
import './FormNewHotel.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function FormUpdateRoom(props) { 

  const location = useLocation();

  let {street_name}=location.state;
  let {room_capacity}=location.state;
  let {room_number}=location.state;
  let {room_cost}=location.state;
  let { pic1}=location.state;
  let { pic2}=location.state;
  let { pic3}=location.state;
  let { pic4}=location.state;


    const state={
        capacity:room_capacity,
        number:room_number,
        cost:room_cost,
        picature1:pic1,
        picature2:pic2,
        picature3:pic3,
        picature4:pic4,
        street:street_name,
        old_number:room_number
    };

    console.log(state.street);
    console.log(state.old_number);

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
            currRoomNumber:state.old_number,
            currHotelsan:state.street,
            roomCapacity:state.capacity,
            roomNumber:state.number,
            costPerDay:state.cost,
            picture1:state.picature1,
            picture2:state.picature2,
            picture3:state.picature3,
            picture4:state.picature4,
            streetAndNumber:state.street,
            status:'Slobodna'
          }
          axios.put("http://localhost/proba/CRUD_room.php?status=Slobodna&costPerDay="+state.cost+"&currRoomNumber="+state.old_number+"&currHotelsan="+state.street+"&picture1="+state.picature1+"&picture2="+state.picature2+"&picture3="+state.picature3+"&picture4="+state.picature4+"&roomCapacity="+state.capacity+"&roomNumber="+state.number+"&streetAndNumber="+state.street)
          .then(responce=>alert("RoomUpdated"));
        }

    }


    return (
    <>
    <div className='form_div'>

    <h2>Update Room</h2>

    <div class="input_field">
    <input  placeholder="Room capacity" required  className='input'  defaultValue={room_capacity} onChange={getValue} name='capacity' id='1' />
    </div>

    <div class="input_field">
    <input placeholder="Room number" required  className='input'  defaultValue={room_number} onChange={getValue} name='number' id='2' />
    </div>

    <div class="input_field">
    <input placeholder="Cost per day" required  className='input'  defaultValue={room_cost} onChange={getValue} name='cost' id='3' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'  onChange={getValue} name='picature1' id='4' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'   onChange={getValue} name='picature2' id='5' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'   onChange={getValue} name='picature3' id='6' />
    </div>

    <div class="input_field">
    <input type='file' required  className='input'   onChange={getValue} name='picature4' id='7'/>
    </div>

    <button className='button' onClick={handleSubmit} >Update Room</button>

    </div>
    </>
    );
}

export default FormUpdateRoom;