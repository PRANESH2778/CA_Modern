import React from 'react'
import './AboutSection.css';
import aboutImg from '../../assets/about.jpg'
const AboutSection = () => {
  return (
    <section className="aboutSection">   
        <div className="aboutWrapper">
            <div className="aboutContent">
            <h2 className="sectionTitle">Firm's Introduction</h2>
            <p>Global Insights KPO is an Outsourced Accounting & Consultancy firm dedicated to provide comprehensive accounting and bookkeeping solutions to the businesses along with back-Office support to the accounting firms and CPA firms globally. With a proven track record and a passion for financial excellence, we take pride in helping our clients thrive in the ever-evolving world of finance with a focus on quality and affordability.</p>
            <p>With a team of Qualified Professionals, graduates, and other experienced professionals, we use the latest technology and best practices, so that you can rest assured that your accounts are in perfect hands. Our team comprises professionals who have worked previously with Big4s and Fortune 500 companies, delivering quality and accruacy beyond your expectations.</p>
            <p>Our primary emphasis is on delivering exceptional quality at affordable rates, aiming to reduce your accounting expenses by 60% to 70%.</p>
        </div>
        <div className="aboutImage">
            <img src={aboutImg} alt="" />
        </div>
        
    </div>
    </section>
    
  )
}

export default AboutSection