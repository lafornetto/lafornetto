import { menuCategories } from "../data/menuData";
import type { Language, MenuCategory } from "../data/menuData";

type MenuSectionProps = {
  language: Language;
};

export function MenuSection({ language }: MenuSectionProps) {
  const renderCategory = (category: MenuCategory) => (
    <article className="menu-card" key={category.title.sv}>
      <h3>{category.title[language]}</h3>

      {category.intro && (
        <p className="menu-intro">{category.intro[language]}</p>
      )}

      {category.items.map((item, index) => (
        <div className="menu-item" key={item.name.sv}>
          <div>
            <h4>
              {category.title.sv === "Pizzor" ? `${index + 1}. ` : ""}
              {item.name[language]}
            </h4>

            {item.description[language] ? (
              <p>{item.description[language]}</p>
            ) : null}
          </div>

          <strong>{item.price}</strong>
        </div>
      ))}
    </article>
  );

  const pizzaCategory = menuCategories[0];
  const otherCategories = menuCategories.slice(1);

  return (
    <section id="menu" className="section">
      <div className="pizza-menu">
        {renderCategory(pizzaCategory)}
      </div>

      <div className="menu-grid">
        {otherCategories.map(renderCategory)}
      </div>
    </section>
  );
}