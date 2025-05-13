import "./Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Tvashta Industries</div>
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}