import React from "react";
import { FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"; // Importing necessary icons
import gpt3Logo from "../../assets/logo-black.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://x.com/MediFor7?t=ONqP0TINAuNhdyEOzrMwlA&s=09" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaTwitter className="footer-icon" />
          <p>Twitter</p>
        </a>
        <a href="https://www.linkedin.com/company/medifor7-medtech360-solutions-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin className="footer-icon" />
          <p>LinkedIn</p>
        </a>

        <a href="https://www.instagram.com/medifor7?igsh=MWIxbmYxOGYxenE3cA==" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaInstagram className="footer-icon" />
          <p>Instagram</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p className="footer-item"><FaPhoneAlt className="footer-icon" /> +91 7219785868</p>
        <p className="footer-item"><FaEnvelope className="footer-icon" /> Info.medifo7@gmail.com</p>
        <p className="footer-item"><FaMapMarkerAlt className="footer-icon" /> COEP's Bhau Institute, Near Boat Club, Shivajinager, COEP Pune-411005 MH</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 @MediFor7. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
