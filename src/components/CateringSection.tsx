import type { Translation } from "../data/translations";

type Language = "sv" | "en";

type CateringSectionProps = {
  language: Language;
  t: Translation;

  cateringEyebrow?: string | null;
  cateringTitle?: string | null;
  cateringTextOne?: string | null;
  cateringTextTwo?: string | null;
  cateringContactButtonText?: string | null;
};

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

export function CateringSection({
  language,
  t,
  cateringEyebrow,
  cateringTitle,
  cateringTextOne,
  cateringTextTwo,
  cateringContactButtonText,
}: CateringSectionProps) {
  const displayedEyebrow = getLocalizedText(
    language,
    cateringEyebrow,
    t.cateringEyebrow,
  );

  const displayedTitle = getLocalizedText(
    language,
    cateringTitle,
    t.cateringTitle,
  );

  const displayedTextOne = getLocalizedText(
    language,
    cateringTextOne,
    t.cateringTextOne,
  );

  const displayedTextTwo = getLocalizedText(
    language,
    cateringTextTwo,
    t.cateringTextTwo,
  );

  const displayedContactButtonText = getLocalizedText(
    language,
    cateringContactButtonText,
    t.cateringContactButton,
  );

  return (
    <section className="catering-wrapper">
      <div className="catering-section">
        <p className="eyebrow">{displayedEyebrow}</p>

        <h2>{displayedTitle}</h2>

        <p>{displayedTextOne}</p>

        <p>{displayedTextTwo}</p>

        <div className="catering-actions">
          <a className="primary-btn" href="#contact">
            {displayedContactButtonText}
          </a>

          <a
            href="/documents/la-fornetto-bestallningsblankett.pdf"
            download
            className="catering-download-button"
          >
            {t.cateringDownloadButton}
          </a>
        </div>
      </div>
    </section>
  );
}