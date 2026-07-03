type NewsSectionProps = {
  language: "sv" | "en";
};

export function NewsSection({ language }: NewsSectionProps) {
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

  return (
    <section id="news" className="news-section">
      <div className="news-content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>

        <div className="news-text">
          <p>{content.intro}</p>
          <p>{content.pizza}</p>
          <p>{content.kebab}</p>
          <p>{content.grill}</p>
          <p>{content.extras}</p>
        </div>
      </div>
    </section>
  );
}