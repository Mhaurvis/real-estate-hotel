import './App.css';
import {Routes, Route } from "react-router-dom"
import Homepage from './pages/home';
import Booking from './pages/bookHotel';
import Support from './pages/support';
import SignIn from './components/signIn';
import Register from './components/register';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/booking' element={<Booking />}></Route>
      <Route path='/support' element={<Support />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  );
}

export default App;
