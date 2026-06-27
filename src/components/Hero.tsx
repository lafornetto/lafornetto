import heroImage from "../assets/images/lafornetto-front.jpg";
import logo from "../assets/images/la-fornetto-logo.png";
import swedenFlag from "../assets/images/sweden-flag.png";

type HeroProps = {
  language: "sv" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"sv" | "en">>;
  t: {
    navMenu: string;
    navLunch: string;
    navContact: string;
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    callButton: string;
    menuButton: string;
  };
};

export function Hero({ language, setLanguage, t }: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(11,45,92,0.58), rgba(7,27,56,0.82)),
          url(${heroImage})
        `,
      }}
    >
      <nav className="navbar">
        <a href="/" className="brand" aria-label="La Fornetto startsida">
          <img
            src={logo}
            alt="La Fornetto"
            className="navbar-logo"
          />
        </a>

        <div className="nav-links">
          <a href="/meny">{t.navMenu}</a>
          <a href="#lunch">{t.navLunch}</a>
          <a href="#contact">{t.navContact}</a>
        </div>

        <div className="language-area">
          <div className="language-switcher">
            <button
              onClick={() => setLanguage("sv")}
              disabled={language === "sv"}
            >
              SV
            </button>

            <button
              onClick={() => setLanguage("en")}
              disabled={language === "en"}
            >
              EN
            </button>
          </div>

          <img
            src={swedenFlag}
            alt="Svenska flaggan"
            className="sweden-flag"
          />
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroText}</p>

        <div className="hero-buttons">
          <a className="primary-btn" href="tel:+462682120">
            {t.callButton}
          </a>

          <a className="secondary-btn" href="/meny">
            {t.menuButton}
          </a>
        </div>
      </div>
    </section>
  );
}