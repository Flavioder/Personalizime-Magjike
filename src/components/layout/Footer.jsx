import "../styles/Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-brand-top">
            <img
              src="/images/logoED.jpg"
              alt="Personalizime Magjike"
              className="footer-logo"
            />
            <h3>Personalizime Magjike</h3>
          </div>

          <p>
            Krijojmë dhurata të personalizuara që kthejnë momentet në kujtime.
          </p>
        </div>

        <div className="footer-links">
          <h4>Produktet</h4>
          <a href="#">Libra për Fëmijë</a>
          <a href="#">Kartolina</a>
          <a href="#">Kontrata Dashurie</a>
          <a href="#">Muzikë AI</a>
        </div>

        <div className="footer-links">
          <h4>Kompania</h4>
          <a href="/about">Rreth Nesh</a>
          <a href="/our-story">Historia Jonë</a>
          <a href="/contact">Kontakt</a>
          <a href="/faq">Pyetje të Shpeshta</a>
        </div>

        <div className="footer-social">
          <h4>Na Ndiq</h4>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Personalizime Magjike. Të gjitha të drejtat të rezervuara.</p>

        <div className="footer-bottom-links">
          <a href="#">Privatësia</a>
          <a href="#">Kushtet e Përdorimit</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
