import { useState } from "react";
import "../styles/InnerPages.css";

function Contact() {
  const [formData, setFormData] = useState({
    emri: "",
    email: "",
    produkti: "",
    mesazhi: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mdapenqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mesazhi u dërgua me sukses!");
        setFormData({
          emri: "",
          email: "",
          produkti: "",
          mesazhi: "",
        });
      } else {
        setStatus("Ndodhi një problem. Ju lutem provoni përsëri.");
      }
    } catch (error) {
      setStatus("Ndodhi një problem. Ju lutem provoni përsëri.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <p>personalizimemagjike@gmail.com</p>
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

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <h2>Dërgo Mesazh</h2>

            <div className="form-group">
              <label htmlFor="emri">Emri</label>
              <input
                id="emri"
                type="text"
                name="emri"
                placeholder="Shkruaj emrin tuaj"
                value={formData.emri}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Shkruaj email-in tuaj"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="produkti">Produkti</label>
              <input
                id="produkti"
                type="text"
                name="produkti"
                placeholder="Për çfarë produkti interesoheni?"
                value={formData.produkti}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mesazhi">Mesazhi</label>
              <textarea
                id="mesazhi"
                rows="6"
                name="mesazhi"
                placeholder="Na shkruaj detajet e porosisë suaj..."
                value={formData.mesazhi}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="page-btn" disabled={isSubmitting}>
              {isSubmitting ? "Duke dërguar..." : "Dërgo Mesazhin"}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
