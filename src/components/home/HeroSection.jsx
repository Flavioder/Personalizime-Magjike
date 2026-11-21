import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import { useEffect } from "react";
function HeroSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text fade-up1">
          <h3 className="hero-badge">✨ HANDCRAFTED WITH LOVE</h3>

          <h1 className="hero-header">
            Krijoni Momente Magjike që Zgjatin Përgjithmonë
          </h1>

          <p className="hero-description">
            Transformoni kujtimet e çmuara në dhurata të jashtëzakonshme të
            personalizuara. Çdo krijim tregon historinë tuaj unike me mjeshtëri
            dhe zemër.
          </p>

          <div className="hero-buttons">
            <a href="#OurCollection" className="primary-btn">
              Shiko Produktet
            </a>

            <Link to="/contact" className="secondary-btn">
              Porosit Tani
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="product-card librijetes-card">
            <div className="card-visual">
              <img src="/update-images/defrim.jpg" alt="libri jetes Card" />
            </div>
            <h3>Libri i jetes</h3>
          </div>

          <div className="product-card libra-te-personalizuar">
            <div className="card-visual">
              <img src="/update-images/liber16.jpg" alt="liber" />
            </div>
            <h3>Libra te personalizuar</h3>
          </div>

          <div className="product-card libra-per-femije">
            <div className="card-visual">
              <img src="/update-images/joelroel.jpg" alt="libra per femije" />
            </div>
            <h3>Libra per femije</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
