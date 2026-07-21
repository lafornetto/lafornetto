import { useState } from "react";

import { Checkout } from "./Checkout";
import { useCart } from "../context/CartContext";

import type { CartExtra } from "../types/order";

const EXTRA_OPTIONS: CartExtra[] = [
  {
    id: "extra-kebab",
    name: "Extra kebab",
    price: 25,
  },
  {
    id: "extra-kycklingkebab",
    name: "Extra kycklingkebab",
    price: 25,
  },
  {
    id: "extra-oxfile",
    name: "Extra oxfilé",
    price: 25,
  },
  {
    id: "extra-flaskfile",
    name: "Extra fläskfilé",
    price: 20,
  },
  {
    id: "skinka",
    name: "Skinka",
    price: 15,
  },
  {
    id: "kottfars",
    name: "Köttfärs",
    price: 20,
  },
  {
    id: "bacon",
    name: "Bacon",
    price: 15,
  },
  {
    id: "salami",
    name: "Salami",
    price: 15,
  },
  {
    id: "pepperonikorv",
    name: "Pepperonikorv",
    price: 15,
  },
  {
    id: "tonfisk",
    name: "Tonfisk",
    price: 15,
  },
  {
    id: "rakor",
    name: "Räkor",
    price: 20,
  },
  {
    id: "musslor",
    name: "Musslor",
    price: 15,
  },
  {
    id: "extra-ost",
    name: "Extra ost",
    price: 15,
  },
  {
    id: "gorgonzola",
    name: "Gorgonzola",
    price: 15,
  },
  {
    id: "mozzarella",
    name: "Mozzarella",
    price: 15,
  },
  {
    id: "salladsost",
    name: "Salladsost",
    price: 15,
  },
  {
    id: "champinjoner",
    name: "Champinjoner",
    price: 15,
  },
  {
    id: "lok",
    name: "Lök",
    price: 10,
  },
  {
    id: "ananas",
    name: "Ananas",
    price: 10,
  },
  {
    id: "paprika",
    name: "Paprika",
    price: 10,
  },
  {
    id: "tomat",
    name: "Tomat",
    price: 10,
  },
  {
    id: "feferoni",
    name: "Feferoni",
    price: 10,
  },
  {
    id: "oliver",
    name: "Oliver",
    price: 10,
  },
  {
    id: "farsk-vitlok",
    name: "Färsk vitlök",
    price: 10,
  },
  {
    id: "jalapeno",
    name: "Jalapeño",
    price: 10,
  },
];

