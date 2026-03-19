import "../styles/OurCollection.css";

function OurCollection() {
  return (
    <section className="OurCollection" id="OurCollection">
      <div className="OurCollection-Container">
        <div className="OurCollection-content">
          <div className="collection-text-header">
            <h1 className="collection-text">KOLEKSIONI JONË</h1>
            <h1 className="collection-head">Kategoritë e Dhuratave Magjike</h1>
          </div>

          <div className="collection-cards">
            <div className="collection-card">
              <div className="collection-card-image pink-bg">
                <img src="/images/children-book.png" alt="Children Books" />
              </div>
              <div className="collection-card-body">
                <h3>Personalized Children Books</h3>
                <p>
                  Kthejeni fëmijën tuaj në heroin e historisë së tij me libra të
                  personalizuar plot magji.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-card-image purple-bg">
                <img src="/images/greeting-card.png" alt="Greeting Cards" />
              </div>
              <div className="collection-card-body">
                <h3>Greeting Cards</h3>
                <p>
                  Kartolina unike për ditëlindje, festa dhe momente speciale me
                  prekjen tuaj personale.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-card-image soft-pink-bg">
                <img src="/images/kontratapremium.jpg" alt="Love Contracts" />
              </div>
              <div className="collection-card-body">
                <h3>Love Contracts</h3>
                <p>
                  Dhurata romantike dhe kreative për çifte, të personalizuara me
                  stil dhe emocion.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-card-image purple-bg">
                <img src="/images/music-gift.png" alt="AI Music Gifts" />
              </div>
              <div className="collection-card-body">
                <h3>AI Music Gifts</h3>
                <p>
                  Krijoni këngë të personalizuara me tekstin tuaj për një
                  dhuratë vërtet të paharrueshme.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-card-image cream-bg">
                <img
                  src="/images/photo-illustration.png"
                  alt="Photo Illustrations"
                />
              </div>
              <div className="collection-card-body">
                <h3>Photo Illustrations</h3>
                <p>
                  Transformoni fotot tuaja në ilustrime artistike dhe të veçanta
                  për çdo rast.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>

            <div className="collection-card">
              <div className="collection-card-image soft-pink-bg">
                <img src="/images/photo-album.png" alt="Photo Albums" />
              </div>
              <div className="collection-card-body">
                <h3>Photo Albums</h3>
                <p>
                  Albume cilësore dhe elegante për të ruajtur kujtimet tuaja më
                  të bukura.
                </p>
                <a href="#">Explore →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCollection;
