import React from 'react';
import './HeroSection.css'; // We'll create this CSS file next

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h3>Ready to start your project?</h3>
        <p>Schedule a consultation with our experts today.</p>
        <button className="hero-button">Book an Appointment</button>
      </div>
    </div>
  );
};

export default HeroSection;
