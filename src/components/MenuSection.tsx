import { useEffect, useState } from "react";
import type { Language } from "../data/menuData";

import { MENU_API_URL } from "../config/api";
import { useCart } from "../context/CartContext";

type SauceOption = {
  value: string;
  sv: string;
  en: string;
};

const RESTAURANT_ID = 1;
const FAMILY_PIZZA_DISCOUNT = 30;
const CHILD_PIZZA_DISCOUNT = 10;
const GLUTEN_FREE_EXTRA_PRICE = 40;
const KEBAB_SAUCES: SauceOption[] = [
  {
    value: "Vitlök",
    sv: "Vitlök",
    en: "Garlic",
  },
  {
    value: "Mild",
    sv: "Mild",
    en: "Mild",
  },
  {
    value: "Mellan",
    sv: "Mellan",
    en: "Medium",
  },
  {
    value: "Stark",
    sv: "Stark",
    en: "Hot",
  },
  {
    value: "Blandad",
    sv: "Blandad",
    en: "Mixed",
  },
  {
    value: "Utan sås",
    sv: "Utan sås",
    en: "No sauce",
  },
];

const SALAD_SAUCES: SauceOption[] = [
  {
    value: "Bea",
    sv: "Bea",
    en: "Béarnaise",
  },
  {
    value: "Vitlökssås",
    sv: "Vitlökssås",
    en: "Garlic sauce",
  },
  {
    value: "Mild Sås",
    sv: "Mild Sås",
    en: "Mild sauce",
  },
  {
    value: "Stark Sås",
    sv: "Stark Sås",
    en: "Hot sauce",
  },
  {
    value: "Blandad Sås",
    sv: "Blandad Sås",
    en: "Mixed sauce",
  },
  {
    value: "Curry Sås",
    sv: "Curry Sås",
    en: "Curry sauce",
  },
  {
    value: "Tzatziki",
    sv: "Tzatziki",
    en: "Tzatziki",
  },
  {
    value: "Remouladsås",
    sv: "Remouladsås",
    en: "Remoulade",
  },
  {
    value: "Rhode Island Sås",
    sv: "Rhode Island Sås",
    en: "Rhode Island sauce",
  },
];

