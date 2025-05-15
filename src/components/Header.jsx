import React, { useState } from "react";
import "./Header.css";

export default function Header({ onNavClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (callback) => {
    callback();
    setIsMenuOpen(false); 
  };

  return (
    <header className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">Tvashta Industries</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => handleNavClick(onNavClick.home)}>Home</a>
        <a href="#about" onClick={() => handleNavClick(onNavClick.about)}>About</a>
        <a href="#services" onClick={() => handleNavClick(onNavClick.services)}>Services</a>
        <a href="#projects" onClick={() => handleNavClick(onNavClick.projects)}>Projects</a>
        <a href="#products" onClick={() => handleNavClick(onNavClick.products)}>Products</a>
        <a href="#contacts" onClick={() => handleNavClick(onNavClick.contact)}>Contact</a>
      </nav>
    </header>
  );
}
