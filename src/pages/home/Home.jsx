import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import SmallCard from '../../components/SmallCard/SmallCard'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import BigCard from '../../components/BigCard/BigCard'
import { toast } from 'react-hot-toast'

function Home() {
  const navigate=useNavigate();
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" })
  const [btnDisabled, setBtnDisabled] = useState(false)

  const getCurrentUser = () => {
    axios.get("https://intern-server.azurewebsites.net/user/getuser", {
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
    toast.success("Logout Successful");
    window.location.href = "/";
  }

  return (
    <div className='home'>
      <Sidebar/>
      <div className="main">
        <div className="firstRow">
          <h2> RoyalUI Dashboard</h2>
          <button className="logout" onClick={handleLogout} disabled={btnDisabled}><i className="fa-solid fa-right-from-bracket"></i>&nbsp;<span className="dontDisplay">Logout</span></button>
        </div>
        <div className="secondrow">
          <SmallCard smallHeading={"SALES"} count={32435} icon={"fa-regular fa-calendar"} percent={0.33} days={80}/>
          <SmallCard smallHeading={"REVENUE"} count={21230} icon={"fa-solid fa-user"} percent={0.28} days={70}/>
          <SmallCard smallHeading={"DOWNLOADS"} count={45736} icon={"fa-solid fa-download"} percent={13.6} days={90}/>
          <SmallCard smallHeading={"RETURNS"} count={64792} icon={"fa-solid fa-copy"} percent={55.1} days={85}/>
        </div>
        <div className="thirdrow">
          <BigCard heading={"SALES DETAILS"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga est eligendi dolorum consequatur eveniet, itaque quae, doloribus error asperiores autem. Odit mollitia eius eligendi repellendus dicta asperiores quia pariatur."} chart={"bar"}/>
          <BigCard heading={"PURCHASES"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fuga est eligendi dolorum consequatur eveniet, itaque quae, doloribus error asperiores autem. Odit mollitia eius eligendi repellendus dicta asperiores quia pariatur."}/>
        </div>
      </div>
    </div>
  )
}

export default Home
