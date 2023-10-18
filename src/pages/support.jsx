import React, { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import support from '../images/support.jpg';
import Footer from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/support.css';

function Support(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="support">
            <div className={`mySupport ${isOpen ? 'open' : ''}`}>
            <div className='supportBrand'>
                <img src={logo} width={110} height={130} alt="" />
            </div>

            <div className={`supportLinks ${isOpen ? 'open' : ''}`}>
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
                        <Link to='/signin'><button className="support-button signin resBtn">Sign In</button></Link> 
                    </li>
                    <li>
                        <Link to='/register'><button className="support-button register resBtn">Register</button></Link>
                    </li>
                </ul>
            </div>

            <div className="supportButtons">
                   <Link to='/signin'><button className="support-button signin">Sign In</button></Link> 
                   <Link to='/register'><button className="support-button register">Register</button></Link>
            </div>

            <div className="support-toggle">
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleNavbar}></span>
            </div>
            </div>


            <div className="supportBody">
                <div className="supportCustomer">
                    <p style={{fontSize: '30px', fontWeight: '600'}}>Customer Support</p>
                    <p>Welcome to our Customer Support! We are here to assist you and ensure that your bookings are nothing short of exceptional.</p>
                    <p>Our dedicated team is ready to answer your questions, address any concerns, and provide the assistance you need. Feel free to reach out to us via the following channels</p>
                    <p style={{fontWeight: '600'}}><span className="fa fa-phone"></span> +234 907 067 6819</p>
                    <p style={{fontWeight: '600'}}><span className="fa fa-envelope"></span> realestatehotels@gmail.com</p>
                </div>
                <div className="supportImg">
                    <img src={support} alt="" />
                </div>
            </div>

            <div>
                <p style={{textAlign: 'center', fontSize: 'smaller', padding: '2em', display: 'flex', justifyContent: 'center'}}>All rights Reserved &copy; 2023 Designed by Maurice</p>
            </div>
        </div>
    )
}

export default Support;