import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-header">
          <p className="how-label">PROCES I THJESHTË</p>
          <h1 className="how-title">Si Ndodh Magjia</h1>
        </div>

        <div className="how-steps">
          <div className="how-step">
            <div className="step-top">
              <div className="step-icon-circle">
                <img
                  src="/images/mouse-pointer-click.png"
                  alt="Zgjidh dhuratën"
                />
              </div>
              <div className="step-number">1</div>
              <div className="step-line"></div>
            </div>
            <h3 className="step-title">Zgjidh Dhuratën Tënde</h3>
            <p className="step-text">
              Shfleto koleksionin tonë dhe zgjidh llojin perfekt të dhuratës së
              personalizuar.
            </p>
          </div>

          <div className="how-step">
            <div className="step-top">
              <div className="step-icon-circle">
                <img src="/images/upload.png" alt="Ngarko dhe personalizo" />
              </div>
              <div className="step-number">2</div>
              <div className="step-line"></div>
            </div>
            <h3 className="step-title">Ngarko &amp; Personalizo</h3>
            <p className="step-text">
              Shto foto, emra, data dhe mesazhet e tua personale.
            </p>
          </div>

          <div className="how-step">
            <div className="step-top">
              <div className="step-icon-circle">
                <img
                  src="/images/wand-sparkles.png"
                  alt="Ne krijojmë magjinë"
                />
              </div>
              <div className="step-number">3</div>
              <div className="step-line"></div>
            </div>
            <h3 className="step-title">Ne Krijojmë Magjinë</h3>
            <p className="step-text">
              Artistët tanë e kthejnë përmbajtjen tënde në një kujtim të bukur
              dhe të veçantë.
            </p>
          </div>

          <div className="how-step">
            <div className="step-top">
              <div className="step-icon-circle">
                <img src="/images/gift.png" alt="Merr dhe shijo" />
              </div>
              <div className="step-number">4</div>
            </div>
            <h3 className="step-title">Merr &amp; Shijo</h3>
            <p className="step-text">
              Dhurata jote magjike mbërrin gati për të krijuar momente të
              paharrueshme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
