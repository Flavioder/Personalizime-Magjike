import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="./images/logoED.png" alt="Logo Personalizime Magjike" />
          Personalizime <span>Magjike</span>
        </Link>

        <button
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Hap menunë"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="#OurCollection" onClick={closeMenu}>
            Produktet
          </a>
          <a href="#Gallery" onClick={closeMenu}>
            Galeria
          </a>
          <a href="#how-it-works" onClick={closeMenu}>
            Si Funksionon
          </a>
          <a href="#Reviews" onClick={closeMenu}>
            Reviews
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
