import React from 'react'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const handleMailClick = () => {
    // Open default email client with pre-filled subject
    window.location.href = 'mailto:info@globalinsightskpo.com?subject=Inquiry from Website&body=Hello, I would like to know more about your accounting services.'
  }

  const handleWhatsAppClick = () => {
    // Open WhatsApp with pre-filled message
    const phoneNumber = '+1234567890' // Replace with your actual WhatsApp number
    const message = 'Hello! I would like to know more about your accounting services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="floating-buttons">
      <div className="mail-button" onClick={handleMailClick}>
        <div className="mail-icon">✉</div>
        <span className="mail-text">Mail</span>
      </div>
      
      <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <div className="whatsapp-icon">💬</div>
      </div>
    </div>
  )
}

export default FloatingButtons
