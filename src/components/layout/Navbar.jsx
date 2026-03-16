import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="./images/logoED.jpg" alt="" />
          Personalizime <span>Magjike</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/products">Produktet</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/howitworks">Si fuksionon</Link>
          <Link to="/review">Reviews</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
