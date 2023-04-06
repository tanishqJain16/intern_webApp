import React, { useState } from 'react'
import "./ForgotPassword.css"

function ForgotPassword() {
    const [creds, setCreds] = useState({ email: "", password: "", newpassword: "" })
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
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
        console.log(json);
        if (json.success) {
            alert("Password Reset Successfully")
            window.location.href = "/";
        } else {
            alert(json.message);
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
            <button className="resetbutton" onClick={handlesubmit}>Submit</button>
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
