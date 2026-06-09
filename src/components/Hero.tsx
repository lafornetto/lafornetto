import heroImage from "../assets/images/lafornetto-front.jpg";

export function Hero() {
  return (
    <section
        className="hero"
        style={{
            backgroundImage: `
            linear-gradient(rgba(16,36,31,0.68), rgba(16,36,31,0.9)),
            url(${heroImage})
            `,
        }}
    >
      <nav className="navbar">
        <div className="brand">La Fornetto</div>

        <div className="nav-links">
          <a href="/meny">Meny</a>
          <a href="#lunch">Lunch</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">Restaurang • Pub • Pizzeria</p>
        <h1>La Fornetto Älvkarleby</h1>
        <p>Pizza, kebab, grillrätter, sallader och lunch i Älvkarleby.</p>

        <div className="hero-buttons">
          <a className="primary-btn" href="tel:02682120">
            Ring och beställ
          </a>

            <a className="secondary-btn" href="/meny">
                Visa meny
            </a>
        </div>
      </div>
    </section>
  );
}