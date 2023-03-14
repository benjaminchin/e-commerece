import React from "react";
import { useState } from "react";
import Cart from "./Cart";

interface Props {
  children: string;
  products: JSX.Element[];
}

const Button = ({ children, products }: Props) => {
  const [cartVisible, setCartVisibility] = useState(false);

  return (
    <div>
      {cartVisible && <Cart products={products} />}
      <button
        className="btn btn-outline-success"
        onClick={() => setCartVisibility(!cartVisible)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
