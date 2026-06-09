import { menuCategories } from "../data/menuData";

export function MenuSection() {
  const renderCategory = (category: (typeof menuCategories)[number]) => (
    <article className="menu-card" key={category.title}>
      <h3>{category.title}</h3>

      {category.items.map((item, index) => (
        <div className="menu-item" key={item.name}>
          <div>
            <h4>
              {category.title === "Pizzor" ? `${index + 1}. ` : ""}
              {item.name}
            </h4>
            <p>{item.description}</p>
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