import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';



function App() {
   const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);}
  return (
     <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white p-4">
          <nav className="flex justify-between">
            <Link to="/" className="text-xl font-semibold">Home</Link>
            <Link to="/add-recipe" className="text-xl font-semibold">Add Recipe</Link>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;