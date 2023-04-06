import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'

function Home() {
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" })

  const getCurrentUser = () => {
    // fetch("http://localhost:5000/auth/getuser", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
    //   },
    // }).then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //     if (json.success) {
    //       setCurrentUser({username:json.username,email:json.email})
    //     } else {
    //       alert(json.message);
    //     }
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    axios.get("http://localhost:5000/user/getuser",{ 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    }).then((response) => {
      console.log(response)
      if (response.data.success) {
        setCurrentUser({ username: response.data.user.username, email: response.data.user.email })
      }
      else {
        alert(json.message);
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  useEffect(() => {
    getCurrentUser();
  }, [])



  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }
  if (!localStorage.getItem('token')) {
    window.location.href = "/login";
  }
  return (
    <div className='home'>
      <h1>This is Home page {`${currentUser.username}`}</h1>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
