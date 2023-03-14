import React from "react";

interface Props {
  products: JSX.Element[];
}

const Cart = ({ products }: Props) => {
  const cart = products.map((item) => {
    return (
      <li key={item.props.id} className="cart-item list-group-item">
        {/* <img src={item.props.coverImg} className="product-img"></img> */}
        {item.props.name}
        <span>{item.props.price}</span>
      </li>
    );
  });

  return <ul className="cart list-group list-group">{cart}</ul>;
};

export default Cart;
