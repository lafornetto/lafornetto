export type CartExtra = {
  id: string;
  name: string;
  price: number;
};

export type CartItem = {
  cartItemKey: string;
  menuItemId: number;
  name: string;
  selectedSize?: string;
  price: number;
  quantity: number;
  comment: string;
  extras: CartExtra[];
  imageUrl?: string | null;
};

export type CreateOrderExtraRequest = {
  id: string;
};

export type CreateOrderItemRequest = {
  menuItemId: number;
  quantity: number;
  comment: string | null;
  extras: CreateOrderExtraRequest[];
};

export type CreateOrderRequest = {
  customerName: string;
  customerPhone: string;
  customerComment: string | null;
  items: CreateOrderItemRequest[];
};

export type OrderItemDetails = {
  menuItemId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  comment: string | null;
  extrasUnitPrice: number;
  extrasText: string | null;
  lineTotal: number;
};

export type CreateOrderResponse = {
  orderNumber: string;
  totalAmount: number;
  estimatedPreparationMinutes: number;
  estimatedPickupAtUtc: string;
  status: string;
  paymentMethod: string;
  message: string;
  items: OrderItemDetails[];
};