import "../styles/FeaturedProduct.css";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { CHRISTMAS_THEME_ENABLED } from "../../config/seasonalTheme.js";

function FeaturedProduct() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-down");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);
  const { hash, key } = useLocation();
  const productRef = useRef(null);

  useEffect(() => {
    if (hash !== "#featured-product") return;

    const frame = requestAnimationFrame(() => {
      productRef.current?.scrollIntoView({ block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, key]);
  return (
    <section
      id="featured-product"
      ref={productRef}
      className={
        CHRISTMAS_THEME_ENABLED
          ? "featured-product featured-product--christmas"
          : "featured-product"
      }
    >
      <div className="featured-container">
        <div className="featured-image-side">
          <div className="featured-frame">
            {CHRISTMAS_THEME_ENABLED && (
              <span className="featured-christmas-bow" aria-hidden="true" />
            )}
            <div className="featured-inner-bg">
              <img
                src="/update-images/defrim.jpg"
                alt="Personalized Children's Story Book"
              />
            </div>

            <div className="bestseller-badge">⭐ Bestseller</div>
          </div>
        </div>

        <div
          className="featured-content fade-down"
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="featured-label">
            {CHRISTMAS_THEME_ENABLED
              ? "✦ IDE DHURATE PËR KRISHTLINDJE"
              : "PRODUKTI KRYESOR"}
          </p>

          <h1 className="featured-title">Libri i Jetës</h1>

          <p className="featured-description">
            Libri i Jetës është një libër unik, i krijuar posaçërisht për të
            rrëfyer historinë e një personi përmes kujtimeve, përjetimeve,
            njerëzve të dashur dhe momenteve që kanë shënuar jetën e tij.
            Fotografi reale, histori të shkruar me kujdes dhe kapituj të
            personalizuar bashkohen për të krijuar një kujtim të çmuar, që mund
            të lexohet dhe ruhet brez pas brezi.
          </p>

          <div className="featured-points">
            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>
                Histori e shkruar dhe e personalizuar sipas jetës së personit
              </p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Kapituj të organizuar sipas rrugëtimit dhe kujtimeve të tij</p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Fotografi personale të integruara në histori</p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>
                {" "}
                Dizajn elegant, faqe të personalizuara dhe libër fizik i
                printuar
              </p>
            </div>
          </div>

          <div className="featured-buttons">
            <Link to="/contact" className="create-btn">
              Krijo Librin Tënd
            </Link>

            <a href="#Gallery" className="samples-btn">
              Shiko Shembujt ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
