import {
  useMemo,
  useState,
  type FormEvent,
} from "react";

import { createOrder } from "../api/orders";
import { useCart } from "../context/CartContext";

import type {
  CartItem,
  CreateOrderRequest,
  CreateOrderResponse,
} from "../types/order";

type CheckoutProps = {
  onBack: () => void;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

function buildOrderItemComment(item: CartItem) {
  const commentParts: string[] = [];

  if (item.selectedSize) {
    commentParts.push(
      `Storlek: ${item.selectedSize}`,
    );
  }

  const customerItemComment =
    item.comment.trim();

  if (customerItemComment) {
    commentParts.push(
      `Kommentar: ${customerItemComment}`,
    );
  }

  if (commentParts.length === 0) {
    return null;
  }

  return commentParts.join("\n");
}

export function Checkout({
  onBack,
}: CheckoutProps) {
  const {
    items,
    totalQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] =
    useState("");

  const [customerPhone, setCustomerPhone] =
    useState("");

  const [
    customerComment,
    setCustomerComment,
  ] = useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [orderResponse, setOrderResponse] =
    useState<CreateOrderResponse | null>(
      null,
    );

  const canSubmit = useMemo(() => {
    return (
      items.length > 0 &&
      customerName.trim().length >= 2 &&
      customerPhone.trim().length >= 6 &&
      !isSubmitting
    );
  }, [
    items.length,
    customerName,
    customerPhone,
    isSubmitting,
  ]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setErrorMessage("");

    if (items.length === 0) {
      setErrorMessage(
        "Kundvagnen är tom.",
      );
      return;
    }

    if (customerName.trim().length < 2) {
      setErrorMessage(
        "Fyll i kundens namn.",
      );
      return;
    }

    if (customerPhone.trim().length < 6) {
      setErrorMessage(
        "Fyll i ett giltigt telefonnummer.",
      );
      return;
    }

    const request: CreateOrderRequest = {
      customerName: customerName.trim(),
      customerPhone:
        customerPhone.trim(),
      customerComment:
        customerComment.trim() || null,
      items: items.map((item) => ({
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      comment:
        buildOrderItemComment(item),
      extras: item.extras.map((extra) => ({
        id: extra.id,
      })),
    })),
    };

    try {
      setIsSubmitting(true);

      const response =
        await createOrder(request);

      setOrderResponse(response);
      clearCart();
    } catch (error) {
      console.error(
        "Kunde inte skapa order:",
        error,
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Något gick fel när beställningen skickades.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (orderResponse) {
    return (
      <section className="checkout checkout-success">
        <div className="checkout-success-icon">
          ✓
        </div>

        <p className="checkout-eyebrow">
          Beställningen är mottagen
        </p>

        <h2>Tack för din beställning!</h2>

        <div className="checkout-order-number">
          <span>Ordernummer</span>

          <strong>
            {orderResponse.orderNumber}
          </strong>
        </div>

        <div className="checkout-confirmation-order">
          <h3>Din beställning</h3>

          <div className="checkout-confirmation-items">
            {orderResponse.items.map(
              (item, index) => (
                <article
                  className="checkout-confirmation-item"
                  key={`${item.menuItemId}-${index}`}
                >
                  <div className="checkout-confirmation-item-heading">
                    <strong>
                      {item.quantity} ×{" "}
                      {item.name}
                    </strong>

                    <strong>
                      {formatPrice(
                        item.lineTotal,
                      )}
                    </strong>
                  </div>

                  <p className="checkout-confirmation-base-price">
                    Grundpris:{" "}
                    {formatPrice(
                      item.unitPrice,
                    )}
                  </p>

                  {item.extrasText && (
                    <p className="checkout-confirmation-extras">
                      <strong>
                        Extra tillbehör:
                      </strong>{" "}
                      {item.extrasText}
                    </p>
                  )}

                  {item.comment && (
                    <p className="checkout-confirmation-comment">
                      {item.comment}
                    </p>
                  )}
                </article>
              ),
            )}
          </div>
        </div>

        <div className="checkout-confirmation-details">
          <p>
            <strong>Totalsumma:</strong>{" "}
            {formatPrice(
              orderResponse.totalAmount,
            )}
          </p>

          <p>
            <strong>
              Beräknad tillagningstid:
            </strong>{" "}
            {
              orderResponse.estimatedPreparationMinutes
            }{" "}
            minuter
          </p>

          <p>
            <strong>Betalning:</strong>{" "}
            Betalas vid upphämtning
          </p>
        </div>

        <p className="checkout-success-message">
          {orderResponse.message ||
            "Vi börjar förbereda maten så snart som möjligt."}
        </p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <div className="checkout-header">
        <button
          type="button"
          className="checkout-back-button"
          onClick={onBack}
          disabled={isSubmitting}
        >
          ← Tillbaka till kundvagnen
        </button>

        <p className="checkout-eyebrow">
          Slutför beställningen
        </p>

        <h2>Checkout</h2>

        <p>
          Kontrollera beställningen och fyll
          i dina kontaktuppgifter.
        </p>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <div className="checkout-form-group">
            <label htmlFor="customerName">
              Namn
            </label>

            <input
              id="customerName"
              name="customerName"
              type="text"
              value={customerName}
              onChange={(event) =>
                setCustomerName(
                  event.target.value,
                )
              }
              autoComplete="name"
              placeholder="För- och efternamn"
              maxLength={100}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="checkout-form-group">
            <label htmlFor="customerPhone">
              Telefonnummer
            </label>

            <input
              id="customerPhone"
              name="customerPhone"
              type="tel"
              value={customerPhone}
              onChange={(event) =>
                setCustomerPhone(
                  event.target.value,
                )
              }
              autoComplete="tel"
              inputMode="tel"
              placeholder="070-123 45 67"
              maxLength={30}
              disabled={isSubmitting}
              required
            />

            <small>
              Restaurangen kan ringa om det
              finns frågor om beställningen.
            </small>
          </div>

          <div className="checkout-form-group">
            <label htmlFor="customerComment">
              Kommentar till restaurangen
              <span> (valfritt)</span>
            </label>

            <textarea
              id="customerComment"
              name="customerComment"
              value={customerComment}
              onChange={(event) =>
                setCustomerComment(
                  event.target.value,
                )
              }
              placeholder="Exempel: Jag hämtar beställningen efter jobbet."
              maxLength={500}
              rows={4}
              disabled={isSubmitting}
            />
          </div>

          <div className="checkout-payment-info">
            <strong>
              Betalning vid upphämtning
            </strong>

            <p>
              Du betalar i restaurangen när
              du hämtar maten.
            </p>
          </div>

          {errorMessage && (
            <div
              className="checkout-error"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="checkout-submit-button"
            disabled={!canSubmit}
          >
            {isSubmitting
              ? "Skickar beställningen..."
              : `Skicka beställning · ${formatPrice(
                  totalPrice,
                )}`}
          </button>
        </form>

        <aside className="checkout-summary">
          <h3>Din beställning</h3>

          <p className="checkout-summary-count">
            {totalQuantity}{" "}
            {totalQuantity === 1
              ? "vara"
              : "varor"}
          </p>

          <div className="checkout-summary-items">
            {items.map((item) => {
              const extrasPrice =
                item.extras.reduce(
                  (sum, extra) =>
                    sum + extra.price,
                  0,
                );

              const unitPrice =
                item.price + extrasPrice;

              const lineTotal =
                unitPrice * item.quantity;

              return (
                <article
                  key={item.cartItemKey}
                  className="checkout-summary-item"
                >
                  <div className="checkout-summary-item-heading">
                    <div>
                      <strong>
                        {item.quantity} ×{" "}
                        {item.name}
                      </strong>

                      {item.selectedSize && (
                        <span>
                          {item.selectedSize}
                        </span>
                      )}
                    </div>

                    <strong>
                      {formatPrice(lineTotal)}
                    </strong>
                  </div>

                  {item.extras.length > 0 && (
                    <ul className="checkout-summary-extras">
                      {item.extras.map(
                        (extra) => (
                          <li key={extra.id}>
                            {extra.name} +
                            {formatPrice(
                              extra.price,
                            )}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                  {item.comment.trim() && (
                    <p className="checkout-summary-comment">
                      {item.comment}
                    </p>
                  )}
                </article>
              );
            })}
          </div>

          <div className="checkout-summary-total">
            <span>Totalt</span>
            <strong>
              {formatPrice(totalPrice)}
            </strong>
          </div>
        </aside>
      </div>
    </section>
  );
}