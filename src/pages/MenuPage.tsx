import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import type { Translation } from "../data/translations";

import { MenuSection } from "../components/MenuSection";
import { Footer } from "../components/Footer";

type Language = "sv" | "en";

type MenuPageProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: Translation;
};

export function MenuPage({
  language,
  setLanguage,
  t,
}: MenuPageProps) {
  return (
    <>
      <section className="menu-page-hero">
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

        <Link to="/" className="back-link">
          {t.menuPageBack}
        </Link>

        <p className="eyebrow">{t.menuPageEyebrow}</p>

        <h1>{t.menuPageTitle}</h1>

        <p>{t.menuPageText}</p>

        <a
          href="/documents/la-fornetto-avhamtningsmeny.pdf"
          download
          className="menu-download-button"
        >
          {t.menuDownloadButton}
        </a>

        <p className="menu-download-info">
          {t.menuDownloadInfo}
        </p>

        <div className="menu-information">
          <h2>{t.menuInformationTitle}</h2>

          <p>{t.menuInformationText}</p>
        </div>
      </section>

      <MenuSection language={language} />

      <Footer t={t} />
    </>
  );
}