import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import sign from '../images/sign.jpg';
import google from '../images/google.png';
import '../styles/signIn.css';

function SignIn(){
    return(
        <div className="signHere">
            <div className="signText">
                <a href="/">
                     <img src={logo} width={110} height={130} alt="" />
                </a>
                <p style={{fontSize: '30px', fontWeight: '600'}}>Welcome Back!</p>
                <button className="form-control"> <img src={google} alt="" width={30} height={30} /> Login with Google</button>
                <div className="hr-demarcation">
                    <div className="left-hr"></div>
                    <span>OR</span>
                    <div className="right-hr"></div>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="signRemember">
                    <div><input type="checkbox" style={{marginRight: '2px'}} />Remember Password</div>
                    <div><a href="">Forgot Password</a></div>
                </div>
                <button style={{marginTop: '10px', backgroundColor: 'darkslategray', color: 'white'}} className="form-control">Login</button>
                <p style={{marginTop: '10px'}}>Dont have an account? <Link to="/register" style={{color: 'rgb(211, 152, 4)'}}>Sign Up</Link></p>
            </div>
            <div className="signImg">
                <img src={sign} alt="" style={{width: '100%', height: '100vh'}} />
            </div>
        </div>
    )
}

export default SignIn;