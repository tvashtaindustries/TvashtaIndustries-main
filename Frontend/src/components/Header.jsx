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
    <header className="sticky top-0 max-w-full z-[1000] bg-white border-b border-[#eee] font-[Geneva] px-[30px] py-[15px] flex justify-between items-center box-border mx-0">
      <div className="navbar-header flex justify-between w-[100%]">
        <div className = "text-[22px] font-bold text-[#222]">Tvashta Industries</div>
        <button
  className={`menu-toggle ${isMenuOpen ? 'flex' : 'hidden'} bg-transparent`}
  onClick={toggleMenu}
>
<svg width="20" height="20" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="4" fill="black" />
    <rect y="10" width="30" height="4" fill="black" />
    <rect y="20" width="30" height="4" fill="black" />
  </svg>
</button>
      </div>

      <nav className={`navbar-links flex gap-[30px] ${isMenuOpen ? "open" : ""}`}>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#home" onClick={() => handleNavClick(onNavClick.home)}>Home</a>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#about" onClick={() => handleNavClick(onNavClick.about)}>About</a>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#services" onClick={() => handleNavClick(onNavClick.services)}>Services</a>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#projects" onClick={() => handleNavClick(onNavClick.projects)}>Projects</a>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#products" onClick={() => handleNavClick(onNavClick.products)}>Products</a>
        <a className = " no-underline text-[#6b7280] text-[16px] transition-colors duration-300 ease-in-out hover:text-[#e53935]" href="#contacts" onClick={() => handleNavClick(onNavClick.contact)}>Contact</a>
      </nav>
    </header>
  );
}
