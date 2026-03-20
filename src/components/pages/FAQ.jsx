import "../styles/InnerPages.css";

function FAQ() {
  const faqItems = [
    {
      question: "Sa kohë zgjat përgatitja e porosisë?",
      answer:
        "Koha e përgatitjes varet nga produkti dhe personalizimi, por zakonisht porositë përgatiten brenda pak ditësh pune.",
    },
    {
      question: "A mund ta personalizoj produktin me emër, foto ose mesazh?",
      answer:
        "Po, shumica e produkteve tona mund të personalizohen sipas dëshirës suaj me emër, datë, foto ose tekst special.",
    },
    {
      question: "A bëni porosi për evente ose raste speciale?",
      answer:
        "Po, realizojmë edhe porosi për ditëlindje, fejesa, dasma, përvjetorë dhe evente të tjera speciale.",
    },
    {
      question: "A bëni dërgesa?",
      answer:
        "Po, ofrojmë dërgesa dhe ju informojmë për kohën e dërgimit sipas produktit dhe vendndodhjes.",
    },
    {
      question: "Si mund të porosis?",
      answer:
        "Mund të na kontaktoni përmes faqes Contact, Instagram-it ose Facebook-ut dhe ne do t’ju udhëzojmë për çdo hap.",
    },
    {
      question: "A mund të kërkoj ndryshime pasi kam bërë porosinë?",
      answer:
        "Nëse porosia nuk ka hyrë ende në proces pune, ndryshimet mund të bëhen. Prandaj është mirë të na njoftoni sa më shpejt.",
    },
  ];

  return (
    <section className="inner-page">
      <div className="inner-page-container">
        <div className="inner-page-hero">
          <span className="page-badge">FAQ</span>
          <h1>Pyetje të Shpeshta</h1>
          <p>
            Këtu mund të gjeni përgjigje për pyetjet më të zakonshme rreth
            porosive, personalizimit dhe dërgesave.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-card" key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
