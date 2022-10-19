import React from "react";
import { Link } from "react-router-dom";


const RecipesCard = ({ recipe, handleDelete }) => {

  const getRecipeId = () => {
    handleDelete(recipe.id)
  }

  // console.log(card)


  return (
    <div className="card-animation pt-10 pb-10">
      <div className="card w-96 bg-violet-50 shadow-2xl text-zinc-900">
        <div className="card-body">
          <h2 className="card-title font-bold underline">{recipe.title}</h2>
          <p>{}</p>
          <p>{recipe.directions.substring(0, 110)}...</p>
          <p className="font-bold">Prep Time: {recipe.prepTime}</p>
          <div className="card-actions justify-end">
            <Link to={`/recipe/${recipe.id}`}><button className="btn btn-info">See More</button></Link>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-error" onClick={getRecipeId}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
