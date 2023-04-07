import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import SmallCard from '../../components/SmallCard/SmallCard'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import BigCard from '../../components/BigCard/BigCard'
import BarChart from '../../components/BarChart/BarChart'

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
      {/* <div className="sidebar">
        <div><Link to="/" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf015; Dashboard</Link></div>
        <div><Link to="/uielements" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf53f; UI Elements</Link></div>
        <div><Link to="/formselements" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf03a; Form Elements</Link></div>
        <div><Link to="/charts" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf200; Charts</Link></div>
        <div><Link to="/tables" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf00b; Tables</Link></div>
        <div><Link to="/iconspage" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf005; Icons</Link></div>
        <div><Link to="/usersPage" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf007; User Pages</Link></div>
        <div><Link to="/documentation" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf02d; Documentation</Link></div>
      </div> */}
      <Sidebar/>
      <div className="main">
        <div className="firstRow">
          <h2> RoyalUI Dashboard</h2>
          <button className="logout" style={{ fontFamily: "Arial, FontAwesome" }} onClick={handleLogout} disabled={btnDisabled}>&#xf2f5; Logout</button>
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
