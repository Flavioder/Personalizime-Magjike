import "../styles/Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Link to="/category/children-books">Libra për Fëmijë</Link>
          <Link to="/category/greeting-cards">Kartolina</Link>
          <Link to="/category/love-contracts">Kontrata Dashurie</Link>
          <Link to="/category/ai-music-gifts">Muzikë AI</Link>
        </div>

        <div className="footer-links">
          <h4>Kompania</h4>
          <Link to="/about">Rreth Nesh</Link>
          <Link to="/our-story">Historia Jonë</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/faq">Pyetje të Shpeshta</Link>
        </div>

        <div className="footer-social">
          <h4>Na Ndiq</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/personalizime_magjike?igsh=YW1rNHhhejFvdXZy"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1771RwDbD2/?mibextid=wwXIfr"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=personalizimemagjike@gmail.com&su=Interes%20per%20porosi"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Personalizime Magjike. Të gjitha të drejtat të rezervuara.</p>

        {/*<div className="footer-bottom-links">
          <a href="#">Privatësia</a>
          <a href="#">Kushtet e Përdorimit</a>
  </div>*/}
      </div>
    </footer>
  );
}

export default Footer;
