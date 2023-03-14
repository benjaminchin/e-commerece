import React from "react";
import { ReactNode } from "react";

interface Props {
  products: JSX.Element[];
}

const Cart = ({ products }: Props) => {
  const cart = products.map((item) => {
    return <li key={item.props.id} className="list-group-item">{item.props.name + item.props.price}</li>;
  });

  return <ul className="cart list-group list-group-numbered">{cart}</ul>;
};

export default Cart;
