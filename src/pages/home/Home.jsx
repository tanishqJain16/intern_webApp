import React from 'react'
import "./Home.css"

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/login";
  }
  if (!localStorage.getItem('token')) {
    window.location.href = "/login";
  }
  return (
    <div className='home'>
      <h1>This is Home page</h1>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
