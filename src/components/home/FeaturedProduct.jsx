import "../styles/FeaturedProduct.css";
import { useEffect } from "react";

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
  return (
    <section className="featured-product">
      <div className="featured-container">
        <div className="featured-image-side">
          <div className="featured-frame">
            <div className="featured-inner-bg">
              <div className="featured-photo-card">
                <img
                  src="/images/bestseller.jpg"
                  alt="Personalized Children's Story Book"
                />
              </div>
            </div>

            <div className="bestseller-badge">⭐ Bestseller</div>
          </div>
        </div>

        <div
          className="featured-content fade-down"
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="featured-label">PRODUKTI KRYESOR</p>

          <h1 className="featured-title">Libra të Personalizuar për Fëmijë</h1>

          <p className="featured-description">
            Kthejeni fëmijën tuaj në personazhin kryesor të aventurës së tij
            magjike. Duke përdorur fotot tuaja, ne krijojmë libra të ilustruar
            bukur që do të ruhen si kujtime të çmuara për gjithë jetën.
          </p>

          <div className="featured-points">
            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Fotoja e fëmijës tuaj shndërrohet në ilustrime</p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Emër dhe dedikim i personalizuar</p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Kopertinë premium me materiale ekologjike</p>
            </div>

            <div className="featured-point">
              <span className="point-icon">✓</span>
              <p>Tema të ndryshme historish në dispozicion</p>
            </div>
          </div>

          <div className="featured-buttons">
            <a href="/" className="create-btn">
              Krijo Librin Tënd
            </a>

            <a href="/" className="samples-btn">
              Shiko Shembujt ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
