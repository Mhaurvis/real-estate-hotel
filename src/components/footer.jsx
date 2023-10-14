import React from "react";
import '../styles/footer.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer(){
    return(
        <div className="footer">
            <div>
                <p>COMPANY</p>
                <p><a href="">About Us</a></p>
                <p><a href="">Legal Information</a></p>
                <p><a href="">Contact Us</a></p>
                <p><a href="">Blogs</a></p>
            </div>
            <div>
                <p>HELP CENTER</p>
                <p><a href="">Find a Hotel</a></p>
                <p><a href="">How to Join us</a></p>
                <p><a href="">Why Us</a></p>
                <p><a href="">FAQs</a></p>
                <p><a href="">Booking Guides</a></p>
            </div>
            <div>
                <p>CONTACT INFO</p>
                <p>Phone: +234 907 067 8619</p>
                <p>Email: krizzymax12@gmail.com</p>
                <span className="fa fa-facebook-square"></span><span className="fa fa-twitter"></span><span className="fa fa-instagram"></span><span className="fa fa-linkedin"></span>
            </div>
        </div>
    );
};

export default Footer;