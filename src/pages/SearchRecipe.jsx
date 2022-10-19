import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

const SearchRecipe = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  console.log(location);
  const params = new URLSearchParams(location);
  console.log(params);
  const query = params.get("search");
  console.log(query);

  const url = `http://localhost:3000/recipes${query}`;
  console.log(url);

  const fetchSearchRecips = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.length === 0) {
        setError("We can't find the recipe you are looking for");
      }
      setItems(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchRecips();
    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading && <ScaleLoader color="#bbd636" />}
      <div className="font-bold text-4xl">
      <p>Recipes that contain <span className="text-cyan-400">'{query.replace('?q=', '')}'</span> :</p>
      </div>
      {error && (
        <div className="text-center">
          <p className="text-4xl font-bold">{error}</p>
          <Link to='/recipes'><button className="btn btn-info mt-10">Back to recipes</button></Link>
        </div>
      )}
      {items &&
        items.map((item) => (
          <div className="card-animation p-10">
            <div className="card w-96 bg-violet-50 shadow-2xl text-zinc-900">
              <div className="card-body">
                <h2 className="card-title font-bold underline">{item.title}</h2>
                <p>{}</p>
                <p>{item.directions.substring(0, 110)}...</p>
                <p className="font-bold">Prep Time: {item.prepTime}</p>
                <div className="card-actions justify-end">
                  <Link to={`/recipe/${item.id}`}>
                    <button className="btn btn-info">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchRecipe;
