import type { Translation } from "../data/translations";

type Language = "sv" | "en";

type LunchSectionProps = {
  language: Language;
  t: Translation;

  lunchEyebrow?: string | null;
  lunchTitle?: string | null;
  lunchText?: string | null;

  lunchImageOneUrl: string;
  lunchImageTwoUrl: string;
  lunchImageThreeUrl: string;
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

export function LunchSection({
  language,
  t,
  lunchEyebrow,
  lunchTitle,
  lunchText,
  lunchImageOneUrl,
  lunchImageTwoUrl,
  lunchImageThreeUrl,
}: LunchSectionProps) {
  const displayedEyebrow = getLocalizedText(
    language,
    lunchEyebrow,
    t.lunchEyebrow,
  );

  const displayedTitle = getLocalizedText(
    language,
    lunchTitle,
    t.lunchTitle,
  );

  const displayedText = getLocalizedText(
    language,
    lunchText,
    t.lunchText,
  );

  const lunchTextLines = displayedText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <section id="lunch" className="lunch-section">
      <div className="lunch-content">
        <p className="eyebrow">{displayedEyebrow}</p>

        <h2>{displayedTitle}</h2>

        <div className="lunch-text">
          {lunchTextLines.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </div>
      </div>

      <div className="lunch-gallery-grid">
        <img
          src={lunchImageOneUrl}
          alt={
            language === "sv"
              ? "Lunchrätt från La Fornetto"
              : "Lunch dish from La Fornetto"
          }
        />

        <img
          src={lunchImageTwoUrl}
          alt={
            language === "sv"
              ? "Lunch från La Fornetto"
              : "Lunch from La Fornetto"
          }
        />

        <img
          src={lunchImageThreeUrl}
          alt={
            language === "sv"
              ? "Mat från La Fornetto"
              : "Food from La Fornetto"
          }
        />
      </div>
    </section>
  );
}