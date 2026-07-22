import type { Dispatch, SetStateAction } from "react";

import heroImage from "../assets/images/lafornetto-front.jpg";
import logo from "../assets/images/la-fornetto-logo.png";
import swedenFlag from "../assets/images/sweden-flag.png";

const API_URL = import.meta.env.VITE_API_URL;

type Language = "sv" | "en";

type HeroTranslations = {
  navNews: string;
  navMenu: string;
  navLunch: string;
  navContact: string;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  callButton: string;
  menuButton: string;
};

type HeroProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: HeroTranslations;

  heroImageUrl?: string | null;
  logoUrl?: string | null;

  heroEyebrow?: string | null;
  heroTitle?: string | null;
  heroText?: string | null;
  heroPrimaryButtonText?: string | null;
  heroSecondaryButtonText?: string | null;
};

function getImageUrl(
  imageUrl: string | null | undefined,
  fallback: string,
) {
  if (!imageUrl) {
    return fallback;
  }

  if (
    imageUrl.startsWith("http://") ||
    imageUrl.startsWith("https://")
  ) {
    return imageUrl;
  }

  return `${API_URL}${imageUrl}`;
}

function getLocalizedText(
  language: Language,
  adminText: string | null | undefined,
  translatedText: string,
) {
  if (language === "en") {
    return translatedText;
  }

  return adminText?.trim() || translatedText;
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
  const heroBackgroundImage = getImageUrl(
    heroImageUrl,
    heroImage,
  );

  const navbarLogo = getImageUrl(logoUrl, logo);

  const displayedHeroEyebrow = getLocalizedText(
    language,
    heroEyebrow,
    t.heroEyebrow,
  );

  const displayedHeroTitle = getLocalizedText(
    language,
    heroTitle,
    t.heroTitle,
  );

  const displayedHeroText = getLocalizedText(
    language,
    heroText,
    t.heroText,
  );

  const displayedPrimaryButtonText = getLocalizedText(
    language,
    heroPrimaryButtonText,
    t.callButton,
  );

  const displayedSecondaryButtonText = getLocalizedText(
    language,
    heroSecondaryButtonText,
    t.menuButton,
  );

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(11, 45, 92, 0.58),
            rgba(7, 27, 56, 0.82)
          ),
          url(${heroBackgroundImage})
        `,
      }}
    >
      <nav
        className="navbar"
        aria-label={
          language === "sv"
            ? "Huvudnavigation"
            : "Main navigation"
        }
      >
        <a
          href="/"
          className="brand"
          aria-label={
            language === "sv"
              ? "La Fornettos startsida"
              : "La Fornetto home page"
          }
        >
          <img
            src={navbarLogo}
            alt="La Fornetto"
            className="navbar-logo"
          />
        </a>

        <div className="nav-links">
          <a href="#news">{t.navNews}</a>
          <a href="/meny">{t.navMenu}</a>
          <a href="#lunch">{t.navLunch}</a>
          <a href="#contact">{t.navContact}</a>
        </div>

        <div className="language-area">
          <div
            className="language-switcher"
            aria-label={
              language === "sv"
                ? "Välj språk"
                : "Select language"
            }
          >
            <button
              type="button"
              onClick={() => setLanguage("sv")}
              disabled={language === "sv"}
              aria-pressed={language === "sv"}
            >
              SV
            </button>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              disabled={language === "en"}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <img
            src={swedenFlag}
            alt=""
            aria-hidden="true"
            className="sweden-flag"
          />
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">
          {displayedHeroEyebrow}
        </p>

        <h1>{displayedHeroTitle}</h1>

        <p>{displayedHeroText}</p>

        <div className="hero-buttons">
          <a
            className="primary-btn"
            href="tel:+462682120"
          >
            {displayedPrimaryButtonText}
          </a>

          <a
            className="secondary-btn"
            href="/meny"
          >
            {displayedSecondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}