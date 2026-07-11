import heroImage from "../assets/images/lafornetto-front.jpg";
import logo from "../assets/images/la-fornetto-logo.png";
import swedenFlag from "../assets/images/sweden-flag.png";

const API_URL = "http://localhost:5246";

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
  heroImageUrl?: string | null;
  logoUrl?: string | null;

  heroEyebrow?: string | null;
  heroTitle?: string | null;
  heroText?: string | null;
  heroPrimaryButtonText?: string | null;
  heroSecondaryButtonText?: string | null;
};

function getImageUrl(imageUrl: string | null | undefined, fallback: string) {
  if (!imageUrl) {
    return fallback;
  }

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  return `${API_URL}${imageUrl}`;
}

export function Hero({
  language,
  setLanguage,
  t,
  heroImageUrl,
  logoUrl,
  heroEyebrow,
  heroTitle,
  heroText,
  heroPrimaryButtonText,
  heroSecondaryButtonText,
}: HeroProps) {
  const heroBackgroundImage = getImageUrl(heroImageUrl, heroImage);
  const navbarLogo = getImageUrl(logoUrl, logo);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(11,45,92,0.58), rgba(7,27,56,0.82)),
          url(${heroBackgroundImage})
        `,
      }}
    >
      <nav className="navbar">
        <a href="/" className="brand" aria-label="La Fornetto startsida">
          <img src={navbarLogo} alt="La Fornetto" className="navbar-logo" />
        </a>

        <div className="nav-links">
          <a href="#news">Nyheter</a>
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
        <p className="eyebrow">{heroEyebrow || t.heroEyebrow}</p>

        <h1>{heroTitle || t.heroTitle}</h1>

        <p>{heroText || t.heroText}</p>

        <div className="hero-buttons">
          <a className="primary-btn" href="tel:+462682120">
            {heroPrimaryButtonText || t.callButton}
          </a>

          <a className="secondary-btn" href="/meny">
            {heroSecondaryButtonText || t.menuButton}
          </a>
        </div>
      </div>
    </section>
  );
}