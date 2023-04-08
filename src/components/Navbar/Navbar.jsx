import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/royalUI-logo.png'
import logo2 from '../../assets/images/royalUI-mini-logo.png'
import profile from '../../assets/images/profile.png'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '@mantine/core'

function Navbar() {
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

    const messageModalToggle = () => {
        setIsMessageModalOpen(!isMessageModalOpen);
    }

    const notificationModalToggle = () => {
        setIsNotificationModalOpen(!isNotificationModalOpen);
    }

    const profileModalToggle = () => {
        setIsProfileModalOpen(!isProfileModalOpen);
    }

    const isMenuOpened = useSelector(state => state.isOpened)
    const dispatch = useDispatch();
    // const [menuOpen, setMenuOpen] = useState(true)
    const handleMenu = () => {
        // setMenuOpen(!menuOpen)
        dispatch({ type: "TOGGLE_MENU" })
    }
    const token = localStorage.getItem("token");
    return (
        <div className={`${token ? "navbar" : "navbarNone"}`}>
            <Modal
				className="mainModal"
				opened={isMessageModalOpen}
				onClose={messageModalToggle}
				title={<h2 className="messageHeading">Message Modal</h2>}
			>
                Here comes all the messages.
            </Modal>
            <Modal
				className="mainModal"
				opened={isNotificationModalOpen}
				onClose={notificationModalToggle}
				title={<h2 className="notificationHeading">Notification Modal</h2>}
			>
                Here comes all the notification.
            </Modal>
            <Modal
				className="mainModal"
				opened={isProfileModalOpen}
				onClose={profileModalToggle}
				title={<h2 className="profileHeading">My Profile</h2>}
			>
                <img className='modalImage' src={profile} style={{ width: "15rem" }} alt="" />
            </Modal>
            <div className={`${isMenuOpened ? "logo" : "closedLogo"}`}>
                <img src={isMenuOpened ? logo : logo2} alt="logo" />
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
                    <i className="fa-regular fa-envelope fa-lg" onClick={messageModalToggle}></i>
                    <i class="fa-regular fa-bell fa-lg" onClick={notificationModalToggle}></i>
                    <div className="profilePic" onClick={profileModalToggle}>
                        <img src={profile} style={{ width: "40px" }} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
