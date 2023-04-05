import React, { useState } from 'react'
import './Signup.css'
import signupImg from '../../assets/images/sign-up.jpg'
import { Link } from 'react-router-dom'

function Signup() {
    const [creds, setCreds] = useState({ email: "", username:"", password: "", phNumber: "" })
    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handleSignin = async (e) => {
        e.preventDefault();
        const { email, username, password, phNumber } = creds;
        const response = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
                phNumber,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            window.location.href = "/";
        } else {
            alert(json.message);
        }
    }

    return (
        <div className="card">
            <div className="signupImg">
                <img src={signupImg} alt="" />
            </div>
            <div className="signupForm">
                <h1>Sign Up</h1>
                <div>
                    <label className='email' htmlFor="email">EMAIL</label>
                    <input type="text" name="email" id="name" required placeholder="Enter your email" onChange={onChange}/>
                    <label className='username' htmlFor="username">USERNAME</label>
                    <input type="text" name="username" id="username" required placeholder="Enter your username" onChange={onChange}/>
                    <label className='password' htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password" required placeholder="Enter your password" onChange={onChange}/>
                    <label className='phnumber' htmlFor="phnumber">CONTACT NUMBER</label>
                    <input type="number" name="phNumber" id="phNumber" required placeholder="Enter your contact number" onChange={onChange}/>
                    <button className="signupbtn" onClick={handleSignin}>SignUp</button>
                    <div className="alreadyamember">Already a Member? <Link to="/login">SignIn</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
