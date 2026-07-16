import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { MenuSection } from "../components/MenuSection";
import { Footer } from "../components/Footer";

type MenuPageProps = {
  language: "sv" | "en";
  setLanguage: Dispatch<SetStateAction<"sv" | "en">>;
  t: {
    menuPageBack: string;
    menuPageEyebrow: string;
    menuPageTitle: string;
    menuPageText: string;
    menuDownloadInfo: string;

    footerCopyright: string;
    footerQrText: string;
    footerQrAlt: string;
  };
};

export function MenuPage({ language, setLanguage, t }: MenuPageProps) {
  return (
    <>
      <section className="menu-page-hero">
        <div className="language-switcher">
          <button onClick={() => setLanguage("sv")} disabled={language === "sv"}>
            SV
          </button>

          <button onClick={() => setLanguage("en")} disabled={language === "en"}>
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
          Ladda ner avhämtningsmeny
        </a>

        <p className="menu-download-info">{t.menuDownloadInfo}</p>

        <div className="menu-information">
          <h2>Allergier och köttets ursprung</h2>

          <p>
            Har du frågor om allergener eller köttets ursprung? Fråga gärna
            personalen.
          </p>
        </div>
      </section>

      <section className="food-control-section">
        <p className="eyebrow">Trygg matservering</p>

        <h2>Livsmedelskontroll utan avvikelse</h2>

        <p>
          La Fornetto kontrollerades av Älvkarleby kommun den 20 maj 2026.
          Kontrollen genomfördes utan avvikelse.
        </p>

        <a
          href="/documents/livsmedelskontroll.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="food-control-button"
        >
          Visa livsmedelskontroll
        </a>
      </section>

      <MenuSection language={language} />

      <Footer t={t} />
    </>
  );
}