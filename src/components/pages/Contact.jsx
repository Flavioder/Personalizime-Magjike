import "../styles/InnerPages.css";

function Contact() {
  return (
    <section className="inner-page">
      <div className="inner-page-container">
        <div className="inner-page-hero">
          <span className="page-badge">Kontakt</span>
          <h1>Na kontakto për porosinë tënde</h1>
          <p>
            Ke një ide për një dhuratë të personalizuar? Na shkruaj dhe ne do të
            të ndihmojmë ta kthejmë në diçka vërtet të bukur dhe unike.
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info">
            <h2>Informacion Kontakti</h2>
            <p>
              Jemi këtu për t’ju ndihmuar me porosi, pyetje apo ide të veçanta.
            </p>

            <div className="contact-item">
              <span>Email</span>
              <p>hello@personalizimemagjike.com</p>
            </div>

            <div className="contact-item">
              <span>Instagram</span>
              <p>@personalizimemagjike</p>
            </div>

            <div className="contact-item">
              <span>Facebook</span>
              <p>Personalizime Magjike</p>
            </div>

            <div className="contact-item">
              <span>Orari</span>
              <p>E hënë - E shtunë / 09:00 - 18:00</p>
            </div>
          </div>

          <form className="contact-form glass-card">
            <h2>Dërgo Mesazh</h2>

            <div className="form-group">
              <label>Emri</label>
              <input type="text" placeholder="Shkruaj emrin tuaj" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Shkruaj email-in tuaj" />
            </div>

            <div className="form-group">
              <label>Produkti</label>
              <input
                type="text"
                placeholder="Për çfarë produkti interesoheni?"
              />
            </div>

            <div className="form-group">
              <label>Mesazhi</label>
              <textarea
                rows="6"
                placeholder="Na shkruaj detajet e porosisë suaj..."
              ></textarea>
            </div>

            <button type="submit" className="page-btn">
              Dërgo Mesazhin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
