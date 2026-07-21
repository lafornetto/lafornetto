import type {
  CreateOrderRequest,
  CreateOrderResponse,
} from "../types/order";

const ORDER_API_URL =
  import.meta.env.VITE_ORDER_API_URL ??
  "http://localhost:5056";

export async function createOrder(
  order: CreateOrderRequest,
): Promise<CreateOrderResponse> {
  const response = await fetch(
    `${ORDER_API_URL}/api/public/orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      errorText ||
        "Det gick inte att skicka beställningen.",
    );
  }

  return response.json() as Promise<CreateOrderResponse>;
}