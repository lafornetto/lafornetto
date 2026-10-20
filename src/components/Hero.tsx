
import { useState } from "react";
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
  navAlvkarleby: string;
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
  fallback: string
) {
  if (!imageUrl?.trim()) {
    return fallback;
  }

  if (
    imageUrl.startsWith("http://") ||
    imageUrl.startsWith("https://")
  ) {
    return imageUrl;
  }

  if (!API_URL) {
    return imageUrl;
  }

  return `${API_URL.replace(/\/$/, "")}/${imageUrl.replace(/^\//, "")}`;
}

function getLocalizedText(
  language: Language,
  adminText: string | null | undefined,
  translatedText: string
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Bilden hämtas från adminpanelen.
  // Den lokala bilden används som reserv.
  const heroRightImage = getImageUrl(
    heroImageUrl,
    heroImage
  );

  const navbarLogo = getImageUrl(
    logoUrl,
    logo
  );

  // Texter från adminpanelen och språkfiler
  const displayedHeroEyebrow = getLocalizedText(
    language,
    heroEyebrow,
    t.heroEyebrow
  );

  const displayedHeroTitle = getLocalizedText(
    language,
    heroTitle,
    t.heroTitle
  );

  const displayedHeroText = getLocalizedText(
    language,
    heroText,
    t.heroText
  );

  const displayedPrimaryButtonText = getLocalizedText(
    language,
    heroPrimaryButtonText,
    t.callButton
  );

  const displayedSecondaryButtonText = getLocalizedText(
    language,
    heroSecondaryButtonText,
    t.menuButton
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section className="hero premium-hero">
      <div className="hero-overlay" aria-hidden="true" />

      {/* NAVIGATION */}
      <nav
        className="navbar premium-navbar"
        aria-label={
          language === "sv"
            ? "Huvudnavigation"
            : "Main navigation"
        }
      >
        {/* LOGOTYP */}
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

        {/* NAVIGATIONSLÄNKAR */}
        <div
          id="hero-navigation"
          className={`nav-links premium-nav-links ${
            mobileMenuOpen ? "mobile-nav-open" : ""
          }`}
        >
          <a href="#news" onClick={closeMobileMenu}>
            {t.navNews}
          </a>

          <a href="/meny" onClick={closeMobileMenu}>
            {t.navMenu}
          </a>

          <a href="#lunch" onClick={closeMobileMenu}>
            {t.navLunch}
          </a>

          <a href="/alvkarleby" onClick={closeMobileMenu}>
            {t.navAlvkarleby}
          </a>

          <a href="#contact" onClick={closeMobileMenu}>
            {t.navContact}
          </a>
        </div>

        {/* SPRÅKVÄXLING */}
        <div className="language-area premium-language-area">
          <div
            className="language-switcher"
            role="group"
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

        {/* HAMBURGERMENY FÖR MOBIL */}
        <button
          type="button"
          className="premium-menu-toggle"
          aria-label={
            language === "sv"
              ? "Öppna eller stäng menyn"
              : "Open or close menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="hero-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* HERO-SEKTION */}
      <div className="hero-inner">
        <div className="hero-layout">

          {/* VÄNSTER SIDA - TEXT */}
          <div className="hero-copy">
            <p className="eyebrow">
              {displayedHeroEyebrow}
            </p>

            <h1>
              {displayedHeroTitle}
            </h1>

            <p className="hero-description">
              {displayedHeroText}
            </p>

            {/* KNAPPAR */}
            <div className="hero-buttons premium-hero-buttons">
              <a
                className="primary-btn"
                href="tel:+462682120"
              >
                {displayedPrimaryButtonText}
              </a>

              <a
                className="secondary-btn light-btn"
                href="/meny"
              >
                {displayedSecondaryButtonText}
              </a>
            </div>
          </div>

          {/* HÖGER SIDA - PIZZABILD */}
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={heroRightImage}
                alt={
                  language === "sv"
                    ? "La Fornettos pizza och färska ingredienser"
                    : "La Fornetto pizza and fresh ingredients"
                }
                className="hero-pizza-image"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
