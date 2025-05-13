import React from 'react';
import './HeroSection2.css'; // We'll create this CSS file next

const HeroSection2 = ({onNavClick}) => {
  return (
    <div className="hero-section2">
      <div className="hero-overlay2"></div>
      <div className="hero-content2">
        <h4>Quality.Innovation.Excellence</h4>
        <p>Tvashta Industries & Home Solution Pvt Ltd - Your trusted partner for all industrial and residential construction needs.</p>
        <div className="btncon">
            <button className="hero-button21" onClick={onNavClick.services}>Our Services</button>
            <button className="hero-button22" onClick={onNavClick.contact}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
