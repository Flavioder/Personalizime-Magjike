import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="./images/logoED.png" alt="" />
          Personalizime <span>Magjike</span>
        </Link>

        <nav className="nav-menu">
          <a href="#OurCollection">Produktet</a>
          <a href="#Gallery">Galeria</a>
          <a href="#how-it-works">Si Funksionon</a>
          <a href="#Reviews">Reviews</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
