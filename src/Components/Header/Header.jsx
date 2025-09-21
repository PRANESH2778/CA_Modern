import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">GLOBAL INSIGHTS KPO</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About Us</a>
          
          {/* Services Dropdown */}
          <div className="dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button className="nav-link dropdown-toggle">
              Services Offered
              <span className="dropdown-arrow">▼</span>
            </button>
            {isServicesOpen && (
              <div className="dropdown-menu">
                <a href="/services/business-owners" className="dropdown-item">For Business Owners</a>
                <a href="/services/cpa-bookkeeping" className="dropdown-item">For CPA & Bookkeeping Firm</a>
              </div>
            )}
          </div>

          <a href="/engagement-model" className="nav-link">Engagement Model</a>
          <a href="/work-methodology" className="nav-link">Work Methodology</a>
          <a href="/career" className="nav-link">Career</a>
          <a href="/blogs" className="nav-link">Blogs</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button">Schedule a Call</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="/" className="mobile-nav-link" onClick={toggleMenu}>Home</a>
          <a href="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</a>
          
          {/* Mobile Services Dropdown */}
          <div className="mobile-dropdown">
            <button className={`mobile-dropdown-toggle ${isServicesOpen ? 'active' : ''}`} onClick={toggleServices}>
              Services Offered
              <span className="mobile-dropdown-arrow">▼</span>
            </button>
            {isServicesOpen && (
              <div className="mobile-dropdown-menu">
                <a href="/services/business-owners" className="mobile-dropdown-item" onClick={toggleMenu}>For Business Owners</a>
                <a href="/services/cpa-bookkeeping" className="mobile-dropdown-item" onClick={toggleMenu}>For CPA & Bookkeeping Firm</a>
              </div>
            )}
          </div>

          <a href="/engagement-model" className="mobile-nav-link" onClick={toggleMenu}>Engagement Model</a>
          <a href="/work-methodology" className="mobile-nav-link" onClick={toggleMenu}>Work Methodology</a>
          <a href="/career" className="mobile-nav-link" onClick={toggleMenu}>Career</a>
          <a href="/blogs" className="mobile-nav-link" onClick={toggleMenu}>Blogs</a>
          <a href="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact Us</a>
          
          <button className="mobile-cta-button" onClick={toggleMenu}>Schedule a Call</button>
        </div>
      )}
    </header>
  );
};

export default Header;