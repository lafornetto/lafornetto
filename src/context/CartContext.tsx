import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  CartExtra,
  CartItem,
} from "../types/order";

type AddCartItem = {
  menuItemId: number;
  name: string;
  selectedSize?: string;
  price: number;
  imageUrl?: string | null;
};

type CartContextValue = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;

  addItem: (item: AddCartItem) => void;
  increaseQuantity: (cartItemKey: string) => void;
  decreaseQuantity: (cartItemKey: string) => void;
  removeItem: (cartItemKey: string) => void;

  updateItemComment: (
    cartItemKey: string,
    comment: string,
  ) => void;

  toggleItemExtra: (
    cartItemKey: string,
    extra: CartExtra,
  ) => void;

  clearCart: () => void;
};

const CartContext =
  createContext<CartContextValue | undefined>(
    undefined,
  );

type CartProviderProps = {
  children: ReactNode;
};

function createCartItemKey(
  menuItemId: number,
  selectedSize?: string,
): string {
  const sizeKey =
    selectedSize?.trim().toLowerCase() ||
    "standard";

  return `${menuItemId}-${sizeKey}`;
}

function getExtrasPrice(extras: CartExtra[]) {
  return extras.reduce(
    (sum, extra) => sum + extra.price,
    0,
  );
}

export function CartProvider({
  children,
}: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>(
    [],
  );

  function addItem(item: AddCartItem) {
    const cartItemKey = createCartItemKey(
      item.menuItemId,
      item.selectedSize,
    );

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) =>
          currentItem.cartItemKey === cartItemKey,
      );

      if (existingItem) {
        return currentItems.map(
          (currentItem) =>
            currentItem.cartItemKey ===
            cartItemKey
              ? {
                  ...currentItem,
                  quantity:
                    currentItem.quantity + 1,
                }
              : currentItem,
        );
      }

      return [
        ...currentItems,
        {
          cartItemKey,
          menuItemId: item.menuItemId,
          name: item.name,
          selectedSize: item.selectedSize,
          price: item.price,
          imageUrl: item.imageUrl,
          quantity: 1,
          comment: "",
          extras: [],
        },
      ];
    });
  }

  function increaseQuantity(
    cartItemKey: string,
  ) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartItemKey === cartItemKey
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  function decreaseQuantity(
    cartItemKey: string,
  ) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartItemKey === cartItemKey
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item,
        )
        .filter(
          (item) => item.quantity > 0,
        ),
    );
  }

  function removeItem(cartItemKey: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          item.cartItemKey !== cartItemKey,
      ),
    );
  }

  function updateItemComment(
    cartItemKey: string,
    comment: string,
  ) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartItemKey === cartItemKey
          ? {
              ...item,
              comment,
            }
          : item,
      ),
    );
  }

  function toggleItemExtra(
    cartItemKey: string,
    extra: CartExtra,
  ) {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (
          item.cartItemKey !== cartItemKey
        ) {
          return item;
        }

        const extraAlreadySelected =
          item.extras.some(
            (selectedExtra) =>
              selectedExtra.id === extra.id,
          );

        if (extraAlreadySelected) {
          return {
            ...item,
            extras: item.extras.filter(
              (selectedExtra) =>
                selectedExtra.id !==
                extra.id,
            ),
          };
        }

        return {
          ...item,
          extras: [...item.extras, extra],
        };
      }),
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalQuantity = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.quantity,
        0,
      ),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce((sum, item) => {
        const extrasPrice =
          getExtrasPrice(item.extras);

        const itemUnitPrice =
          item.price + extrasPrice;

        return (
          sum +
          itemUnitPrice * item.quantity
        );
      }, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    totalQuantity,
    totalPrice,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    updateItemComment,
    toggleItemExtra,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart måste användas inuti CartProvider.",
    );
  }

  return context;
}