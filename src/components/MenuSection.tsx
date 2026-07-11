import { useEffect, useState } from "react";
import type { Language } from "../data/menuData";

const API_URL = "http://localhost:5246";
const RESTAURANT_ID = 1;

type PublicAllergen = {
  id: number;
  name: string;
  code: string;
};

type PublicMenuItem = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  priceText: string | null;
  imageUrl: string | null;
  sortOrder: number;
  allergens: PublicAllergen[];
};

type PublicMenuCategory = {
  id: number;
  name: string;
  description: string | null;
  sortOrder: number;
  items: PublicMenuItem[];
};

type MenuSectionProps = {
  language: Language;
};

export function MenuSection({ language }: MenuSectionProps) {
  const [menuCategories, setMenuCategories] = useState<PublicMenuCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadMenu() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          `${API_URL}/api/restaurants/${RESTAURANT_ID}/menu`
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta menyn.");
        }

        const data: PublicMenuCategory[] = await response.json();
        setMenuCategories(data);
      } catch {
        setErrorMessage(
          "Menyn kunde inte laddas just nu. Försök igen om en stund."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, []);

  function formatPrice(item: PublicMenuItem) {
    return item.priceText || `${item.price} kr`;
  }

  function renderCategory(category: PublicMenuCategory) {
    return (
      <article className="menu-card" key={category.id}>
        <h3>{category.name}</h3>

        {category.description && (
          <p className="menu-intro">{category.description}</p>
        )}

        {category.items.map((item) => (
          <div className="menu-item" key={item.id}>
            {item.imageUrl && (
              <img
                className="menu-item-image"
                src={item.imageUrl}
                alt={item.name}
              />
            )}

            <div className="menu-item-content">
              <div>
                <h4>{item.name}</h4>

                {item.description && <p>{item.description}</p>}

                {item.allergens.length > 0 && (
                  <p className="menu-allergens">
                    Allergener:{" "}
                    {item.allergens.map((allergen) => allergen.name).join(", ")}
                  </p>
                )}
              </div>

              <strong>{formatPrice(item)}</strong>
            </div>
          </div>
        ))}
      </article>
    );
  }

  if (isLoading) {
    return (
      <section id="menu" className="section">
        <p className="menu-status">Hämtar menyn...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section id="menu" className="section">
        <p className="menu-status menu-status-error">{errorMessage}</p>
      </section>
    );
  }

  const pizzaCategory = menuCategories.find(
    (category) => category.name.toLowerCase() === "pizzor"
  );

  const otherCategories = menuCategories.filter(
    (category) => category.id !== pizzaCategory?.id
  );

  return (
    <section id="menu" className="section">
      {pizzaCategory && <div className="pizza-menu">{renderCategory(pizzaCategory)}</div>}

      <div className="menu-grid">{otherCategories.map(renderCategory)}</div>

      {menuCategories.length === 0 && (
        <p className="menu-status">Det finns ingen meny att visa ännu.</p>
      )}

      {language === "en" && (
        <p className="menu-language-note">
          The menu is currently shown in Swedish.
        </p>
      )}
    </section>
  );
}
