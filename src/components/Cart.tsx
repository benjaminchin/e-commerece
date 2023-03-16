import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import data from "./Products";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  

  return <ul className="cart list-group list-group"></ul>;
};

export default Cart;
