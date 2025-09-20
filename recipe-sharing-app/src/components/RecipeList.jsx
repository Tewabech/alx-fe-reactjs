import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No recipes match your search.</p>;
  }

  return (
    <div className="space-y-4">
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm bg-white"
        >
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