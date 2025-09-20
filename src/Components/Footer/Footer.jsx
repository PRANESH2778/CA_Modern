import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & About */}
        <div className="footer-section about">
          <img
            src="/logo.png" // replace with your logo path
            alt="Global Insights KPO"
            className="footer-logo"
          />
          <p>
            Global Insights KPO provides precise and affordable accounting
            solutions for businesses worldwide.
          </p>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/engagement-model">Engagement model</a></li>
            <li><a href="/work-methodology">Work Methodology</a></li>
          </ul>
          <ul>
            <li><a href="/career">Career</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section - Certification */}
        <div className="footer-section certs">
          <h3>Certification</h3>
          <div className="cert-logos">
            <img src="/xero.png" alt="Xero" />
            <img src="/quickbooks1.png" alt="QuickBooks" />
            <img src="/quickbooks2.png" alt="QuickBooks" />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-section business">
          <h3>Business Owners</h3>
          <ul>
            <li>Bookkeeping/Accounting</li>
            <li>Accounts Payable Management</li>
            <li>Accounts Receivable Management</li>
            <li>Payroll Management</li>
            <li>Fractional CFO services</li>
            <li>Sales Tax & Use Tax preparation</li>
          </ul>
        </div>

        <div className="footer-section firm">
          <h3>CPA & Bookkeeping Firm</h3>
          <ul>
            <li>C2C Partnership Model</li>
            <li>Portfolio Management Model</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>🇺🇸 +1 (215) 918-9654</p>
          <p>🇮🇳 +91 98752 72979</p>
          <p>🇮🇳 +91 95125 48016</p>
        </div>

        <div className="footer-section address">
          <h3>Address</h3>
          <p>
            242-243-244, Green Palladia, Palanpur, Adajan, Surat, Gujarat – India
            – 395009
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
