import React from 'react';
import './Hero.css';

const Hero = ({ onNavClick }) => {
  return (
     <div className="hero">
      <div className="hero-text">
        <h1>
          Building Excellence,<br />
          <span>Crafting Homes</span>
        </h1>
        <p>
          Tvastha Industries delivers premium architectural solutions,
          from modern structures to elegant home interiors.
        </p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={onNavClick.services}>Explore Services</button>
          <button className="btn secondary" onClick={onNavClick.contact}>Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src='https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmclMjB3aXRoJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8MHwxfHwxNzQ2Njg5MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080' alt="Modern Architecture" />
      </div>
    </div>
  );
};

export default Hero;
