
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Recipe App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />          {/* ✅ Search input */}
                <AddRecipeForm />
                <RecipeList />          {/* ✅ Shows filtered recipes */}
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;