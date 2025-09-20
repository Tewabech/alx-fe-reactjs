import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="mt-2">{recipe.description}</p>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />

        {/* Favorite button */}
        {isFavorite ? (
          <button
            onClick={() => removeFavorite(recipe.id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addFavorite(recipe.id)}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;