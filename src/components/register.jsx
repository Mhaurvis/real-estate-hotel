import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import sign from '../images/sign.jpg';
import google from '../images/google.png';
import '../styles/register.css';

function Register(){
    return(
        <div className="registerHere">
             <div className="registerText">
                <img src={logo} alt="" width={110} height={130} />
                <p style={{fontSize: '30px', fontWeight: '600'}}>Register Here!</p>
                <p>This information will be used to create your account.</p>
                <button className="form-control"> <img src={google} alt="" width={30} height={30} /> Signup with Google</button>
                <div className="hr-demarcation">
                    <div className="left-hr"></div>
                    <span>OR</span>
                    <div className="right-hr"></div>
                </div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" className="form-control" />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="registerRemember">
                    <div><input type="checkbox" style={{marginRight: '2px'}} />Remember Password</div>
                    <div><a href="">Forgot Password</a></div>
                </div>
                <button style={{marginTop: '10px', backgroundColor: 'darkslategray', color: 'white'}} className="form-control">Sign In</button>
                <p style={{marginTop: '10px'}}>Dont have an account? <Link to="/signin" style={{color: 'rgb(211, 152, 4)'}}>Login</Link></p>
            </div>
            <div className="registerImg">
                <img src={sign} alt="" style={{width: '100%', height: '100%'}} />
            </div>
        </div>
    );
};

export default Register;