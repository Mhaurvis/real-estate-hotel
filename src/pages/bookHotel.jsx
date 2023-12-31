import React, { useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import booking from '../images/booking.jpg';
import '../styles/bookHotel.css';

function Booking(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="bookHotel">
 <div className={`booking ${isOpen ? 'open' : ''}`}>
            <div className='bookingBrand'>
            <a href="/">
                     <img src={logo} width={110} height={130} alt="" />
                </a>
            </div>

            <div className={`bookingLinks ${isOpen ? 'open' : ''}`}>
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

            <div className="myUser">
                <div className="booking-toggle">
                    <span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleNavbar}></span>
                </div>
                <div>
                    <span className="fa fa-user-circle fa-2x" style={{color: 'black'}}></span>
                </div>
            </div>

            </div>

           <div className="bookingText">
                <p>Get Information</p>
                <p>Please fill out the  following details to complete your hotel booking check-out</p>
           </div>

           <div className="letsBook">
                <div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Name <span className="fa fa-user"></span> :</label>
                            <input type="text" className="form-control" placeholder="start with a title.. eg Mr, Miss, Dr, Engr etc"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email <span className="fa fa-envelope"></span> :</label>
                            <input type="text" className="form-control" placeholder="eg *******@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone Number <span className="fa fa-phone"></span> :</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <input type="checkbox" /> By signing up, you agree to our <a href="" style={{textDecoration: 'none', color: 'rgb(211, 152, 4)'}}> Terms & Privacy Policy </a>
                        </div>
                    </form>
                </div>
                
                <div>
                    <div className="myDeluxe">
                        <div className="deluxeSuite">
                            <img src={booking} alt="" width={150} height={100} />
                            <div className="deluxeSuiteHeadText">
                                <p>Exclusive Deluxe & Hotel Suite</p>
                                <p>Mo Sandie Crescent, Garki - Abuja</p>
                            </div>
                        </div>
                        <hr />
                        <div className="suiteCheck">
                            <div>
                                <p>Check-In/Check-Out</p>
                                <input type="date" />
                            </div>
                            <div>
                                <p>Guest(s)</p>
                                <input type="range" />
                            </div>
                        </div>
                        <hr />
                        <div className="deluxeRooms">
                            <div>
                                <p>Deluxe Room</p>
                            </div>
                            <div>
                                <p>$1750</p>
                                <p>Per Night</p>
                                <p className="bookBtn">Select Room</p>
                            </div>                       
                        </div>
                        <hr />
                        <div className="deluxeRoomss">
                        <div>
                                <p>Exclusive Room</p>
                            </div>
                            <div>
                                <p>$3250</p>
                                <p>Per Night</p>
                                <p className="bookBtn">Select Room</p>
                            </div>    
                        </div>
                    </div>

                    <p>Total $0</p>
                    <a style={{color: 'red'}} href="">View more room options</a>
                    <button className="form-control optionBtn pay"> Pay Now</button>
                    <button className="form-control optionBtn hold">Book on Hold</button>

                </div>
           </div>

           <div>
                <p style={{textAlign: 'center', fontSize: 'smaller', padding: '2em', display: 'flex', justifyContent: 'center'}}>All rights Reserved &copy; 2023 Designed by Maurice</p>
            </div>

        </div>
    )
};

export default Booking;