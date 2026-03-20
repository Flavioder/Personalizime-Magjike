import "../styles/InnerPages.css";

function AboutUs() {
  return (
    <section className="inner-page">
      <div className="inner-page-container">
        <div className="inner-page-hero">
          <span className="page-badge">Rreth Nesh</span>
          <h1>Krijojmë dhurata që mbajnë kujtimet gjallë</h1>
          <p>
            Te <strong>Personalizime Magjike</strong>, besojmë se çdo dhuratë
            duhet të ketë emocion, histori dhe kuptim. Ne krijojmë produkte të
            personalizuara me kujdes, që momentet e veçanta të kthehen në
            kujtime të paharrueshme.
          </p>
        </div>

        <div className="content-grid two-columns">
          <div className="glass-card">
            <h2>Misioni Ynë</h2>
            <p>
              Misioni ynë është të sjellim buzëqeshje përmes produkteve të
              personalizuara që prekin zemrën. Çdo krijim bëhet me përkushtim,
              estetikë dhe dashuri për detajin.
            </p>
          </div>

          <div className="glass-card">
            <h2>Vizioni Ynë</h2>
            <p>
              Duam të bëhemi vendi ku klientët gjejnë jo vetëm një dhuratë të
              bukur, por një mënyrë të veçantë për të shprehur dashurinë,
              mirënjohjen dhe kujtimet e tyre më të çmuara.
            </p>
          </div>
        </div>

        <div className="content-grid three-columns">
          <div className="feature-card">
            <h3>Personalizim unik</h3>
            <p>
              Çdo porosi përshtatet sipas dëshirës së klientit me emër, foto,
              datë ose mesazh.
            </p>
          </div>

          <div className="feature-card">
            <h3>Kujdes në detaj</h3>
            <p>
              Punojmë me finesë dhe përkushtim që çdo produkt të duket i veçantë
              dhe premium.
            </p>
          </div>

          <div className="feature-card">
            <h3>Dhurata me emocion</h3>
            <p>
              Nuk krijojmë thjesht produkte — krijojmë kujtime që mbeten gjatë.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
