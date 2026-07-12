import hamburgareImage from "../assets/images/Hamburgare.png";
import kycklingkebabSalladImage from "../assets/images/Kycklingkebab sallad.png";
import pizzaImage from "../assets/images/Pizza.png";

const API_URL = import.meta.env.VITE_API_URL;

type NewsSectionProps = {
  language: "sv" | "en";
  newsImageOneUrl?: string | null;
  newsImageTwoUrl?: string | null;
  newsImageThreeUrl?: string | null;

  newsEyebrow?: string | null;
  newsTitle?: string | null;
  newsText?: string | null;
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

export function NewsSection({
  language,
  newsImageOneUrl,
  newsImageTwoUrl,
  newsImageThreeUrl,
  newsEyebrow,
  newsTitle,
  newsText,
}: NewsSectionProps) {
  const content =
    language === "sv"
      ? {
          eyebrow: "Nyheter",
          title: "Nya på menyn",
          intro: "Vi har lagt till flera nya rätter på menyn:",
          pizza: "Pizza: Al Funghi, Mia Special och Kycklingkebab pizza.",
          kebab: "Mixtallrik, Falafel med bröd och Kycklingkebabsallad.",
          grill: "Grillrätter: Superstar, Bigstar och Kycklingburgare.",
          extras: "Jalapeño peppers, chilicheese och mozzarella sticks.",
        }
      : {
          eyebrow: "News",
          title: "New on the menu",
          intro: "We have added several new dishes to the menu:",
          pizza: "Pizza: Al Funghi, Mia Special and Chicken kebab pizza.",
          kebab: "Mixed plate, Falafel with bread and Chicken kebab salad.",
          grill: "Grill dishes: Superstar, Bigstar and Chicken burger.",
          extras: "Jalapeño peppers, chilicheese and mozzarella sticks.",
        };

  const firstImage = getImageUrl(newsImageOneUrl, hamburgareImage);
  const secondImage = getImageUrl(newsImageTwoUrl, kycklingkebabSalladImage);
  const thirdImage = getImageUrl(newsImageThreeUrl, pizzaImage);

  const newsTextLines = newsText
    ?.split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <section id="news" className="news-section">
      <div className="news-content">
        <p className="eyebrow">{newsEyebrow || content.eyebrow}</p>

        <h2>{newsTitle || content.title}</h2>

        <div className="news-text">
          {newsTextLines && newsTextLines.length > 0 ? (
            newsTextLines.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))
          ) : (
            <>
              <p>{content.intro}</p>
              <p>{content.pizza}</p>
              <p>{content.kebab}</p>
              <p>{content.grill}</p>
              <p>{content.extras}</p>
            </>
          )}
        </div>

        <div className="news-gallery">
          <img src={firstImage} alt="Nyhetsbild 1 från La Fornetto" />

          <img src={secondImage} alt="Nyhetsbild 2 från La Fornetto" />

          <img src={thirdImage} alt="Nyhetsbild 3 från La Fornetto" />
        </div>
      </div>
    </section>
  );
}