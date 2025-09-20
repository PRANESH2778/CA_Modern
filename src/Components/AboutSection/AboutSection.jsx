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
          <h2 className="intro-title">Firm’s Introduction</h2>
          <p>
            Global Insights KPO is an outsourced Accounting & Consultancy firm
            dedicated to provide comprehensive accounting and bookkeeping
            solutions to the businesses along with back-office support to the
            accounting firms and CPA firms globally. With a proven track record
            and a passion for financial excellence, we take pride in helping our
            clients thrive in the ever-evolving world of finance with a focus on
            quality and affordability.
          </p>
          <p>
            With a team of Qualified Professionals, graduates, and other
            experienced professionals, we use the latest technology and best
            practices, so that you can rest assured that your accounts are in
            perfect hands. Our team comprises professionals who have worked
            previously with Big4s and Fortune 500 companies, delivering quality
            and accuracy beyond your expectations.
          </p>
          <p>
            Our primary emphasis is on delivering exceptional quality at
            affordable rates, aiming to reduce your accounting expenses by 60%
            to 70%.
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