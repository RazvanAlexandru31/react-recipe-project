import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [directions, setDirections] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate()

  const handleTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDirections = (e) => {
    console.log(e.target.value);
    setDirections(e.target.value);
  };

  const handlePreptTime = (e) => {
    console.log(e.target.value);
    setPrepTime(e.target.value);
  };

  // https://stackoverflow.com/questions/38510640/how-to-make-a-rest-post-call-from-reactjs-code
  // async function handleOrderSubmit(event){
  //   event.preventDefault()
  
  //   try{
  //     const formData= {name: event.target.name.value, email: event.target.email.value, message: event.target.name.message}
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(formData)
  //     };
  //     const response = await fetch('https://www.example.com/form', requestOptions);
  //     const data = await response.json();
  //     navigate("/form-response", { state: {data: data, status: true} })
  //   }
  //   catch(error){
  //     navigate("/form-response", { state: {status: false} })
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, directions, prepTime, ingredients);
    const newRecipe = {
      title,
      ingredients,
      directions,
      prepTime: prepTime + ' minutes'
    }
    console.log(newRecipe)
    fetch('http://localhost:3000/recipes', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newRecipe)
    })
    resetInputs();
    navigate('/recipes')
  };

  const handleNewIngredient = (e) => {
    console.log(e.target.value);
    setNewIngredient(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim().toLocaleLowerCase();
    // check for duplicates
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevState) => {
        return [...prevState, ing];
      });
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  const resetInputs = () => {
    setTitle("");
    setDirections("");
    setPrepTime("");
    setNewIngredient("")
  }; 

  return (
    <>
      <section className="pb-20 relative block bg-blueGray-800">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Create something
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                In today’s world, cooking, cookbooks and food blogging can mean
                big business. And you don’t necessarily need an expensive
                culinary degree to do it! The best place to begin is by learning
                how to create a recipe that’s uniquely your own.
              </p>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="relative block pt-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">Getting Started</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      “No one owns a recipe; they’re meant to be handed down and
                      passed around”
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="title"
                      >
                        Recipe Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitle}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="ingredient"
                      >
                        Ingredients
                      </label>
                      <input
                        id="ingredient"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Ingredients"
                        value={newIngredient}
                        onChange={handleNewIngredient}
                        ref={ingredientInput}
                      />
                      <button
                        className="btn btn-info mt-5"
                        onClick={handleAdd}
                      >
                        Add ingredient
                      </button>
                      <div className="mb-10 mt-2">
                      <p className="font-bold text-underline">Ingredients</p> {ingredients.map((ingredient) => (
                          <em key={ingredient}>{ingredient}; </em>
                        ))}
                      </div>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="directions"
                      >
                        Directions
                      </label>
                      <textarea
                        id="directions"
                        type="texterea"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Directions"
                        value={directions}
                        onChange={handleDirections}
                        spellCheck="false"
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="time"
                      >
                        Cooking Time
                      </label>
                      <input
                        id="time"
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="minutes"
                        value={prepTime}
                        onChange={handlePreptTime}
                        required
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 shadow-lg text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Create Recipe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-800 pt-8 pb-6 mt-1">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </section>
      </form>
    </>
  );
};

export default CreateRecipe;
