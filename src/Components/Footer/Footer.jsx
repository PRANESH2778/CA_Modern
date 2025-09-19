import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img
            alt="Global Insights KPO"
            src="https://globalinsightskpo.com/wp-content/uploads/2024/12/global-insights-logo-light.svg"
            height="40"
          />
          <p className="mt-12">
            Global Insights KPO provides precise and affordable accounting
            solutions for businesses worldwide.
          </p>
        </div>

        <div>
          <h4>Useful Links</h4>
          <ul className="links">
            <li><a href="https://globalinsightskpo.com/">Home</a></li>
            <li><a href="https://globalinsightskpo.com/about-us/">About us</a></li>
            <li><a href="https://globalinsightskpo.com/engagement-model/">Engagement model</a></li>
            <li><a href="https://globalinsightskpo.com/work-methodology/">Work Methodology</a></li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="links">
            <li><a href="https://globalinsightskpo.com/career/">Career</a></li>
            <li><a href="https://globalinsightskpo.com/blogs/">Blogs</a></li>
            <li><a href="https://globalinsightskpo.com/contact-us/">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>+1 (215) 918-9654</p>
          <p>+91 98752 72979</p>
          <p>+91 95125 48016</p>
          <p>242-243-244, Green Palladia, Palanpur, Adajan, Surat, Gujarat – India – 395009</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container spread">
          <p>Copyright © 2025. All rights reserved.</p>
          <div className="socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://wa.me/" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;