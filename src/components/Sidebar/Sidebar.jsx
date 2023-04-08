import React, { useEffect } from 'react'
import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Sidebar() {
  let location=useLocation();
  const isMenuOpened = useSelector(state => state.isOpened);
  const dispatch=useDispatch();

  const handleMenu = () => {
    // setMenuOpen(!menuOpen)
    dispatch({type:"TOGGLE_MENU"})
}

  return (
    <div className="sidebar">
        <div className={`${location.pathname==="/"?"active":""}`}><Link to="/" className={`${isMenuOpened?"normal":"closeIt"}`}><i className="fa-solid fa-house"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Dashboard</span></Link></div>

        <div className={`${location.pathname==="/uielements"?"active":""}`}><Link to="/uielements" className={`${isMenuOpened?"normal":"closeIt"}`}><i className="fa-solid fa-palette"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>UI Elements</span></Link></div>

        <div className={`${location.pathname==="/formselements"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/formselements"><i className="fa-solid fa-list"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Form Elements</span></Link></div>

        <div className={`${location.pathname==="/charts"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/charts"><i class="fa-solid fa-chart-pie"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Charts</span></Link></div>

        <div className={`${location.pathname==="/tables"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/tables"><i class="fa-solid fa-table-list"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Tables</span></Link></div>

        <div className={`${location.pathname==="/iconspage"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/iconspage"><i class="fa-solid fa-star"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Icons</span></Link></div>

        <div className={`${location.pathname==="/usersPage"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/usersPage"><i class="fa-solid fa-user"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>User Page</span></Link></div>

        <div className={`${location.pathname==="/documentation"?"active":""}`}><Link className={`${isMenuOpened?"normal":"closeIt"}`} to="/documentation"><i class="fa-solid fa-book"></i>&nbsp;<span className={`${isMenuOpened?"":"displayNone"}`}>Documnetation</span></Link></div>
      </div>
  )
}

export default Sidebar
