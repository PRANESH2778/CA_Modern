import React from 'react'
import './HomeImage.css'
import bgImage from '../../assets/background.jpg'
const HomeImage = () => {
  return (
      <div className="imageContainer">
        <img src={bgImage} alt="" className="imageStyle"/>
        <div className="detailSection">
            <p className="firstText">Welcome to Global Insights KPO</p>
            <p className="secondText">Accurate, Consistent and Quality Accounting Solutions</p>
            <p className="thirdText">Backed by a team of skilled professionals, Global Insights KPO is your trusted outsourcing partner, providing end-to-end accounting solutions designed to enhance accuracy, improve efficiency, and ensure compliance with accounting principles.</p>
            <button className="ctaBtn">Get Started</button>
        </div>
      </div>
  )
}

export default HomeImage