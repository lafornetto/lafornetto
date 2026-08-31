import type { Dispatch, SetStateAction } from "react";

import dalalvenImage from "../assets/images/history/dalalven.jpg";
import alvkarlebyfallenImage from "../assets/images/history/alvkarlebyfallen.jpg";
import carlXiiiBroImage from "../assets/images/history/carl-xiii-bro.jpg";

type Language = "sv" | "en";

type AlvkarlebyPageProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export function AlvkarlebyPage({
  language,
  setLanguage,
}: AlvkarlebyPageProps) {
  return (
    <main className="alvkarleby-page">
      <section className="menu-page-hero alvkarleby-page-hero">
        <a href="/" className="back-link">
          ← {language === "sv" ? "Till startsidan" : "Back to home"}
        </a>

        <p className="eyebrow">
          {language === "sv" ? "Vår hembygd" : "Our local area"}
        </p>

        <h1>
          {language === "sv"
            ? "Älvkarlebys historia"
            : "The history of Älvkarleby"}
        </h1>

        <p>
          {language === "sv"
            ? "Upptäck historien, naturen och platserna som har format Älvkarleby genom århundradena."
            : "Discover the history, nature and places that have shaped Älvkarleby through the centuries."}
        </p>

        <div className="language-switcher">
          <button
            type="button"
            onClick={() => setLanguage("sv")}
            disabled={language === "sv"}
          >
            SV
          </button>

          <button
            type="button"
            onClick={() => setLanguage("en")}
            disabled={language === "en"}
          >
            EN
          </button>
        </div>
      </section>

      <section className="alvkarleby-history-page-content">
        <div className="alvkarleby-history-card">
          <img
            src={dalalvenImage}
            alt={
              language === "sv"
                ? "Dalälven i Älvkarleby"
                : "The Dalälven river in Älvkarleby"
            }
            className="alvkarleby-history-image"
          />

          <p className="eyebrow">
            {language === "sv" ? "Dalälven" : "The Dalälven river"}
          </p>

          <h2>
            {language === "sv"
              ? "En plats formad av älven"
              : "A place shaped by the river"}
          </h2>

          <p>
            {language === "sv"
              ? "Älvkarleby har vuxit fram kring Dalälven, som under århundraden har haft stor betydelse för människorna, naturen och utvecklingen i området."
              : "Älvkarleby developed around the Dalälven river, which for centuries has played an important role in the lives of the people, the landscape and the development of the area."}
          </p>

          <p>
            {language === "sv"
              ? "Älven har varit viktig för fiske, transporter, kraftproduktion och det lokala näringslivet. Än i dag är Dalälven en av de mest karakteristiska delarna av Älvkarleby."
              : "The river has been important for fishing, transport, hydropower and local industry. Even today, Dalälven remains one of the most distinctive parts of Älvkarleby."}
          </p>
        </div>

        <div className="alvkarleby-history-card">
          <div className="alvkarleby-history-gallery">
            <img
              src={alvkarlebyfallenImage}
              alt={
                language === "sv"
                  ? "Älvkarlebyfallen"
                  : "The Älvkarleby falls"
              }
            />

            <img
              src={carlXiiiBroImage}
              alt={
                language === "sv"
                  ? "Carl XIII:s bro i Älvkarleby"
                  : "Carl XIII's bridge in Älvkarleby"
              }
            />
          </div>

          <p className="eyebrow">
            {language === "sv"
              ? "Historiska platser"
              : "Historic places"}
          </p>

          <h2>
            {language === "sv"
              ? "Laxön, fallen och Carl XIII:s bro"
              : "Laxön, the falls and Carl XIII's bridge"}
          </h2>

          <p>
            {language === "sv"
              ? "Runt Älvkarleby finns flera platser som berättar om ortens historia. Laxön, Älvkarlebyfallen och Carl XIII:s bro är några av de mest välkända."
              : "Around Älvkarleby there are several places that tell the story of the area. Laxön, the Älvkarleby falls and Carl XIII's bridge are among the best known."}
          </p>

          <p>
            {language === "sv"
              ? "Här möts natur, industrihistoria och äldre bebyggelse på ett sätt som gör området unikt."
              : "Here, nature, industrial history and older buildings come together in a way that makes the area unique."}
          </p>
        </div>

        <div className="alvkarleby-history-card">
          <p className="eyebrow">
            La Fornetto
          </p>

          <h2>
            {language === "sv"
              ? "En del av Älvkarleby"
              : "Part of Älvkarleby"}
          </h2>

          <p>
            {language === "sv"
              ? "La Fornetto är stolta över att vara en del av Älvkarleby och den traditionsrika miljö som omger restaurangen."
              : "La Fornetto is proud to be part of Älvkarleby and the historic surroundings of the local area."}
          </p>

          <p>
            {language === "sv"
              ? "Vi välkomnar både ortsbor och besökare som vill äta gott och samtidigt uppleva en plats med lång historia."
              : "We welcome both local residents and visitors who want to enjoy good food while experiencing a place with a long history."}
          </p>
        </div>

        <div className="alvkarleby-history-back">
          <a href="/" className="primary-btn">
            {language === "sv"
              ? "Tillbaka till La Fornetto"
              : "Back to La Fornetto"}
          </a>
        </div>
      </section>
    </main>
  );
}