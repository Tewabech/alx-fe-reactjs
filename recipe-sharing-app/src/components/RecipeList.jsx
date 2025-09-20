import React from 'react';
import useRecipeStore from '../store/RecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p className="text-gray-500">No recipes added yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow-sm bg-white"
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;