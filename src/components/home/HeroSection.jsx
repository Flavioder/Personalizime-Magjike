import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CHRISTMAS_THEME_ENABLED } from "../../config/seasonalTheme.js";
import "../styles/HeroSection.css";

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

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={CHRISTMAS_THEME_ENABLED ? "hero hero--christmas" : "hero"}
    >
      <div className="container hero-container">
        <div className="hero-text fade-up1">
          <h3 className="hero-badge">
            {CHRISTMAS_THEME_ENABLED
              ? "✦ DHURATA PËR KRISHTLINDJE"
              : "✨ HANDCRAFTED WITH LOVE"}
          </h3>

          <h1 className="hero-header">
            {CHRISTMAS_THEME_ENABLED
              ? "Këtë Krishtlindje, dhuro një histori"
              : "Krijoni Momente Magjike që Zgjatin Përgjithmonë"}
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
            {CHRISTMAS_THEME_ENABLED && (
              <span className="hero-christmas-bow" aria-hidden="true">
                🎀
              </span>
            )}

            <div className="card-visual">
              <img src="/update-images/defrim.jpg" alt="Libri i Jetës" />
            </div>
            <h3>Libri i jetes</h3>
          </div>

          <div className="product-card libra-te-personalizuar">
            <div className="card-visual">
              <img
                src="/update-images/liber16.jpg"
                alt="Libër i personalizuar"
              />
            </div>
            <h3>Libra te personalizuar</h3>
          </div>

          <div className="product-card libra-per-femije">
            <div className="card-visual">
              <img src="/update-images/joelroel.jpg" alt="Libër për fëmijë" />
            </div>
            <h3>Libra per femije</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
