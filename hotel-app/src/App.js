import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import AllHotels from './pages/AllHotels';
import UpdateHotel from './pages/UpdateHotel';
import NewHotels from './pages/NewHotel';
import FormNewRoom from './components/FormNewRoom';
import FormUpdateRoom from './components/FormUpdateRoom';
import Employees from './pages/Employees';
import Employees_In_One_Hotel from './pages/Employees-In-One-Hotel';
import SelectedRoom from './pages/SelectedRoom';
import Home from './pages/Home';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<AdminHome/>}></Route>
      <Route path='/allhotels' element={<AllHotels/>}></Route>
      <Route path='/newhotel' element={<NewHotels/>}></Route>
      <Route path='/updatehotel' element={<UpdateHotel/>}></Route>
      <Route path='/newroom' element={<FormNewRoom/>}></Route>
      <Route path='/updateroom' element={<FormUpdateRoom/>}></Route>
      <Route path='/employees' element={<Employees/>}></Route>
      <Route path='/employees_in_one_hotel' element={<Employees_In_One_Hotel/>}></Route>
      <Route path='/room' element={<SelectedRoom/>}></Route>
    </Routes>
  </Router>

   </>
  );
}

export default App;