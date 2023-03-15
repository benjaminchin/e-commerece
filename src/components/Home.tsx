import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero
        img="tees.jpg"
        text={"SALE: Up to 70% off select T-Shirts"}
        code="Use code 'BENJAMIN' at checkout"
      />
      <div className="products"></div>
    </div>
  );
};

export default Home;
