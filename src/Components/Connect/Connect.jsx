import React from 'react'
import './Connect.css'
import { useNavigate } from 'react-router-dom'
const Connect = () => {
    const navigate = useNavigate()
    const redirectToContact = ()=>{
        navigate('/contact')
        window.scrollTo(0, 0);
    }  
    return (
    <div className="connectContainer">
      <div className="connectBox">
        <h1 className="connectTitle">Let's Connect!</h1>
        <p className="connectSubtitle">Connect with our accounting professionals & get started today!</p>
        <button className="connectButton" onClick={redirectToContact}>Contact Us</button>
      </div>
    </div>
  )
}

export default Connect
