import "./Header.css";

export default function Header({ onNavClick }) {
  return (
    <header className="navbar">
      <div className="navbar-logo">Tvashta Industries</div>
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about" onClick={onNavClick.about}>About</a>
        <a href="#services" onClick={onNavClick.services}>Services</a>
        <a href="#projects" onClick={onNavClick.projects}>Projects</a>
        <a href="#products" onClick={onNavClick.products}>Products</a>
        <a href="#contacts" onClick={onNavClick.contact}>Contact</a>
      </nav>
    </header>
  );
}