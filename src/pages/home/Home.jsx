import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import SmallCard from '../../components/SmallCard/SmallCard'

function Home() {
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" })
  const [btnDisabled, setBtnDisabled] = useState(false)

  const getCurrentUser = () => {
    axios.get("http://localhost:5000/user/getuser", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    }).then((response) => {
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
    setBtnDisabled(true);
    localStorage.removeItem('token');
    setBtnDisabled(false);
    window.location.href = "/login";
  }
  if (!localStorage.getItem('token')) {
    window.location.href = "/login";
  }
  return (
    <div className='home'>
      <div className="sidebar">
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf015; Dashboard</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf53f; UI Elements</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf03a; Form Elements</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf200; Charts</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf00b; Tables</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf005; Icons</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf007; User Pages</div>
        <div style={{ fontFamily: "Arial, FontAwesome" }}>&#xf02d; Documentation</div>
      </div>
      <div className="main">
        <div className="firstRow">
          <h2> RoyalUI Dashboard </h2>
          <button className="logout" style={{ fontFamily: "Arial, FontAwesome" }} onClick={handleLogout} disabled={btnDisabled}>&#xf2f5; Logout</button>
        </div>
        <div className="secondrow">
          <SmallCard smallHeading={"SALES"} count={32435} icon={"fa-regular fa-calendar"} percent={0.33} days={80}/>
          <SmallCard smallHeading={"REVENUE"} count={21230} icon={"fa-solid fa-user"} percent={0.28} days={70}/>
          <SmallCard smallHeading={"DOWNLOADS"} count={45736} icon={"fa-solid fa-download"} percent={13.6} days={90}/>
          <SmallCard smallHeading={"RETURNS"} count={64792} icon={"fa-solid fa-copy"} percent={55.1} days={85}/>
        </div>
      </div>
    </div>
  )
}

export default Home
