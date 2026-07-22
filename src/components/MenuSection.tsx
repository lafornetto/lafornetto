import { useEffect, useState } from "react";
import type { Language } from "../data/menuData";

const API_URL = import.meta.env.VITE_API_URL;
const RESTAURANT_ID = 1;

type PublicAllergen = {
  id: number;
  name: string;
  code: string;
};

type PublicMenuItem = {
  id: number;
  name: string;
  nameEn: string | null;
  description: string | null;
  descriptionEn: string | null;
  price: number;
  priceText: string | null;
  imageUrl: string | null;
  sortOrder: number;
  allergens: PublicAllergen[];
};

type PublicMenuCategory = {
  id: number;
  name: string;
  nameEn: string | null;
  description: string | null;
  descriptionEn: string | null;
  sortOrder: number;
  items: PublicMenuItem[];
};

type MenuSectionProps = {
  language: Language;
};

const allergenTranslations: Record<string, string> = {
  gluten: "Gluten",
  mjölk: "Milk",
  ägg: "Egg",
  nötter: "Nuts",
  vegetarisk: "Vegetarian",
  vegan: "Vegan",
  stark: "Spicy",
  halal: "Halal",
};

function getLocalizedText(
  language: Language,
  swedishText: string | null | undefined,
  englishText: string | null | undefined
) {
  if (language === "en") {
    return englishText?.trim() || swedishText?.trim() || "";
  }

  return swedishText?.trim() || "";
}

function translateAllergen(name: string, language: Language) {
  if (language === "sv") {
    return name;
  }

  return allergenTranslations[name.toLowerCase()] ?? name;
}

export function MenuSection({ language }: MenuSectionProps) {
  const [menuCategories, setMenuCategories] = useState<
    PublicMenuCategory[]
  >([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function loadMenu() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(
          `${API_URL}/api/restaurants/${RESTAURANT_ID}/menu`
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta menyn.");
        }

        const data: PublicMenuCategory[] = await response.json();
        setMenuCategories(data);
      } catch (error) {
        console.error("Kunde inte hämta menyn:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, []);

  function formatPrice(item: PublicMenuItem) {
    if (item.priceText) {
      return item.priceText;
    }

    return language === "sv"
      ? `${item.price} kr`
      : `${item.price} SEK`;
  }

  function renderCategory(category: PublicMenuCategory) {
    const categoryName = getLocalizedText(
      language,
      category.name,
      category.nameEn
    );

    const categoryDescription = getLocalizedText(
      language,
      category.description,
      category.descriptionEn
    );

    return (
      <article className="menu-card" key={category.id}>
        <h3>{categoryName}</h3>

        {categoryDescription && (
          <p className="menu-intro">{categoryDescription}</p>
        )}

        {category.items.map((item) => {
          const itemName = getLocalizedText(
            language,
            item.name,
            item.nameEn
          );

          const itemDescription = getLocalizedText(
            language,
            item.description,
            item.descriptionEn
          );

          return (
            <div className="menu-item" key={item.id}>
              {item.imageUrl && (
                <img
                  className="menu-item-image"
                  src={item.imageUrl}
                  alt={itemName}
                />
              )}

              <div className="menu-item-content">
                <div>
                  <h4>{itemName}</h4>

                  {itemDescription && (
                    <p>{itemDescription}</p>
                  )}

                  {item.allergens.length > 0 && (
                    <p className="menu-allergens">
                      {language === "sv"
                        ? "Allergener:"
                        : "Allergens:"}{" "}
                      {item.allergens
                        .map((allergen) =>
                          translateAllergen(
                            allergen.name,
                            language
                          )
                        )
                        .join(", ")}
                    </p>
                  )}
                </div>

                <strong>{formatPrice(item)}</strong>
              </div>
            </div>
          );
        })}
      </article>
    );
  }

  if (isLoading) {
    return (
      <section id="menu" className="section">
        <p className="menu-status">
          {language === "sv"
            ? "Hämtar menyn..."
            : "Loading menu..."}
        </p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section id="menu" className="section">
        <p className="menu-status menu-status-error">
          {language === "sv"
            ? "Menyn kunde inte laddas just nu. Försök igen om en stund."
            : "The menu could not be loaded right now. Please try again shortly."}
        </p>
      </section>
    );
  }

  const pizzaCategory = menuCategories.find(
    (category) =>
      category.name.trim().toLowerCase() === "pizzor"
  );

  const otherCategories = menuCategories.filter(
    (category) => category.id !== pizzaCategory?.id
  );

  return (
    <section id="menu" className="section">
      {pizzaCategory && (
        <div className="pizza-menu">
          {renderCategory(pizzaCategory)}
        </div>
      )}

      <div className="menu-grid">
        {otherCategories.map(renderCategory)}
      </div>

      {menuCategories.length === 0 && (
        <p className="menu-status">
          {language === "sv"
            ? "Det finns ingen meny att visa ännu."
            : "There is no menu to display yet."}
        </p>
      )}
    </section>
  );
}