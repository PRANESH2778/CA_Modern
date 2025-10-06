import React from 'react'
import './HomeImage.css'
import bgImage from '../../assets/background.jpg'

const HomeImage = () => {
  return (
    <div className="imageContainer">
      <img src={bgImage} alt="" className="imageStyle"/>
      <div className="detailSection">
        <h1 className="mainHeading">Welcome to Accusource Global Advisors Private Limited</h1>
        <h2 className="subHeading">Accurate, Consistent and Quality Accounting Solutions</h2>
        <p className="description">
          At Accusource, we simplify complex numbers and transform financial data into meaningful insights. As a trusted partner for global businesses, we specialize in
Financial Reporting, Data Analysis, Bookkeeping, and Tax Consultancy
with a focus on accuracy, transparency, and growth.
        </p>
        <button className="ctaButton">Get Started</button>
      </div>
    </div>
  )
}

export default HomeImage