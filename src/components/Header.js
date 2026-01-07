import React from 'react';
import headerImage from './Images/me.jpg';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="image-container">
        <img src={headerImage} alt="Partha Sarathy" className="header-image" loading="lazy" />
      </div>
      <div className="header-content">
        <h1>Partha Sarathy</h1>
        <p className="title">Entry-level Software Development Engineer</p>
        <p className="location">📍 Bengaluru, Karnataka</p>
        <div className="contact-info">
          <a href="tel:+919344776999">+91 93447 76999</a> | 
          <a href="mailto:mparthasarathy0000@gmail.com">mparthasarathy0000@gmail.com</a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/partha-sarathy-in/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Partha-2" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://leetcode.com/u/partha02/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
        <div className="resume-download">
          <a href="https://drive.google.com/file/d/1DiOye_syYzs178xxzGEbnGmGO0D1O3bg/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