const KEBAB_SALAD_SAUCES: SauceOption[] = [
  {
    value: "Bea",
    sv: "Bea",
    en: "Béarnaise",
  },
  {
    value: "Vitlökssås",
    sv: "Vitlökssås",
    en: "Garlic sauce",
  },
  {
    value: "Mild Sås",
    sv: "Mild Sås",
    en: "Mild sauce",
  },
  {
    value: "Mellan Sås",
    sv: "Mellan Sås",
    en: "Medium sauce",
  },
  {
    value: "Stark Sås",
    sv: "Stark Sås",
    en: "Hot sauce",
  },
  {
    value: "Blandad Sås",
    sv: "Blandad Sås",
    en: "Mixed sauce",
  },
  {
    value: "Curry Sås",
    sv: "Curry Sås",
    en: "Curry sauce",
  },
  {
    value: "Tzatziki",
    sv: "Tzatziki",
    en: "Tzatziki",
  },
  {
    value: "Remouladsås",
    sv: "Remouladsås",
    en: "Remoulade",
  },
  {
    value: "Rhode Island Sås",
    sv: "Rhode Island Sås",
    en: "Rhode Island sauce",
  },
];

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

  const [selectedSauces, setSelectedSauces] = useState<
    Record<number, string[]>
  >({});

  const [openSauceMenuId, setOpenSauceMenuId] = useState<
    number | null
  >(null);

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

  function getCategoryAnchorId(category: PublicMenuCategory) {
    return `menu-category-${category.id}`;
  }

  function scrollToCategory(category: PublicMenuCategory) {
    const element = document.getElementById(
      getCategoryAnchorId(category),
    );

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function isPizzaCategory(
    category: PublicMenuCategory,
  ) {
    return normalizeText(category.name) === "pizzor";
  }

  function getSauceOptions(
    category: PublicMenuCategory,
    item: PublicMenuItem,
  ): SauceOption[] {
    const text = normalizeText(
      [
        category.name,
        category.nameEn,
        item.name,
        item.nameEn,
      ]
        .filter(Boolean)
        .join(" "),
    );

    /*
      Sallader ska få hela listan med såser och dressingar.
      Den kontrollen ligger först så att t.ex. en kebabsallad
      får salladsalternativen i stället för kebabalternativen.
    */
    const isSalad =
      text.includes("sallad") ||
      text.includes("salad");

    const isKebab =
      text.includes("kebab");

    if (isSalad && isKebab) {
      return KEBAB_SALAD_SAUCES;
    }

    if (isSalad) {
      return SALAD_SAUCES;
    }

    if (
      isKebab ||
      text.includes("falafel")
    ) {
      return KEBAB_SAUCES;
    }

    return [];
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

  function handleSauceChange(
    menuItemId: number,
    sauce: string,
    singleSelection: boolean,
  ) {
    if (singleSelection) {
      setSelectedSauces((currentSauces) => ({
        ...currentSauces,
        [menuItemId]: [sauce],
      }));

      setOpenSauceMenuId(null);
      return;
    }

    setSelectedSauces((currentSauces) => {
      const currentSelection =
        currentSauces[menuItemId] ?? [];

      if (sauce === "Utan sås") {
        const noSauceAlreadySelected =
          currentSelection.includes("Utan sås");

        return {
          ...currentSauces,
          [menuItemId]: noSauceAlreadySelected
            ? []
            : ["Utan sås"],
        };
      }

      const withoutNoSauce =
        currentSelection.filter(
          (selectedSauce) =>
            selectedSauce !== "Utan sås",
        );

      const sauceAlreadySelected =
        withoutNoSauce.includes(sauce);

      return {
        ...currentSauces,
        [menuItemId]: sauceAlreadySelected
          ? withoutNoSauce.filter(
              (selectedSauce) =>
                selectedSauce !== sauce,
            )
          : [...withoutNoSauce, sauce],
      };
    });
  }

  function renderSauceSelector(
    item: PublicMenuItem,
    sauceOptions: SauceOption[],
  ) {
    const itemSelectedSauces =
      selectedSauces[item.id] ?? [];

    const singleSelection =
      sauceOptions === SALAD_SAUCES ||
      sauceOptions === KEBAB_SALAD_SAUCES;

    const isOpen =
      openSauceMenuId === item.id;

    const selectedSauceText =
      itemSelectedSauces.length > 0
        ? itemSelectedSauces
            .map((selectedSauce) => {
              const sauce = sauceOptions.find(
                (option) =>
                  option.value === selectedSauce,
              );

              if (!sauce) {
                return selectedSauce;
              }

              return language === "sv"
                ? sauce.sv
                : sauce.en;
            })
            .join(", ")
        : language === "sv"
          ? "Välj sås"
          : "Choose sauce";

    return (
      <div className="menu-sauce-block">
        <span className="menu-sauce-label">
          {sauceOptions === SALAD_SAUCES
            ? language === "sv"
              ? "Sås / dressing"
              : "Sauce / dressing"
            : language === "sv"
              ? "Sås"
              : "Sauce"}
        </span>

        <div
          className={`menu-sauce-dropdown ${
            isOpen ? "menu-sauce-dropdown--open" : ""
          }`}
        >
          <button
            type="button"
            className="menu-sauce-trigger"
            aria-expanded={isOpen}
            onClick={() =>
              setOpenSauceMenuId(
                isOpen ? null : item.id,
              )
            }
          >
            <span className="menu-sauce-trigger-text">
              {selectedSauceText}
            </span>

            <span
              className="menu-sauce-trigger-arrow"
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {isOpen && (
            <div className="menu-sauce-options">
              {sauceOptions.map((sauce) => (
                <label
                  className="menu-sauce-option"
                  key={sauce.value}
                >
                  <input
                    type={
                      singleSelection
                        ? "radio"
                        : "checkbox"
                    }
                    name={
                      singleSelection
                        ? `salad-sauce-${item.id}`
                        : undefined
                    }
                    checked={itemSelectedSauces.includes(
                      sauce.value,
                    )}
                    onChange={() =>
                      handleSauceChange(
                        item.id,
                        sauce.value,
                        singleSelection,
                      )
                    }
                  />

                  <span>
                    {language === "sv"
                      ? sauce.sv
                      : sauce.en}
                  </span>
                </label>
              ))}

              {!singleSelection && (
                <button
                  type="button"
                  className="menu-sauce-done-button"
                  onClick={() =>
                    setOpenSauceMenuId(null)
                  }
                >
                  {language === "sv"
                    ? "Klar"
                    : "Done"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  function handleAddToCart(
    item: PublicMenuItem,
    belongsToPizzaCategory: boolean,
    requiresSauce: boolean,
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

    const itemSelectedSauces = requiresSauce
      ? selectedSauces[item.id] ?? []
      : [];

    if (
      requiresSauce &&
      itemSelectedSauces.length === 0
    ) {
      return;
    }

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
        selectedSauces: itemSelectedSauces,
        price: selectedOption.price,
        imageUrl: item.imageUrl,
      });

      setOpenSauceMenuId(null);
      return;
    }

    addItem({
      menuItemId: item.id,
      name: localizedItemName,
      selectedSauces: itemSelectedSauces,
      price: item.price,
      imageUrl: item.imageUrl,
    });

    setOpenSauceMenuId(null);
  }

  function renderItemOrder(
    item: PublicMenuItem,
    belongsToPizzaCategory: boolean,
    sauceOptions: SauceOption[],
  ) {
    const requiresSauce =
      sauceOptions.length > 0;
    const options = getOrderOptions(
      item,
      belongsToPizzaCategory,
    );

    const selectedSize = getSelectedSize(
      item,
      options,
    );

    const itemSelectedSauces = requiresSauce
      ? selectedSauces[item.id] ?? []
      : [];

    const sauceMissing =
      requiresSauce &&
      itemSelectedSauces.length === 0;

    if (options.length === 0) {
      return (
        <div className="menu-item-order">
          <strong>
            {getRegularPriceText(item)}
          </strong>

          {requiresSauce &&
            renderSauceSelector(
              item,
              sauceOptions,
            )}

          <button
            type="button"
            className="menu-add-button"
            disabled={sauceMissing}
            onClick={() =>
              handleAddToCart(
                item,
                belongsToPizzaCategory,
                requiresSauce,
              )
            }
          >
            {sauceMissing
              ? language === "sv"
                ? "Välj sås först"
                : "Choose sauce first"
              : language === "sv"
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

          {requiresSauce &&
            renderSauceSelector(
              item,
              sauceOptions,
            )}

          <button
            type="button"
            className="menu-add-button"
            disabled={sauceMissing}
            onClick={() =>
              handleAddToCart(
                item,
                belongsToPizzaCategory,
                requiresSauce,
              )
            }
          >
            {sauceMissing
              ? language === "sv"
                ? "Välj sås först"
                : "Choose sauce first"
              : language === "sv"
                ? "Lägg i kundvagn"
                : "Add to cart"}
          </button>
        </div>
      );
    }

    const sizeMissing = !selectedSize;

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

        {requiresSauce &&
          renderSauceSelector(
              item,
              sauceOptions,
            )}

        <button
          type="button"
          className="menu-add-button"
          disabled={
            sizeMissing || sauceMissing
          }
          onClick={() =>
            handleAddToCart(
              item,
              belongsToPizzaCategory,
              requiresSauce,
            )
          }
        >
          {sizeMissing
            ? language === "sv"
              ? "Välj storlek först"
              : "Choose a size first"
            : sauceMissing
              ? language === "sv"
                ? "Välj sås först"
                : "Choose sauce first"
              : language === "sv"
                ? "Lägg i kundvagn"
                : "Add to cart"}
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
        id={getCategoryAnchorId(category)}
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
          const sauceOptions =
            getSauceOptions(
              category,
              item,
            );

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
                  sauceOptions,
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
      {menuCategories.length > 0 && (
        <>
          <nav
            className="menu-category-nav menu-category-nav-desktop"
            aria-label={
              language === "sv"
                ? "Menykategorier"
                : "Menu categories"
            }
          >
            {menuCategories.map((category) => {
              const categoryName = getLocalizedText(
                language,
                category.name,
                category.nameEn,
              );

              return (
                <button
                  key={category.id}
                  type="button"
                  className="menu-category-button"
                  onClick={() =>
                    scrollToCategory(category)
                  }
                >
                  {categoryName}
                </button>
              );
            })}
          </nav>

          <div className="menu-category-mobile">
            <label
              className="menu-category-mobile-label"
              htmlFor="menu-category-select"
            >
              {language === "sv"
                ? "Välj kategori"
                : "Choose category"}
            </label>

            <select
              id="menu-category-select"
              className="menu-category-select"
              defaultValue=""
              onChange={(event) => {
                const categoryId = Number(
                  event.target.value,
                );

                const category = menuCategories.find(
                  (item) => item.id === categoryId,
                );

                if (category) {
                  scrollToCategory(category);
                }
              }}
            >
              <option value="" disabled>
                {language === "sv"
                  ? "Välj kategori"
                  : "Choose category"}
              </option>

              {menuCategories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {getLocalizedText(
                    language,
                    category.name,
                    category.nameEn,
                  )}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

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