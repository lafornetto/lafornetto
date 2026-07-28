import type { Translation } from "../data/translations";

type Language = "sv" | "en";

type AboutSectionProps = {
  language: Language;
  t: Translation;

  aboutEyebrow?: string | null;
  aboutTitle?: string | null;
  aboutText?: string | null;
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

export function AboutSection({
  language,
  t,
  aboutEyebrow,
  aboutTitle,
  aboutText,
}: AboutSectionProps) {
  const displayedEyebrow = getLocalizedText(
    language,
    aboutEyebrow,
    t.aboutEyebrow,
  );

  const displayedTitle = getLocalizedText(
    language,
    aboutTitle,
    t.aboutTitle,
  );

  const displayedText =
    language === "en"
      ? [t.aboutTextFirst, t.aboutTextSecond]
      : aboutText?.trim()
        ? aboutText
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
        : [t.aboutTextFirst, t.aboutTextSecond];

  return (
    <section className="about-section">
      <p className="eyebrow">{displayedEyebrow}</p>

      <h2>{displayedTitle}</h2>

      {Array.isArray(displayedText) ? (
        displayedText.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`}>{paragraph}</p>
        ))
      ) : (
        <p>{displayedText}</p>
      )}
    </section>
  );
}