import React, { useState} from "react";
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css' ;

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`myNavbar ${isOpen ? 'open' : ''}`}>
            <div className="navbrand">
                <img src={logo1} width={100} height={120} alt="" />
                {/* <a href="navLogo">GeeHotel</a> */}
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
                </ul>
            </div>

            <div className="navButtons">
                    <button className="nav-button signin">Sign In</button>
                    <button className="nav-button register">Register</button>
            </div>

            <div className="navbar-toggle" onClick={toggleNavbar}>
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></span>
            </div>
            
        </div>
    )
};

export default Navbar;