import "../styles/Review.css";
import { useEffect } from "react";
function Review() {
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
    <section className="review-section" id="Reviews">
      <div className="review-container">
        <div className="review-header">
          <p className="review-label">KLIENTË TË LUMTUR</p>
          <h1 className="review-title">Histori Gëzimi</h1>
        </div>

        <div className="review-cards">
          <div
            className="review-card fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "Te falederoj pa mas të uroj veç te mira e paç bekimin e Zotit që
              na bën edhe ne si prinder kaq te lumtur.Me ke emocjonuar kaq Shum
              sa nuk me dalin fjalet ke bër një pun të shkëlqyer që un kam ngel
              pa fjal je e veçant"
            </p>
          </div>

          <div
            className="review-card fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "E degjuam, u emocionuan, nuk e prisnin..i pelqeu shumee. Rrofsh
              ti per kohen rekord!E vleresoj angazhimin ne kohe rekord!Je shume
              e mire. Te falenderoj pa mase."
            </p>
          </div>

          <div
            className="review-card fade-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              "Zemer te falenderoj shuuum shuuum shuuuum nga zemra nuk di a do
              mundem te ta shperblej dhe une keshtu ty... Nuk di cte them jam
              shume e lumtur e prekur dhe nje ndjesi qe nk di ta shpjegoj..Nuk
              di tjeter si te te falederoj je vertet e veçant ,ti do jesh
              gjithmon ne kete kujtimin tim që e ke punuar me kaq dashuri"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
