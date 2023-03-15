import React from "react";
import { useState } from "react";
import Cart from "./Cart";

interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  const [cartVisible, setCartVisibility] = useState(false);

  return (
    <div>
      {cartVisible && <Cart />}
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
