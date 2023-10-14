import './App.css';
import {Routes, Route } from "react-router-dom"
import Homepage from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
