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
            <Link to="/products" className="primary-btn">
              Shiko Produktet
            </Link>

            <Link to="/contact" className="secondary-btn">
              Porosit Tani
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="product-card greetingcard-card">
            <div className="card-visual">
              <img src="/images/kontratapremium.jpg" alt="Greeting Card" />
            </div>
            <h3>Greeting Card</h3>
          </div>

          <div className="product-card childrenbook-card">
            <div className="card-visual">
              <img src="/images/childrenbook1.jpg" alt="Children's Book" />
            </div>
            <h3>Children's Book</h3>
          </div>

          <div className="product-card album-card">
            <div className="card-visual">
              <img src="/images/filters_format(webp).webp" alt="Photo Album" />
            </div>
            <h3>Photo Album</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
