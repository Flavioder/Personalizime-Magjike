import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h3 className="hero-badge">✨ HANDCRAFTED WITH LOVE</h3>

          <h1>
            Krijoni Momente Magjike
            <span> që Zgjatin Përgjithmonë</span>
          </h1>

          <p className="hero-description">
            Transformoni kujtimet e çmuara në dhurata të jashtëzakonshme të
            personalizuara. Çdo krijim tregon historinë tuaj unike me mjeshtëri
            dhe zemër.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn">
              Shiko Produktet
            </Link>

            <Link to="/contact" className="secondary-btn">
              Porosit Tani
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img img alt="Dhurata të personalizuara Personalizime Magjike" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
