import React from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      <div className="space-y-2">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="border p-2 rounded bg-white flex justify-between items-center">
            <div>
              <Link to={`/recipes/${recipe.id}`} className="font-semibold text-blue-600 hover:underline">
                {recipe.title}
              </Link>
              <p className="text-gray-700">{recipe.description}</p>
            </div>
            <button
              onClick={() => removeFavorite(recipe.id)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;