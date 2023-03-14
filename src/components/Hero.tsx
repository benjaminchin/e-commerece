import React from "react";
import hero_img from "../assets/tees.jpg";

interface Props {
  text: string;
  img: string;
  code?: string;
}

const Hero = ({ text, img, code }: Props) => {
  return (
    <div className="hero">
      <img className="hero--img" src={img} alt="hero img"></img>
      <div className="promo-text">{text}</div>
      <div className="promo-code">{code}</div>
    </div>
  );
};

export default Hero;
