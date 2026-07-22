import type { Translation } from "../data/translations";

import hamburgareImage from "../assets/images/Hamburgare.png";
import kycklingkebabSalladImage from "../assets/images/Kycklingkebab sallad.png";
import pizzaImage from "../assets/images/Pizza.png";

const API_URL = import.meta.env.VITE_API_URL;

type Language = "sv" | "en";

type NewsSectionProps = {
  language: Language;
  t: Translation;

  newsImageOneUrl?: string | null;
  newsImageTwoUrl?: string | null;
  newsImageThreeUrl?: string | null;

  newsEyebrow?: string | null;
  newsTitle?: string | null;
  newsText?: string | null;
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

export function NewsSection({
  language,
  t,
  newsImageOneUrl,
  newsImageTwoUrl,
  newsImageThreeUrl,
  newsEyebrow,
  newsTitle,
  newsText,
}: NewsSectionProps) {
  const firstImage = getImageUrl(
    newsImageOneUrl,
    hamburgareImage,
  );

  const secondImage = getImageUrl(
    newsImageTwoUrl,
    kycklingkebabSalladImage,
  );

  const thirdImage = getImageUrl(
    newsImageThreeUrl,
    pizzaImage,
  );

  const displayedEyebrow = getLocalizedText(
    language,
    newsEyebrow,
    t.newsEyebrow,
  );

  const displayedTitle = getLocalizedText(
    language,
    newsTitle,
    t.newsTitle,
  );

  const displayedText = getLocalizedText(
    language,
    newsText,
    t.newsText,
  );

  const newsTextLines = displayedText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <section id="news" className="news-section">
      <div className="news-content">
        <p className="eyebrow">{displayedEyebrow}</p>

        <h2>{displayedTitle}</h2>

        <div className="news-text">
          {newsTextLines.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </div>

        <div className="news-gallery">
          <img
            src={firstImage}
            alt={
              language === "sv"
                ? "Nyhetsbild 1 från La Fornetto"
                : "News image 1 from La Fornetto"
            }
          />

          <img
            src={secondImage}
            alt={
              language === "sv"
                ? "Nyhetsbild 2 från La Fornetto"
                : "News image 2 from La Fornetto"
            }
          />

          <img
            src={thirdImage}
            alt={
              language === "sv"
                ? "Nyhetsbild 3 från La Fornetto"
                : "News image 3 from La Fornetto"
            }
          />
        </div>
      </div>
    </section>
  );
}