import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore'; // ✅ import Zustand store

const RecipeList = () => {
  // ✅ get recipes from Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p className="text-gray-500">No recipes added yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm bg-white"
        >
          {/* Link to recipe details */}
          <Link
            to={`/recipes/${recipe.id}`}
            className="font-bold text-lg text-blue-600 hover:underline"
          >
            {recipe.title}
          </Link>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;