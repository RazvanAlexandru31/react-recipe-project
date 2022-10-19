import React from "react";
import background from "../assets/food-heroPage.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-sky-100 text-lg">
            ReactFoodProject lets you save food with multiple ingredients so you
            can quickly add it to your daily log. Add a name, information,
            ingredients, instructions, and the cooking time.
          </p>
          <Link to='/recipes'><button className="btn btn-info">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
