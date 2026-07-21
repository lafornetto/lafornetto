import { useEffect, useState } from "react";
import type { Language } from "../data/menuData";

import { MENU_API_URL } from "../config/api";
import { useCart } from "../context/CartContext";

const RESTAURANT_ID = 1;
const FAMILY_PIZZA_DISCOUNT = 30;

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

type SizeOption = {
  size: string;
  price: number;
};

export function MenuSection({ language }: MenuSectionProps) {
  const [menuCategories, setMenuCategories] = useState<
    PublicMenuCategory[]
  >([]);

  const [selectedSizes, setSelectedSizes] = useState<
    Record<number, string>
  >({});

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { addItem } = useCart();

  useEffect(() => {
    async function loadMenu() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          `${MENU_API_URL}/api/restaurants/${RESTAURANT_ID}/menu`,
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta menyn.");
        }

        const data: PublicMenuCategory[] =
          await response.json();

        setMenuCategories(data);
      } catch {
        setErrorMessage(
          "Menyn kunde inte laddas just nu. Försök igen om en stund.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, []);

  function normalizeText(value: string) {
    return value.trim().toLowerCase();
  }

  function isPizzaCategory(category: PublicMenuCategory) {
    return normalizeText(category.name) === "pizzor";
  }

  function getExistingSizeOptions(
    item: PublicMenuItem,
  ): SizeOption[] {
    if (!item.priceText) {
      return [];
    }

    /*
      Känner igen exempelvis:
      S 160 kr / M 220 kr / L 310 kr
    */
    const matches = [
      ...item.priceText.matchAll(
        /\b(S|M|L)\s*(\d+(?:[.,]\d+)?)\s*kr\b/gi,
      ),
    ];

    return matches.map((match) => ({
      size: match[1].toUpperCase(),
      price: Number(match[2].replace(",", ".")),
    }));
  }

  function getOrderOptions(
    item: PublicMenuItem,
    belongsToPizzaCategory: boolean,
  ): SizeOption[] {
    const existingSizeOptions =
      getExistingSizeOptions(item);

    /*
      Amigo och Chicago har redan S, M och L.
      Då används bara dessa alternativ.
    */
    if (existingSizeOptions.length > 0) {
      return existingSizeOptions;
    }

    /*
      Endast vanliga pizzor får alternativen
      Vanlig och Familj.
    */
    if (
      !belongsToPizzaCategory ||
      item.price <= 0
    ) {
      return [];
    }

    const familyPrice =
      item.price * 3 - FAMILY_PIZZA_DISCOUNT;

    return [
      {
        size: "Vanlig",
        price: item.price,
      },
      {
        size: "Familj",
        price: familyPrice,
      },
    ];
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  }

  function getRegularPriceText(item: PublicMenuItem) {
    return item.priceText || formatPrice(item.price);
  }

  function handleSizeChange(
    menuItemId: number,
    size: string,
  ) {
    setSelectedSizes((currentSizes) => ({
      ...currentSizes,
      [menuItemId]: size,
    }));
  }

  function getSelectedSize(
    item: PublicMenuItem,
    options: SizeOption[],
  ) {
    const manuallySelectedSize =
      selectedSizes[item.id];

    if (manuallySelectedSize) {
      return manuallySelectedSize;
    }

    /*
      Vanlig pizza väljs automatiskt.
      S/M/L kräver att kunden gör ett aktivt val.
    */
    const regularOption = options.find(
      (option) => option.size === "Vanlig",
    );

    return regularOption?.size;
  }

  function handleAddToCart(
    item: PublicMenuItem,
    belongsToPizzaCategory: boolean,
  ) {
    const options = getOrderOptions(
      item,
      belongsToPizzaCategory,
    );

    if (options.length > 0) {
      const selectedSize = getSelectedSize(
        item,
        options,
      );

      const selectedOption = options.find(
        (option) => option.size === selectedSize,
      );

      if (!selectedOption) {
        return;
      }

      addItem({
        menuItemId: item.id,
        name: item.name,
        selectedSize: selectedOption.size,
        price: selectedOption.price,
        imageUrl: item.imageUrl,
      });

      return;
    }

    addItem({
      menuItemId: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
    });
  }

  function renderItemOrder(
  item: PublicMenuItem,
  belongsToPizzaCategory: boolean,
) {
  const options = getOrderOptions(
    item,
    belongsToPizzaCategory,
  );

  const selectedSize = getSelectedSize(
    item,
    options,
  );

  if (options.length === 0) {
    return (
      <div className="menu-item-order">
        <strong>{getRegularPriceText(item)}</strong>

        <button
          type="button"
          className="menu-add-button"
          onClick={() =>
            handleAddToCart(
              item,
              belongsToPizzaCategory,
            )
          }
        >
          Lägg i kundvagn
        </button>
      </div>
    );
  }

  const hasFamilyOption =
    options.some(
      (option) => option.size === "Vanlig",
    ) &&
    options.some(
      (option) => option.size === "Familj",
    );

  /*
    Vanliga pizzor får ett kompakt val
    mellan Vanlig och Familj.
  */
  if (hasFamilyOption) {
    return (
      <div className="menu-item-order menu-item-order-family">
        <label className="menu-family-select">
          <span>Storlek</span>

          <select
            value={selectedSize ?? "Vanlig"}
            onChange={(event) =>
              handleSizeChange(
                item.id,
                event.target.value,
              )
            }
          >
            {options.map((option) => (
              <option
                key={option.size}
                value={option.size}
              >
                {option.size} –{" "}
                {formatPrice(option.price)}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          className="menu-add-button"
          onClick={() =>
            handleAddToCart(
              item,
              belongsToPizzaCategory,
            )
          }
        >
          Lägg i kundvagn
        </button>
      </div>
    );
  }

  /*
    Pizzor med S, M och L behåller
    sina storleksalternativ.
  */
    return (
      <div className="menu-item-order menu-item-order-variants">
        <span className="menu-size-label">
          Välj storlek
        </span>

        <div className="menu-size-options">
          {options.map((option) => (
            <label
              className="menu-size-option"
              key={option.size}
            >
              <input
                type="radio"
                name={`size-${item.id}`}
                value={option.size}
                checked={
                  selectedSize === option.size
                }
                onChange={() =>
                  handleSizeChange(
                    item.id,
                    option.size,
                  )
                }
              />

              <span>
                {option.size} –{" "}
                {formatPrice(option.price)}
              </span>
            </label>
          ))}
        </div>

        <button
          type="button"
          className="menu-add-button"
          disabled={!selectedSize}
          onClick={() =>
            handleAddToCart(
              item,
              belongsToPizzaCategory,
            )
          }
        >
          {selectedSize
            ? "Lägg i kundvagn"
            : "Välj storlek först"}
        </button>
      </div>
    );
  }

  function renderCategory(
    category: PublicMenuCategory,
  ) {
    const belongsToPizzaCategory =
      isPizzaCategory(category);

    return (
      <article
        className="menu-card"
        key={category.id}
      >
        <h3>{category.name}</h3>

        {category.description && (
          <p className="menu-intro">
            {category.description}
          </p>
        )}

        {category.items.map((item) => (
          <div
            className="menu-item"
            key={item.id}
          >
            {item.imageUrl && (
              <img
                className="menu-item-image"
                src={item.imageUrl}
                alt={item.name}
              />
            )}

            <div className="menu-item-content">
              <div className="menu-item-information">
                <h4>{item.name}</h4>

                {item.description && (
                  <p>{item.description}</p>
                )}

                {item.allergens.length > 0 && (
                  <p className="menu-allergens">
                    Allergener:{" "}
                    {item.allergens
                      .map(
                        (allergen) =>
                          allergen.name,
                      )
                      .join(", ")}
                  </p>
                )}
              </div>

              {renderItemOrder(
                item,
                belongsToPizzaCategory,
              )}
            </div>
          </div>
        ))}
      </article>
    );
  }

  if (isLoading) {
    return (
      <section
        id="menu"
        className="section"
      >
        <p className="menu-status">
          Hämtar menyn...
        </p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section
        id="menu"
        className="section"
      >
        <p className="menu-status menu-status-error">
          {errorMessage}
        </p>
      </section>
    );
  }

  const pizzaCategory = menuCategories.find(
    isPizzaCategory,
  );

  const otherCategories =
    menuCategories.filter(
      (category) =>
        category.id !== pizzaCategory?.id,
    );

  return (
    <section
      id="menu"
      className="section"
    >
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
          Det finns ingen meny att visa ännu.
        </p>
      )}

      {language === "en" && (
        <p className="menu-language-note">
          Menyn visas för närvarande på svenska.
        </p>
      )}
    </section>
  );
}