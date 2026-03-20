import "../styles/WhyChooseUs.css";
import { useEffect } from "react";
export default function () {
  
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
    <section className="ChooseUs">

      <div className="choose-text-div">
        <h1 className="choose-text">PSE TNA ZGJEDHESH NE</h1>
        <h1 className="choose-header">Krijuar me Zemer & Shpirt</h1>
      </div>

      <div className="choose-divs ">

        <div className="choose-divs-style fade-up" style={{transitionDelay:"0.1s"}}>
          <div className="choose-divs-font">
            <img src="./images/fingerprint-pattern.png" alt="" />
          </div>
          <h1 className="choose-divs-header">Plotesisht e personalizuar</h1>
          <p className="choose-divs-text">
            Çdo dhuratë krijohet në mënyrë unike me fotot, emrat dhe mesazhet
            tuaja të veçanta
          </p>
        </div>

        <div className="choose-divs-style fade-up" style={{transitionDelay:"0.2s"}}>
          <div className="choose-divs-font">
            <img src="./images/heart.png" alt="" />
          </div>
          <h1 className="choose-divs-header">Vlera Emocionale</h1>
          <p className="choose-divs-text">
            Krijoni dhurata që prekin zemrat dhe bëhen kujtime të çmuara
            përgjithmonë.
          </p>
        </div>

        <div className="choose-divs-style fade-up" style={{transitionDelay:"0.3s"}}>
          <div className="choose-divs-font">
            <img src="./images/gem.png" alt="" />
          </div>
          <h1 className="choose-divs-header">I Vetëm në Llojin e Vet</h1>
          <p className="choose-divs-text">
            Asnjë dy dhurata nuk janë njësoj — çdo krijim është po aq unik sa
            historia juaj.
          </p>
        </div>

        <div className="choose-divs-style fade-up" style={{transitionDelay:"0.4s"}}>
          <div className="choose-divs-font">
            <img src="./images/zap.png" alt="" />
          </div>

          <h1 className="choose-divs-header">Proces i Thjeshtë</h1>
          <p className="choose-divs-text">
            Porositje e lehtë brenda pak minutash. Ne kujdesemi për gjithë
            magjinë prapa skenave.
          </p>
        </div>
        
      </div>
    </section>
  );
}
