import "../styles/CallToAction.css";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-icon-box">
          <img src="/images/sparkles.png" alt="Ikona magjike" />
        </div>

        <h1 className="cta-title">Gati për të Krijuar Diçka Magjike?</h1>

        <p className="cta-description">
          Fillo sot krijimin e dhuratës tënde të personalizuar dhe dhuro dikujt
          një kujtim që do ta çmojë përgjithmonë.
        </p>

        <div className="cta-buttons">
          <a href="/" className="cta-primary-btn">
            Fillo Tani
          </a>

          <a href="/contact" className="cta-secondary-btn">
            <span className="cta-chat-icon">💬</span>
            Na Kontakto
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
