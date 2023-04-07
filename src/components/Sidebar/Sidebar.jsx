import React from 'react'
import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  let location=useLocation();
  return (
    <div className="sidebar">
        <div className={`${location.pathname==="/"?"active":""}`}><Link to="/" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf015; Dashboard</Link></div>
        <div className={`${location.pathname==="/uielements"?"active":""}`}><Link to="/uielements" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf53f; UI Elements</Link></div>
        <div className={`${location.pathname==="/formselements"?"active":""}`}><Link to="/formselements" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf03a; Form Elements</Link></div>
        <div className={`${location.pathname==="/charts"?"active":""}`}><Link to="/charts" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf200; Charts</Link></div>
        <div className={`${location.pathname==="/tables"?"active":""}`}><Link to="/tables" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf00b; Tables</Link></div>
        <div className={`${location.pathname==="/iconspage"?"active":""}`}><Link to="/iconspage" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf005; Icons</Link></div>
        <div className={`${location.pathname==="/usersPage"?"active":""}`}><Link to="/usersPage" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf007; User Pages</Link></div>
        <div className={`${location.pathname==="/documentation"?"active":""}`}><Link to="/documentation" style={{ fontFamily: "Arial, FontAwesome" }}>&#xf02d; Documentation</Link></div>
      </div>
  )
}

export default Sidebar
