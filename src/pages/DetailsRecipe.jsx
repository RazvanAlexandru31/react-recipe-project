import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import img1 from "../assets/recipe-image.jpg";
import img2 from '../assets/recipe-image2.jpg';
import img3 from '../assets/recipe-image3.jpg';
import img4 from '../assets/recipe-image4.jpg';
import img5 from '../assets/recipe-image5.jpg';


const DetailsRecipe = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { recipeId } = useParams();
  const url = `http://localhost:3000/recipes/${recipeId}`;

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setRecipe(data);
      setLoading(true);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRecipe();
    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   for(let i = 0; i < recipe.ingredients.length; i++){
//     console.log(recipe.ingredients[i])
//   }

const array = [img1, img2, img3, img4, img5]
const randomArr = array[Math.floor(Math.random() * array.length)]
console.log(randomArr)

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${randomArr})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }}
    >
      {error && <p>{error}</p>}
      {loading && <ScaleLoader color="#bbd636" />}
      <div className="card w-96 bg-teal-900 text-primary-content shadow-2xl">
        <div className="card-body text-stone-900">
          <h2 className="card-title">{recipe.title}</h2>
          <p className="underline text-black-200 text-cyan-50">Ingredients</p>
          {/* <ul>{recipe.ingredients.map(ing => <li>{ing}</li>)}</ul> */}
          <p className="text-gray-400"> {recipe.ingredients}</p>

          <p className="underline text-cyan-50">Cooking instructions</p>
          <p className="text-gray-400">{recipe.directions}</p>
          <p className="text-cyan-50">
            Prep Time: {recipe.prepTime}
          </p>
          <div className="card-actions justify-end">
            <Link to="/recipes">
              <button className="btn mt-10">Back To Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRecipe;