export function Cart() {
  const [isMobileCartOpen, setIsMobileCartOpen] =
    useState(false);

  const [isCheckoutOpen, setIsCheckoutOpen] =
    useState(false);

  const {
    items,
    totalQuantity,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    updateItemComment,
    toggleItemExtra,
    clearCart,
  } = useCart();

  function formatPrice(price: number) {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  }

  function getExtrasPrice(extras: CartExtra[]) {
    return extras.reduce(
      (sum, extra) => sum + extra.price,
      0,
    );
  }

  function getItemRowTotal(
    price: number,
    quantity: number,
    extras: CartExtra[],
  ) {
    const extrasPrice =
      getExtrasPrice(extras);

    return (
      (price + extrasPrice) * quantity
    );
  }

  function openCheckout() {
    setIsCheckoutOpen(true);
    setIsMobileCartOpen(true);
  }

  function closeCheckout() {
    setIsCheckoutOpen(false);
  }

  if (isCheckoutOpen) {
    return (
      <Checkout onBack={closeCheckout} />
    );
  }

  return (
    <aside
      className={`cart ${
        isMobileCartOpen
          ? "cart-mobile-open"
          : ""
      }`}
    >
      <button
        type="button"
        className="cart-mobile-toggle"
        onClick={() =>
          setIsMobileCartOpen(
            (currentValue) =>
              !currentValue,
          )
        }
        aria-expanded={isMobileCartOpen}
      >
        <span>
          Kundvagn ({totalQuantity}{" "}
          {totalQuantity === 1
            ? "vara"
            : "varor"}
          )
        </span>

        <strong>
          {formatPrice(totalPrice)}
        </strong>

        <span>
          {isMobileCartOpen
            ? "Stäng"
            : "Visa"}
        </span>
      </button>

      <div className="cart-mobile-content">
        <div className="cart-header">
          <div>
            <h2>Din kundvagn</h2>

            <p>
              {totalQuantity}{" "}
              {totalQuantity === 1
                ? "vara"
                : "varor"}
            </p>
          </div>

          {items.length > 0 && (
            <button
              type="button"
              className="cart-clear-button"
              onClick={clearCart}
            >
              Töm kundvagnen
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="cart-empty-message">
            Din kundvagn är tom.
          </p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => {
                const extrasPrice =
                  getExtrasPrice(
                    item.extras,
                  );

                const rowTotal =
                  getItemRowTotal(
                    item.price,
                    item.quantity,
                    item.extras,
                  );

                return (
                  <article
                    className="cart-item"
                    key={
                      item.cartItemKey
                    }
                  >
                    <div className="cart-item-main">
                      {item.imageUrl && (
                        <img
                          className="cart-item-image"
                          src={
                            item.imageUrl
                          }
                          alt={item.name}
                        />
                      )}

                      <div className="cart-item-information">
                        <h3>
                          {item.name}
                        </h3>

                        {item.selectedSize && (
                          <p>
                            Storlek:{" "}
                            {
                              item.selectedSize
                            }
                          </p>
                        )}

                        <p>
                          Grundpris:{" "}
                          {formatPrice(
                            item.price,
                          )}
                        </p>

                        {extrasPrice >
                          0 && (
                          <p>
                            Tillbehör: +
                            {formatPrice(
                              extrasPrice,
                            )}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        className="cart-remove-button"
                        onClick={() =>
                          removeItem(
                            item.cartItemKey,
                          )
                        }
                        aria-label={`Ta bort ${item.name}`}
                      >
                        ×
                      </button>
                    </div>

                    <details className="cart-extras">
                      <summary>
                        Extra tillbehör
                        {item.extras
                          .length >
                          0 && (
                          <span>
                            {" "}
                            (
                            {
                              item
                                .extras
                                .length
                            }{" "}
                            valda)
                          </span>
                        )}
                      </summary>

                      <div className="cart-extras-options">
                        {EXTRA_OPTIONS.map(
                          (extra) => {
                            const isSelected =
                              item.extras.some(
                                (
                                  selectedExtra,
                                ) =>
                                  selectedExtra.id ===
                                  extra.id,
                              );

                            return (
                              <label
                                className="cart-extra-option"
                                key={
                                  extra.id
                                }
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    isSelected
                                  }
                                  onChange={() =>
                                    toggleItemExtra(
                                      item.cartItemKey,
                                      extra,
                                    )
                                  }
                                />

                                <span>
                                  {
                                    extra.name
                                  }
                                </span>

                                <strong>
                                  +
                                  {formatPrice(
                                    extra.price,
                                  )}
                                </strong>
                              </label>
                            );
                          },
                        )}
                      </div>
                    </details>

                    <div className="cart-item-controls">
                      <div className="cart-quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.cartItemKey,
                            )
                          }
                          aria-label={`Minska antal av ${item.name}`}
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.cartItemKey,
                            )
                          }
                          aria-label={`Öka antal av ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <strong>
                        {formatPrice(
                          rowTotal,
                        )}
                      </strong>
                    </div>

                    <label className="cart-comment">
                      <span>
                        Kommentar
                      </span>

                      <input
                        type="text"
                        value={
                          item.comment
                        }
                        onChange={(
                          event,
                        ) =>
                          updateItemComment(
                            item.cartItemKey,
                            event.target
                              .value,
                          )
                        }
                        placeholder="Till exempel: utan lök"
                        maxLength={200}
                      />
                    </label>
                  </article>
                );
              })}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Totalt</span>

                <strong>
                  {formatPrice(
                    totalPrice,
                  )}
                </strong>
              </div>

              <button
                type="button"
                className="cart-checkout-button"
                onClick={openCheckout}
              >
                Gå vidare till checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}