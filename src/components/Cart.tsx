import React from "react";
import { ReactNode } from "react";

interface Props {
  products: JSX.Element[];
}

const Cart = ({ products }: Props) => {
  const cart = products.map((item) => {
    return <li key={item.props.id} className="list-group-item">{item.props.name}</li>;
  });

  return <ul className="list-group">{cart}</ul>;
};

export default Cart;
