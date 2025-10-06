import React from "react";
import "./AboutSection.css";
import { useNavigate } from "react-router-dom";
const AboutSection = () => {
  const navigate = useNavigate()
  const navigateToAbout = ()=>{
    navigate('/about')
    window.scrollTo(0, 0);
  }
  return (
    <section className="firm-intro">
      <div className="intro-container">
        {/* Left Content */}
        <div className="intro-text">
          <h2 className="intro-title">About Us</h2>
          <p>
            At AccuSource Global Advisors Private Limited, we go beyond traditional accounting. We are a tech-enabled, automation-driven financial advisory firm offering Bookkeeping, Financial Reporting, Tax Consultancy, and Data Analysis to businesses across the US, UK, and Canada.
          </p>
          <p>
            Our foundation lies in Chartered Accountancy expertise , but our strength is in embracing technology—leveraging cloud platforms, automation tools, and AI-driven insights to deliver faster, more accurate, and scalable solutions. With a commitment to transparency, efficiency, and innovation, we simplify compliance while helping our clients focus on what matters most—growth and decision-making. Whether you are looking to streamline operations, reduce costs, or gain deeper financial insights, AccuSource Global is your trusted partner for end-to-end financial solutions that drive growth and long-term success
          </p>
          

          <div className="btn-group">
            <button className="learn-btn" onClick={navigateToAbout}>Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="intro-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2620/2620615.png"
            alt="Finance illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;