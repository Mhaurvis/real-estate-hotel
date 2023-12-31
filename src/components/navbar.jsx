import React, { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`myNavbar ${isOpen ? 'open' : ''}`}>
            <div className='navBrand'>
                <a href="/">
                     <img src={logo} width={110} height={130} alt="" />
                </a>
            </div>

            <div className={`navLinks ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/booking'>Bookings</Link>
                    </li>
                    <li>
                        <Link to='/support'>Supports</Link>
                    </li>
                    <li>
                        <Link to='/signin'><button className="nav-button signin resBtn">Sign In</button></Link> 
                    </li>
                    <li>
                        <Link to='/register'><button className="nav-button register resBtn">Register</button></Link>
                    </li>
                </ul>
            </div>

            <div className="navButtons">
                   <Link to='/signin'><button className="nav-button signin">Sign In</button></Link> 
                   <Link to='/register'><button className="nav-button register">Register</button></Link>
            </div>

            <div className="navbar-toggle">
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleNavbar}></span>
            </div>
            
        </div>
    )
};

export default Navbar;