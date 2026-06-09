export function ContactSection() {
  return (
    <section id="contact" className="contact-section-dark">
      <div className="contact-inner">
        <div className="contact-content">
          <p className="eyebrow">Kontakt</p>
          <h2>Hitta till La Fornetto</h2>

          <p><strong>Adress:</strong> Östanåvägen 15, 814 70 Älvkarleby</p>
          <p><strong>Telefon:</strong> 026-82 120</p>
          <p><strong>Instagram:</strong> @Lafornetto2025</p>

          <div className="opening-hours">
            <strong>Öppettider vinter</strong>
            <span>Mån–Tor: 11:00–21:00</span>
            <span>Fre–Lör: 11:00–22:00</span>
            <span>Söndag: 12:00–21:00</span>
          </div>

          <div className="opening-hours">
            <strong>Öppettider sommar</strong>
            <span>Mån–Tor: 11:00–22:00</span>
            <span>Fre–Lör: 11:00–23:00</span>
            <span>Söndag: 11:00–22:00</span>
          </div>

          <a className="maps-light-btn" href="https://www.google.com/maps/search/?api=1&query=Östanåvägen+15+81470+Älvkarleby" target="_blank">
            Öppna i Google Maps
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title="La Fornetto karta"
            src="https://www.google.com/maps?q=Östanåvägen%2015%2C%20814%2070%20Älvkarleby&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}