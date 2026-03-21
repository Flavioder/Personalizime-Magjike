import { useParams, Link } from "react-router-dom";
import "../styles/CategoryPage.css";

const categoryData = {
  "children-books": {
    badge: "Kategoria",
    title: "Personalized Children Books",
    subtitle:
      "Libra të personalizuar për fëmijë që i kthejnë në heronjtë e historisë së tyre.",
    image: "/images/story-book-cover.jpg",
    description:
      "Kjo kategori është krijuar për të sjellë magji në botën e fëmijëve. Me ilustrime të bukura, emrin e fëmijës dhe elemente të personalizuara, çdo libër bëhet një kujtim i çmuar për familjen.",
    points: [
      "Emri i fëmijës përfshihet në histori",
      "Ilustrime të personalizuara dhe kreative",
      "Dhuratë ideale për ditëlindje dhe raste speciale",
      "Kujtim unik që ruhet gjatë",
    ],
  },

  "greeting-cards": {
    badge: "Kategoria",
    title: "Greeting Cards",
    subtitle:
      "Kartolina unike për ditëlindje, festa dhe momente speciale me prekje personale.",
    image: "/images/greeting-cards.jpg",
    description:
      "Kartolinat tona janë krijuar për të shprehur emocionin në mënyrën më elegante. Çdo detaj mund të përshtatet sipas mesazhit, stilit dhe rastit që dëshiron të festosh.",
    points: [
      "Mesazh i personalizuar",
      "Dizajne elegante dhe romantike",
      "Përshtaten për çdo event",
      "Ide perfekte për dhuratë të vogël me kuptim",
    ],
  },

  "love-contracts": {
    badge: "Kategoria",
    title: "Love Contracts",
    subtitle:
      "Dhurata romantike dhe kreative për çifte, të personalizuara me stil dhe emocion.",
    image: "/images/love-contract.jpg",
    description:
      "Love Contracts janë një mënyrë origjinale dhe shumë e bukur për të surprizuar partnerin. Të personalizuara me emra, data dhe detaje të veçanta, ato krijojnë një kujtim romantik unik.",
    points: [
      "Personalizim me emra dhe data",
      "Dizajn romantik dhe elegant",
      "Ide perfekte për përvjetor ose surprizë",
      "Kujtim emocional për çiftet",
    ],
  },

  "ai-music-gifts": {
    badge: "Kategoria",
    title: "AI Music Gifts",
    subtitle:
      "Dhurata kreative të frymëzuara nga muzika, të krijuara për momente vërtet speciale.",
    image: "/images/ai-music-gifts.jpg",
    description:
      "Kjo kategori kombinon emocionin e muzikës me personalizimin modern. Një zgjedhje shumë e veçantë për ata që duan dhurata me identitet, kujtim dhe stil.",
    points: [
      "Ide moderne dhe unike",
      "E përshtatshme për surpriza emocionale",
      "Dizajne kreative dhe premium",
      "Për njerëz që duan dhurata ndryshe",
    ],
  },

  "photo-illustrations": {
    badge: "Kategoria",
    title: "Photo Illustrations",
    subtitle:
      "Shndërro fotot tuaja në ilustrime artistike që mbajnë gjallë kujtimet më të bukura.",
    image: "/images/photo-illustrations.jpg",
    description:
      "Photo Illustrations janë perfekte për të kthyer një moment të zakonshëm në një kujtim artistik. Mund të përdoren si dhuratë, dekor apo surprizë personale.",
    points: [
      "Foto të kthyera në ilustrime kreative",
      "Stil unik dhe emocional",
      "Ide perfekte për dekor ose dhuratë",
      "Punim estetik dhe i personalizuar",
    ],
  },

  "photo-albums": {
    badge: "Kategoria",
    title: "Photo Albums",
    subtitle:
      "Albume të personalizuara që mbledhin momentet më të bukura në një kujtim të vetëm.",
    image: "/images/photo-albums.jpg",
    description:
      "Albumet me foto janë mënyra ideale për të ruajtur kujtime nga udhëtime, evente, histori dashurie apo momente familjare. Çdo album mund të personalizohet sipas stilit dhe dëshirës së klientit.",
    points: [
      "Mbledh kujtimet në një format elegant",
      "Ideal për dhuratë ose përdorim personal",
      "Përshtatje me foto, tekst dhe stil",
      "Kujtim premium për vite me radhë",
    ],
  },
};

function CategoryPage() {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return (
      <section className="category-page">
        <div className="category-page-container">
          <div className="category-not-found">
            <h1>Kategoria nuk u gjet</h1>
            <p>Kjo kategori nuk ekziston ose linku nuk është i saktë.</p>
            <Link to="/" className="category-btn">
              Kthehu në Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="category-page">
      <div className="category-page-container">
        <div className="category-hero">
          <div className="category-hero-content">
            <span className="category-badge">{category.badge}</span>
            <h1>{category.title}</h1>
            <p>{category.subtitle}</p>

            <div className="category-actions">
              <Link to="/contact" className="category-btn">
                Porosit Tani
              </Link>

              <Link to="/" className="category-link-btn">
                ← Kthehu te Home
              </Link>
            </div>
          </div>

          <div className="category-hero-image">
            <div className="category-image-card">
              <img src={category.image} alt={category.title} />
            </div>
          </div>
        </div>

        <div className="category-content-grid">
          <div className="category-info-card">
            <h2>Për këtë kategori</h2>
            <p>{category.description}</p>
          </div>

          <div className="category-info-card">
            <h2>Çfarë përfshin</h2>
            <div className="category-points">
              {category.points.map((point, index) => (
                <div className="category-point" key={index}>
                  <span>✓</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
