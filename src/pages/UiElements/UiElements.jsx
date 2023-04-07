import React from 'react'
import './UiElements.css'
import Sidebar from '../../components/Sidebar/Sidebar';

function UiElements() {
  return (
    <div className='uiElements'>
      <Sidebar/>
      <div className='mainUiElements'><h1>This is UI Elements Page.</h1></div>
    </div>
  )
}

export default UiElements;