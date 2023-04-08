import React, { useState } from 'react'
import "./ForgotPassword.css"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate=useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [creds, setCreds] = useState({ email: "", password: "", newpassword: "" })
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        setBtnDisabled(true);
        const { email, password, newpassword } = creds;
        const response = await fetch("http://localhost:5000/auth/resetpassword", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                newpassword
            }),
        });
        const json = await response.json();
        setBtnDisabled(false);
        if (json.success) {
            toast.success("Password Reset Successfully");
            navigate("/login");
            // window.location.href = "/";
        } else {
            toast.error(json.message);
        }
    }

  return (
    
    <div className="card1">
    <div className="resetpasswordform">
        <h1>Reset Password</h1>
        <div>
            <label className='email' htmlFor="email">EMAIL</label>
            <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
            <label className='password' htmlFor="password">PASSWORD</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
            <label className='password' htmlFor="password">NEW PASSWORD</label>
            <input type="password" name="newpassword" id="newpassword" placeholder="Enter your new password" onChange={handleChange}/>
            <button className="resetbutton" disabled={btnDisabled} onClick={handlesubmit}>Submit</button>
            {/* <div className="extraDetails">
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
            </div> */}
            {/* <div className="notamember">Not a Member? <Link to="/signup">SignUp</Link></div> */}
        </div>
    </div>
</div>
  )
}

export default ForgotPassword
