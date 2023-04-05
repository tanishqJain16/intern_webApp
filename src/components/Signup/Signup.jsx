import React from 'react'
import './Signup.css'
import signupImg from '../../assets/images/sign-up.jpg'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className="card">
            <div className="signupImg">
                <img src={signupImg} alt="" />
            </div>
            <div className="signupForm">
                <h1>Sign Up</h1>
                <div>
                    <label className='name' htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                    <label className='username' htmlFor="username">USERNAME</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" />
                    <label className='password' htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <label className='phnumber' htmlFor="phnumber">CONTACT NUMBER</label>
                    <input type="number" name="phNumber" id="phNumber" placeholder="Enter your contact number" />
                    <button className="signupbtn">SignUp</button>
                    <div className="alreadyamember">Already a Member? <Link to="/login">SignIn</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
