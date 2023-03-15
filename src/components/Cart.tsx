import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  cartItems.map();

  return <ul className="cart list-group list-group"></ul>;
};

export default Cart;
