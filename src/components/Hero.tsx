import React from "react";
import hero_img from "../assets/tees.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero--img" src={hero_img} alt="hero img"></img>
      <div className="promo-text">TEES<br></br>UP TO 70% OFF<br></br><span className="promo-code">Use code "BENJAMIN" at checkout</span></div>
    </div>
  );
};

export default Hero;
