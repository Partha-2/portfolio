import React, { useRef, useEffect } from 'react';
import headerImage from './Images/me.jpg';
import profileVideo from './Images/Self_Intro3.mp4';
import './Header.css'; 

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(error => {
          console.error('Error attempting to play video:', error);
        });
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play video on mouse enter:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleTouchStart = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play video on touch start:', error);
      });
    }
  };

  const handleTouchEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <header className="header">
      <div 
        className="image-container" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={headerImage} alt="Header" className="header-image" />
        <video ref={videoRef} className="profile-video" muted>
          <source src={profileVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="header-content">
        <h1>Partha Sarathy</h1>
        <p>Email: <a href="mailto:mparthasarathy0000@gmail.com">mparthasarathy0000@gmail.com</a></p>
        <p>Phone: <a href="tel:9344776999">93447 76999</a></p>
        <p>Location: Tiruppur</p>
        <p>
          <a href="https://www.linkedin.com/in/partha-sarathy-026121273" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Partha-2" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
