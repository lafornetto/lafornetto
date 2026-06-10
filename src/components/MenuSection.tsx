import { menuCategories } from "../data/menuData";
import type { Language, MenuCategory } from "../data/menuData";

type MenuSectionProps = {
  language: Language;
};

export function MenuSection({ language }: MenuSectionProps) {
  const renderCategory = (category: MenuCategory) => (
    <article className="menu-card" key={category.title.sv}>
      <h3>{category.title[language]}</h3>

      {category.items.map((item, index) => (
        <div className="menu-item" key={item.name.sv}>
          <div>
            <h4>
              {category.title.sv === "Pizzor" ? `${index + 1}. ` : ""}
              {item.name[language]}
            </h4>

            <p>{item.description[language]}</p>
          </div>

          <strong>{item.price}</strong>
        </div>
      ))}
    </article>
  );

  return (
    <section id="menu" className="section">
      <div className="menu-grid">
        <div className="menu-column">
          {menuCategories.slice(0, 1).map(renderCategory)}
        </div>

        <div className="menu-column">
          {menuCategories.slice(1).map(renderCategory)}
        </div>
      </div>
    </section>
  );
}