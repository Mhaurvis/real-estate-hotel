import React, { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setOverlayVisible(!isOverlayVisible);
    };

    return(
        <div className={`myNavbar ${isOpen ? 'open' : ''}`}>
            <div className='navBrand'>
                <img src={logo} width={120} height={150} alt="" />
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
                        <button className="nav-button signin resBtn">Sign In</button>
                    </li>
                    <li>
                        <button className="nav-button register resBtn">Register</button>
                    </li>
                </ul>
            </div>

            <div className="navButtons">
                    <button className="nav-button signin">Sign In</button>
                    <button className="nav-button register">Register</button>
            </div>

            <div className="navbar-toggle">
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleNavbar}></span>
            </div>
            
        </div>
    )
};

export default Navbar;