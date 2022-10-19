import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="font-bold w-1/2 text-center">
        <p>
          A Recipe App that lets you search for recipes, create or delete them.
          The data comes from a local json server,
          "http://localhost:3000/recipes". The data is fetched, stored and used
          with the help of react hooks (useEffect, useState).
        </p>
      </div>
      <div className="font-bold text-3lx mt-5">
        <p>Version 1.0.0</p>
      </div>
      <Link to="/recipes">
        <button className="btn btn-info mt-10">Back to recipes</button>
      </Link>
    </div>
  );
};

export default About;
