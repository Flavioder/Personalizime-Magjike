import "../styles/OurCollection.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function OurCollection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

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
    <section className="OurCollection" id="OurCollection">
      <div className="OurCollection-Container">
        <div className="OurCollection-content">
          <div className="collection-text-header">
            <h1 className="collection-text">KOLEKSIONI JONË</h1>
            <h1 className="collection-head">Kategoritë e Dhuratave Magjike</h1>
          </div>

          <div
            className="collection-cards fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            {/* 1 */}
            <div className="collection-card">
              <div className="collection-card-image pink-bg">
                <img
                  src="/images/LiberEmocionalFoto.jpg"
                  alt="Children Books"
                />
              </div>
              <div className="collection-card-body">
                <h3>Libra Emocionalë të Personalizuar</h3>
                <p>
                  Libra të personalizuar që kthejnë kujtimet, dashurinë dhe
                  momentet më të bukura në një dhuratë që mbetet përjetë.
                </p>
                <Link to="/category/children-books">Explore →</Link>
              </div>
            </div>

            {/* 2 */}
            <div className="collection-card">
              <div className="collection-card-image purple-bg">
                <img src="/images/kartolina1.jpg" alt="Greeting Cards" />
              </div>
              <div className="collection-card-body">
                <h3>Kartolina</h3>
                <p>
                  Kartolina unike për ditëlindje, festa dhe momente speciale me
                  prekjen tuaj personale.
                </p>
                <Link to="/category/greeting-cards">Explore →</Link>
              </div>
            </div>

            {/* 3 */}
            <div className="collection-card">
              <div className="collection-card-image soft-pink-bg">
                <img src="/images/kontratapremium.jpg" alt="Love Contracts" />
              </div>
              <div className="collection-card-body">
                <h3>Kontrata e Dashurise</h3>
                <p>
                  Dhurata romantike dhe kreative për çifte, të personalizuara me
                  stil dhe emocion.
                </p>
                <Link to="/category/love-contracts">Explore →</Link>
              </div>
            </div>

            {/* 4 */}
            <div className="collection-card">
              <div className="collection-card-image purple-bg">
                <img src="/images/kengajon.png" alt="AI Music Gifts" />
              </div>
              <div className="collection-card-body">
                <h3>AI Music Gifts</h3>
                <p>
                  Krijoni këngë të personalizuara me tekstin tuaj për një
                  dhuratë vërtet të paharrueshme.
                </p>
                <Link to="/category/ai-music-gifts">Explore →</Link>
              </div>
            </div>

            {/* 5 */}
            <div className="collection-card">
              <div className="collection-card-image cream-bg">
                <img src="/images/fotoilustrim.jpg" alt="Photo Illustrations" />
              </div>
              <div className="collection-card-body">
                <h3>Ilustrim Fotosh</h3>
                <p>
                  Transformoni fotot tuaja në ilustrime artistike dhe të veçanta
                  për çdo rast.
                </p>
                <Link to="/category/photo-illustrations">Explore →</Link>
              </div>
            </div>

            {/* 6 */}
            <div className="collection-card">
              <div className="collection-card-image soft-pink-bg">
                <img
                  src="/images/filters_format(webp).webp"
                  alt="Photo Albums"
                />
              </div>
              <div className="collection-card-body">
                <h3>Albume fotografike</h3>
                <p>
                  Albume cilësore dhe elegante për të ruajtur kujtimet tuaja më
                  të bukura.
                </p>
                <Link to="/category/photo-albums">Explore →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCollection;
