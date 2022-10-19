import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import DisplayRecipes from "./pages/DisplayRecipes";
import SearchRecipe from "./pages/SearchRecipe";
import CreateRecipe from "./pages/CreateRecipe";
import DetailsRecipe from "./pages/DetailsRecipe";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/recipes' element={<DisplayRecipes/>}></Route>
        <Route path='/search' element={<SearchRecipe/>}></Route>
        <Route path='/create' element={<CreateRecipe/>}></Route>
        <Route path='/recipe/:recipeId' element={<DetailsRecipe/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
