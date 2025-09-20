import React from 'react'
import './HomeImage.css'
import bgImage from '../../assets/background.jpg'

const HomeImage = () => {
  return (
    <div className="imageContainer">
      <img src={bgImage} alt="" className="imageStyle"/>
      <div className="detailSection">
        <h1 className="mainHeading">Welcome to Global Insights KPO</h1>
        <h2 className="subHeading">Accurate, Consistent and Quality Accounting Solutions</h2>
        <p className="description">
          Backed by a team of skilled professionals, Global Insights KPO is your trusted outsourcing partner, 
          providing end-to-end accounting solutions designed to enhance accuracy, improve efficiency, and ensure 
          compliance with accounting principles.
        </p>
        <button className="ctaButton">Get Started</button>
      </div>
    </div>
  )
}

export default HomeImage