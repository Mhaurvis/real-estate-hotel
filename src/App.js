import './App.css';
import {Routes, Route } from "react-router-dom"
import Homepage from './pages/home';
import Booking from './pages/bookHotel';
import Support from './pages/support';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/booking' element={<Booking />}></Route>
      <Route path='/support' element={<Support />}></Route>
    </Routes>
  );
}

export default App;
