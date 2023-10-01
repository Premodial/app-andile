import React, { createContext, useContext, useState, FunctionComponent } from 'react';

/**
 * Cart Item definition
 */
type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

/**
 * Context definition for the Cart
 */
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: React.ReactNode;
};

/**
 * CartProvider Component: Provides cart context to children components.
 * 
 * @param children - Child components.
 */
export const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /**
   * Add an item to the cart.
   * 
   * @param item - Item to add.
   */
  const addToCart = (item: CartItem) => {
    setCart(prevCart => [...prevCart, item]);
  };

  /**
   * Remove an item from the cart by its ID.
   * 
   * @param itemId - ID of the item to remove.
   */
  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

/**
 * Custom hook: Provides cart context.
 * Must be used inside a CartProvider.
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
