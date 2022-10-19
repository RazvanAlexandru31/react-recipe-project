import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipesCard from "../components/RecipesCard";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

const DisplayRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:3000/recipes";

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = (id) => {
     fetch(`http://localhost:3000/recipes/${id}`, {
      method:"DELETE"
    })
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
    console.log(id)
  }

  return (
    <div className="home">
      <Navbar />
      <SearchBar/>
      {error && <p>{error}</p>}
      {loading && <ScaleLoader color="#bbd636"/>}
      <div className="grid grid-cols-4 gap-20">
        {recipes.map((recipe) => (
          <RecipesCard key={recipe.id} recipe={recipe} handleDelete={handleDelete}/>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DisplayRecipes;
