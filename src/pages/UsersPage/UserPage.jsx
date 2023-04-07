import React from 'react'
import './UserPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'

function UserPage() {
  return (
    <div className='userPage'>
      <Sidebar/>
      <div className='mainUserPage'><h1>This is User Page.</h1></div>
    </div>
  )
}

export default UserPage
