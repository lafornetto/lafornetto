import { useEffect, useState } from "react";
import type { Language } from "../data/menuData";

import { MENU_API_URL } from "../config/api";
import { useCart } from "../context/CartContext";

const RESTAURANT_ID = 1;
const FAMILY_PIZZA_DISCOUNT = 30;
const CHILD_PIZZA_DISCOUNT = 10;
const GLUTEN_FREE_EXTRA_PRICE = 40;

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

type SizeOption = {
  size: string;
  price: number;
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
  englishText: string | null | undefined,
) {
  if (language === "en") {
    return englishText?.trim() || swedishText?.trim() || "";
  }

  return swedishText?.trim() || "";
}

function translateAllergen(
  name: string,
  language: Language,
) {
  if (language === "sv") {
    return name;
  }

  return allergenTranslations[name.toLowerCase()] ?? name;
}

export function MenuSection({
  language,
}: MenuSectionProps) {
  const [menuCategories, setMenuCategories] = useState<
    PublicMenuCategory[]
  >([]);

  const [selectedSizes, setSelectedSizes] = useState<
    Record<number, string>
  >({});

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    async function loadMenu() {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(
          `${MENU_API_URL}/api/restaurants/${RESTAURANT_ID}/menu`,
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta menyn.");
        }

        const data: PublicMenuCategory[] =
          await response.json();

        setMenuCategories(data);
      } catch (error) {
        console.error(
          "Kunde inte hämta menyn:",
          error,
        );

        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();
  }, []);

  function normalizeText(value: string) {
    return value.trim().toLowerCase();
  }

  function isPizzaCategory(
    category: PublicMenuCategory,
  ) {
    return normalizeText(category.name) === "pizzor";
  }

  function isFoldedPizza(item: PublicMenuItem) {
    const text = normalizeText(
      [
        item.name,
        item.nameEn,
        item.description,
        item.descriptionEn,
      ]
        .filter(Boolean)
        .join(" "),
    );

    return (
      text.includes("inbakad") ||
      text.includes("halvinbakad") ||
      text.includes("dubbelinbakad") ||
      text.includes("folded")
    );
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
      Pizzor som redan har S, M och L
      behåller endast dessa storlekar.
    */
    if (existingSizeOptions.length > 0) {
      return existingSizeOptions;
    }

    if (
      !belongsToPizzaCategory ||
      item.price <= 0
    ) {
      return [];
    }

    const childPrice =
      item.price - CHILD_PIZZA_DISCOUNT;

    const familyPrice =
      item.price * 3 - FAMILY_PIZZA_DISCOUNT;

    const options: SizeOption[] = [
    {
      size: "Barnpizza",
      price: childPrice,
    },
    {
      size: "Vanlig",
      price: item.price,
    },
  ];

  /*
    Inbakade, halvinbakade och dubbelinbakade
    pizzor får varken Familj eller Glutenfri.
  */
  if (!isFoldedPizza(item)) {
    options.push(
      {
        size: "Familj",
        price: familyPrice,
      },
      {
        size: "Glutenfri",
        price:
          item.price + GLUTEN_FREE_EXTRA_PRICE,
      },
    );
  }

  return options;
  }

  function formatCurrency(price: number) {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  }

  function getRegularPriceText(
    item: PublicMenuItem,
  ) {
    if (item.priceText) {
      return item.priceText;
    }

    return language === "sv"
      ? `${item.price} kr`
      : `${item.price} SEK`;
  }

  function getDisplayedSizeName(size: string) {
    if (language === "sv") {
      return size;
    }

    if (size === "Vanlig") {
      return "Regular";
    }

    if (size === "Familj") {
      return "Family";
    }

    if (size === "Barnpizza") {
      return "Kids pizza";
    }

    if (size === "Glutenfri") {
      return "Gluten-free";
    }

    return size;
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
      S/M/L kräver att kunden väljer storlek.
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

    const localizedItemName = getLocalizedText(
      language,
      item.name,
      item.nameEn,
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
        name: localizedItemName,
        selectedSize: selectedOption.size,
        price: selectedOption.price,
        imageUrl: item.imageUrl,
      });

      return;
    }

    addItem({
      menuItemId: item.id,
      name: localizedItemName,
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
          <strong>
            {getRegularPriceText(item)}
          </strong>

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
            {language === "sv"
              ? "Lägg i kundvagn"
              : "Add to cart"}
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

    if (hasFamilyOption) {
      return (
        <div className="menu-item-order menu-item-order-family">
          <label className="menu-family-select">
            <span>
              {language === "sv"
                ? "Storlek"
                : "Size"}
            </span>

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
                  {getDisplayedSizeName(
                    option.size,
                  )}{" "}
                  – {formatCurrency(option.price)}
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
            {language === "sv"
              ? "Lägg i kundvagn"
              : "Add to cart"}
          </button>
        </div>
      );
    }

    return (
      <div className="menu-item-order menu-item-order-variants">
        <span className="menu-size-label">
          {language === "sv"
            ? "Välj storlek"
            : "Choose size"}
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
                {getDisplayedSizeName(
                  option.size,
                )}{" "}
                – {formatCurrency(option.price)}
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
            ? language === "sv"
              ? "Lägg i kundvagn"
              : "Add to cart"
            : language === "sv"
              ? "Välj storlek först"
              : "Choose a size first"}
        </button>
      </div>
    );
  }

  function renderCategory(
    category: PublicMenuCategory,
  ) {
    const belongsToPizzaCategory =
      isPizzaCategory(category);

    const categoryName = getLocalizedText(
      language,
      category.name,
      category.nameEn,
    );

    const categoryDescription = getLocalizedText(
      language,
      category.description,
      category.descriptionEn,
    );

    return (
      <article
        className="menu-card"
        key={category.id}
      >
        <h3>{categoryName}</h3>

        {categoryDescription && (
          <p className="menu-intro">
            {categoryDescription}
          </p>
        )}

        {category.items.map((item) => {
          const itemName = getLocalizedText(
            language,
            item.name,
            item.nameEn,
          );

          const itemDescription = getLocalizedText(
            language,
            item.description,
            item.descriptionEn,
          );

          return (
            <div
              className="menu-item"
              key={item.id}
            >
              {item.imageUrl && (
                <img
                  className="menu-item-image"
                  src={item.imageUrl}
                  alt={itemName}
                />
              )}

              <div className="menu-item-content">
                <div className="menu-item-information">
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
                            language,
                          ),
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
          );
        })}
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
          {language === "sv"
            ? "Hämtar menyn..."
            : "Loading menu..."}
        </p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section
        id="menu"
        className="section"
      >
        <p className="menu-status menu-status-error">
          {language === "sv"
            ? "Menyn kunde inte laddas just nu. Försök igen om en stund."
            : "The menu could not be loaded right now. Please try again shortly."}
        </p>
      </section>
    );
  }

  const pizzaCategory =
    menuCategories.find(isPizzaCategory);

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
          {language === "sv"
            ? "Det finns ingen meny att visa ännu."
            : "There is no menu to display yet."}
        </p>
      )}
    </section>
  );
}