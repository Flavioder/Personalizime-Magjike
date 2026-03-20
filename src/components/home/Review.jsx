import "../styles/Review.css";
import { useEffect } from "react";
function Review() {
  
useEffect(() => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}, []);

  return (
    <section className="review-section" id="Reviews">
      <div className="review-container">
        <div className="review-header">
          <p className="review-label">KLIENTË TË LUMTUR</p>
          <h1 className="review-title">Histori Gëzimi</h1>
        </div>

        <div className="review-cards">
          <div className="review-card fade-up" style={{transitionDelay:"0.1s"}}>
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "Fytyra e vajzës sime kur e pa veten si princeshë në librin e saj
              ishte e paçmueshme! Kjo është dhurata më magjike që kemi bërë
              ndonjëherë."
            </p>

            <div className="review-user">
              <div className="review-avatar pink-avatar">👧</div>
              <div className="review-user-info">
                <h4>Maria K.</h4>
                <p>Nënë e Përkushtuar</p>
              </div>
            </div>
          </div>

          <div className="review-card fade-up" style={{transitionDelay:"0.2s"}}>
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "Kënga e krijuar me AI për përvjetorin tonë të martesës e bëri
              bashkëshorten time të përlotej. Një dhuratë kaq unike dhe e
              menduar me zemër sa do ta ruajmë përgjithmonë."
            </p>

            <div className="review-user">
              <div className="review-avatar purple-avatar">👨</div>
              <div className="review-user-info">
                <h4>David R.</h4>
                <p>Bashkëshort Romantik</p>
              </div>
            </div>
          </div>

          <div className="review-card fade-up" style={{transitionDelay:"0.3s"}}>
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "Albumi me foto që krijova për 60-vjetorin e mamit tim e bëri të
              qante nga gëzimi. Cilësia dhe kujdesi për çdo detaj ishin
              mbresëlënëse!"
            </p>

            <div className="review-user">
              <div className="review-avatar pink-avatar">👩</div>
              <div className="review-user-info">
                <h4>Ana M.</h4>
                <p>Bijë Plot Dashuri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
