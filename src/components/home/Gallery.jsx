import "../styles/Gallery.css";
import { useEffect, useState } from "react";
function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const galleryItems = [
    {
      id: 26,
      className: "medium purple",
      image: "/update-images/liber16.jpg",
      alt: "Dhuratë për bebe",
    },

    {
      id: 2,
      className: "medium purple",
      image: "/update-images/mbesa.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 3,
      className: "medium purple",
      image: "/images/librinenes2.jpg",
      alt: "Foto familjare",
    },
    {
      id: 4,
      className: "medium purple",
      image: "/update-images/liber2.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 31,
      className: "medium purple",
      image: "/update-images/liber21.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 27,
      className: "medium purple",
      image: "/update-images/liber17.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 5,
      className: "small soft-pink",
      image: "/update-images/muzika.jpeg",
      alt: "Dhuratë muzikore",
    },
    {
      id: 6,
      className: "medium purple",
      image: "/update-images/kartolina.jpg",
      alt: "Ilustrim fotoje",
    },
    {
      id: 7,
      className: "medium pink",
      image: "/update-images/AltinXhoana.jpg",
      alt: "Album fotografik",
    },
    {
      id: 8,
      className: "medium cream",
      image: "/images/kontrat-dashurie.jpg",
      alt: "Dhuratë romantike",
    },
    {
      id: 9,
      className: "medium purple",
      image: "/update-images/arbiola.jpg",
      alt: "Kartolin",
    },
    {
      id: 10,
      className: "medium purple",
      image: "/update-images/kartolin.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 11,
      className: "medium purple",
      image: "/update-images/liber.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 12,
      className: "medium purple",
      image: "/update-images/liber1.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 13,
      className: "medium purple",
      image: "/update-images/liber3.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 14,
      className: "medium purple",
      image: "/update-images/liber5.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 15,
      className: "medium purple",
      image: "/update-images/liber6.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 16,
      className: "medium purple",
      image: "/update-images/liber7.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 17,
      className: "medium purple",
      image: "/update-images/liber8.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 18,
      className: "medium purple",
      image: "/update-images/liber9.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 19,
      className: "medium purple",
      image: "/update-images/liber10.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 20,
      className: "small cream",
      image: "/images/kartolina2.jpg",
      alt: "Kartolinë e personalizuar",
    },
    {
      id: 21,
      className: "medium purple",
      image: "/update-images/liber11.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 22,
      className: "medium purple",
      image: "/update-images/liber12.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 23,
      className: "medium purple",
      image: "/update-images/liber13.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 24,
      className: "medium purple",
      image: "/update-images/liber14.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 25,
      className: "medium purple",
      image: "/update-images/liber15.jpg",
      alt: "Dhuratë për bebe",
    },

    {
      id: 1,
      className: "small pink",
      image: "/images/liberperfemij.jpg",
      alt: "Libër për fëmijë",
    },
    {
      id: 28,
      className: "medium purple",
      image: "/update-images/liber18.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 29,
      className: "medium purple",
      image: "/update-images/kartolin3.jpg",
      alt: "Dhuratë për bebe",
    },
    {
      id: 30,
      className: "medium purple",
      image: "/update-images/liber20.jpg",
      alt: "Dhuratë për bebe",
    },
  ];

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
    <section className="gallery-section" id="Gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-label">INSPIRATION</p>
          <h1 className="gallery-title">Gift Gallery</h1>
        </div>
        <div
          id="gallery-photos"
          className="gallery-grid fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          {(showAll ? galleryItems : galleryItems.slice(0, 6)).map((item) => (
            <div key={item.id} className="gallery-card">
              <div
                className="gallery-image-wrap"
                style={{ "--gallery-image": `url("${item.image}")` }}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-actions">
          <button
            type="button"
            className="gallery-toggle"
            aria-expanded={showAll}
            aria-controls="gallery-photos"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Shfaq më pak" : "Shfaq më shumë"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
