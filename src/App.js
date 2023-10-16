import './App.css';
import {Routes, Route } from "react-router-dom"
import Homepage from './pages/home';
import Booking from './pages/bookHotel';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/booking' element={<Booking />}></Route>
    </Routes>
  );
}

export default App;
