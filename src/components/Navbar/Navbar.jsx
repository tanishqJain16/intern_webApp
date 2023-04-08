import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/royalUI-logo.png'
import logo2 from '../../assets/images/royalUI-mini-logo.png'
import profile from '../../assets/images/profile.png'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    
  const isMenuOpened = useSelector(state => state.isOpened)
  const dispatch=useDispatch();
    // const [menuOpen, setMenuOpen] = useState(true)
    const handleMenu = () => {
        // setMenuOpen(!menuOpen)
        dispatch({type:"TOGGLE_MENU"})
    }
    return (
        <div className="navbar">
            <div className={`${isMenuOpened?"logo":"closedLogo"}`}>
                <img src={isMenuOpened?logo:logo2} alt="logo" />
            </div>
            <div className="navItems">
                <div className='navLeft'>
                    <div className="hamburger">
                        <i className="fa-solid fa-bars fa-lg image" onClick={handleMenu}></i>
                    </div>
                    <div className="searchBar">
                        <input type="text" style={{ fontFamily: "Arial, FontAwesome" }} placeholder="&#xf002; Search" />
                    </div>
                </div>
                <div className="navRight">
                    <i className="fa-regular fa-envelope fa-lg"></i>
                    <i class="fa-regular fa-bell fa-lg"></i>
                    <div className="profilePic">
                        <img src={profile} style={{ width: "40px" }} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
