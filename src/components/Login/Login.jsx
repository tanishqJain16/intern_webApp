import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../../assets/images/sign-up.jpg'
import './Login.css'

function Login() {
    const [creds, setCreds] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = creds;
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem("token", json.accessToken);
            // console.log(json.authtoken)
            window.location.href = "/";
        } else {
            alert(json.message);
        }
    }

    return (
        <div className="card">
            <div className="signinImg">
                <img src={signupImg} alt="" />
            </div>
            <div className="signinForm">
                <h1>Sign In</h1>
                <div>
                    <label className='email' htmlFor="email">EMAIL</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
                    <label className='password' htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
                    <button className="signinbtn" onClick={handlesubmit}>signin</button>
                    <div className="extraDetails">
                        <div className="rememberMecheck">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                value="rememberMe"
                            />
                            <label htmlFor="rememberMe"> Remember Me</label>
                        </div>
                        <div className="forgotPassword">
                            <Link to="/resetpassword">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="notamember">Not a Member? <Link to="/signup">SignUp</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login
