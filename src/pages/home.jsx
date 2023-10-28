import React, { useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';
import abuja from '../images/abuja.png';
import lagos from '../images/lagos.jpg';
import ph from '../images/ph.jpg';
import owerri from '../images/owerri.jpg';
import kano from '../images/kano.jpg';
import calabar from '../images/calabar.jpg';
import discount from '../images/discount.jpg';
import discoverImg1 from '../images/discoverImg-1.jpg';
import discoverImg2 from '../images/discoverImg-2.jpg';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
  


function Homepage() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
            delay: 300,
        });
    }, []);

    return(
        <div className="home">
            <div className="header">
                <Navbar />
                <div className="head-text">
                    <p>Find the Best Hotels in your city.</p>
                    <p>Welcome to our hotel booking platform, where your lodging experience becomes easier and more enjoyable. With our platform, you can discover the perfect accommodation for your stay within Nigeria.</p>
                </div>
                <div className="headIns" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                    <div className="form-group">
                        <label htmlFor=""> <span className="fa fa-map-marker"></span> Location</label>
                        <input type="" className="form-control" placeholder="Enter Location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> <span className="fa fa-user"></span> Guest</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor=""> <span className="fa fa-calendar"></span> Check-In/Out</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-success">Search <span className="fa fa-search"></span></button>
                    </div>
                </div>
            </div>

            <div className="roomDeals" data-aos="fade-up" data-aos-once="true">
                <p style={{fontSize: '35px', fontWeight: '600'}}>Explore Exciting Room Deals</p>
                <div className="roomSpec">
                    <div className="roomImgs">
                        <div className="firstImg">
                            <img src={room1} alt="" style={{maxWidth: '100%'}} />
                        </div>
                        <div className="secondImg">
                            <img src={room2} alt="" />
                        </div>
                        <div className="thirdImg">
                            <img src={room3} alt="" />
                        </div>
                        <div className="fourthImg">
                            <img src={room2} alt="" />
                        </div>
                    </div>
                    <div className="roomDesc">
                        <p style={{fontSize: '30px', fontWeight: '600'}}>Savannah Luxury Hotel</p>
                        <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span>
                        <p>Musa Abba Close, Wuse 2 Abuja</p>
                        <p style={{color: 'Red', maxWidth: '100%'}}>__________________________________</p>
                        <p>Each hotel has been meticulously reviewed and awarded high by discerning travellers like you.</p>
                        <p>So, let us introduce you to some of the finest establishments that have cnsistently delivered exceptional service, luxury ameniities, and a remarkable overall experience</p>
                        <button className="btnRoom">Explore More</button>
                    </div>
                </div>
            </div>

            <div className="ourLocation" data-aos="fade-up" data-aos-once="true">
                <p style={{fontSize: '35px', fontWeight: '600'}}>Popular Locations</p>
                <div className="locations">
                    <div>
                        <img src={abuja} alt="" />
                        <p>Abuja</p>
                    </div>
                    <div>
                        <img src={lagos} alt="" />
                        <p>Lagos</p>
                    </div>
                    <div>
                        <img src={ph} alt="" />
                        <p>Port Harcourt</p>
                    </div>
                    <div>
                        <img src={owerri} alt="" />
                        <p>Owerri</p>
                    </div>
                    <div>
                        <img src={kano} alt="" />
                        <p>Kano</p>
                    </div>
                    <div>
                        <img src={calabar} alt="" />
                        <p>Calabar</p>
                    </div>
                </div>
                {/* <button className="locateBtn">See More</button> */}
                <button className="btn btn-outline-success btn-sm">See More <span className="fa fa-caret-right"></span></button>
            </div>

            <div className="discount">
                <div>
                    <img src={discount} alt="" />
                </div>
                <div className="discountText" data-aos="fade-left">
                    <p className="discountHeadText">Stay Longer, Save More</p>
                    <p>Elegant and Comfortable rooms available at affordable rates.</p>
                    <p>These rooms have queen sized beds, private bathrooms with a hairdryer. 
                        They also have flat screen TVs, safety deposit boxes, free wifi  and free breakfast through out your stay.</p>

                    <div className="percentDiscount">
                        <p className="fifteenPercent">
                            Get <br /> <span>15%</span> Discount <br /> Stay 2 nights or More
                        </p>
                        <p>
                            Get <br /> <span>25%</span> Discount <br /> Stay 4 nights or more
                        </p>
                    </div>

                    <p className="offerDiscount"><span>*</span> Offer available until October 31st, 2023  </p>

                </div>
            </div>

            <div className="discovery">
                <div className="discoveryText" data-aos="zoom-out">
                    <p style={{fontSize: '35px', fontWeight: '600'}}>Discover More Top Rated <br /> Hotels in Nigeria</p>
                    <p>These top rated hotels have been chosen for their exceptional quality, impeccable service, and extraordinary attention to detail.</p>
                    <p>Whether you're seeking a romantic getaway, a family-friendly retreat, or a luxurious business stay, you can trustthat these establishments will exceed your expectations.</p>
                    <button className="discoveryBtn">Discover More</button>
                </div>
                <div className="discoveryImgs">
                    <div className="disImg-1"><img src={discoverImg1} alt="" /></div>
                    <div className="disImg-2"><img src={discoverImg2} alt="" /></div>
                </div>
            </div>

            <div className="newsletter">
                <div>
                    <p style={{fontSize: '30px', fontWeight: '600'}}>Newsletter <br /> <span style={{fontSize: '20px', fontWeight: '500'}}>Stay up to date</span></p>
                </div>
                <form className="newsletterForm" action="">
                    <div>
                        <input type="text" placeholder="Your Email........." />
                    </div>
                    <div>
                        <span className="fa fa-telegram fa-2x"></span>
                    </div>
                </form>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;