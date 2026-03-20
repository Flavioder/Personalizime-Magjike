import "../styles/InnerPages.css";

function OurStory() {
  return (
    <section className="inner-page">
      <div className="inner-page-container">
        <div className="inner-page-hero">
          <span className="page-badge">Historia Jonë</span>
          <h1>Si lindi Personalizime Magjike</h1>
          <p>
            Gjithçka nisi nga dëshira për të krijuar diçka më shumë sesa një
            dhuratë të zakonshme — diçka që mbart kujtime, emocion dhe një
            prekje personale që e bën çdo moment më të veçantë.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2>Fillimi</h2>
              <p>
                Ideja lindi nga dashuria për dhuratat e personalizuara dhe nga
                bindja se gjërat më të bukura janë ato që kanë kuptim emocional.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2>Rritja</h2>
              <p>
                Me kalimin e kohës, kjo ide u kthye në një brand që krijon
                produkte të veçanta për njerëz që duan të dhurojnë ndryshe: me
                zemër, stil dhe kujdes.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2>Sot</h2>
              <p>
                Sot, Personalizime Magjike vazhdon të krijojë kujtime të
                personalizuara për ditëlindje, përvjetorë, surpriza dhe çdo
                moment që meriton të mbahet mend.
              </p>
            </div>
          </div>
        </div>

        <div className="quote-box">
          <p>“Çdo dhuratë bëhet më e bukur kur mban një histori personale.”</p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
