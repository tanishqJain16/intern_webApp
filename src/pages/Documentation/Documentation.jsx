import React from 'react'
import './Documentation.css'
import Sidebar from '../../components/Sidebar/Sidebar';

function Documentation() {
  return (
    <div className='documentation'>
      <Sidebar/>
      <div className='mainDocumentation'><h1>This is Documentation Page.</h1></div>
    </div>
  )
}

export default Documentation;
