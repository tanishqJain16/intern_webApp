import React from 'react'
import "./Home.css"

function Home() {
  if(!localStorage.getItem('token')){
    window.location.href = "/login";
  }
  return (
    <div className='home'>
      This is Home page
    </div>
  )
}

export default Home
