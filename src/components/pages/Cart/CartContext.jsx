import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  const removeFromCart = (bookId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== bookId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
