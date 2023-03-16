import React from "react";
import Hero from "./Hero";

interface Props {
  products: JSX.Element[];
}

const Home = ({products}: Props) => {
  return (
    <div>
      <Hero
        img="tees.jpg"
        text={"SALE: Up to 70% off select T-Shirts"}
        code="Use code 'BENJAMIN' at checkout"
      />
      <div className="products">{products}</div>
    </div>
  );
};

export default Home;
