import "../styles/Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      id: 1,
      className: "small pink",
      image: "/images/gallery-book.jpg",
      alt: "Libër për fëmijë",
    },
    {
      id: 2,
      className: "medium purple",
      image: "/images/gallery-family.jpg",
      alt: "Foto familjare",
    },
    {
      id: 3,
      className: "small cream",
      image: "/images/gallery-card.jpg",
      alt: "Kartolinë e personalizuar",
    },
    {
      id: 4,
      className: "small soft-pink",
      image: "/images/gallery-music.jpg",
      alt: "Dhuratë muzikore",
    },
    {
      id: 5,
      className: "medium purple",
      image: "/images/gallery-illustration.jpg",
      alt: "Ilustrim fotoje",
    },
    {
      id: 6,
      className: "medium pink",
      image: "/images/gallery-camera.jpg",
      alt: "Album fotografik",
    },
    {
      id: 7,
      className: "medium cream",
      image: "/images/gallery-love.jpg",
      alt: "Dhuratë romantike",
    },
    {
      id: 8,
      className: "medium purple",
      image: "/images/gallery-baby.jpg",
      alt: "Dhuratë për bebe",
    },
  ];

  return (
    <section className="gallery-section" id="Gallery" >
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-label">INSPIRATION</p>
          <h1 className="gallery-title">Gift Gallery</h1>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-card ${item.className}`}>
              <div className="gallery-image-wrap">
                <img src={item.image} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
