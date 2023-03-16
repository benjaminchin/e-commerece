import React, { createContext, useState, ReactNode } from "react";
import Products from "./components/Products";

interface Shop {
  cartItems: Array<number>;
  addToCart: (item: number) => void;
  removeFromCart: (item: number) => void;
}

export const ShopContext = createContext<Shop>({} as Shop);

const getDefaultCart = () => {
  let cart: Array<number> = [];
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

interface Props {
  children: ReactNode;
}

export const ShopContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // const contextValue = [cartItems, addToCart, removeFromCart];
  console.log(cartItems);

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
