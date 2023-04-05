import React from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../../assets/images/sign-up.jpg'
import './Login.css'

function Login() {
  return (
    <div className="card">
            <div className="signinImg">
                <img src={signupImg} alt="" />
            </div>
            <div className="signinForm">
                <h1>Sign In</h1>
                <div>
                    <label className='username' htmlFor="username">USERNAME</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" />
                    <label className='password' htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <button className="signinbtn">signin</button>
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
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="notamember">Not a Member? <Link to="/signup">SignUp</Link></div>
                </div>
            </div>
        </div>
  )
}

export default Login
