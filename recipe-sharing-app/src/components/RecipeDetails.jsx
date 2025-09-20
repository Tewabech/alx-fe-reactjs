import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="mt-2">{recipe.description}</p>

      <div className="mt-4 flex gap-2">
        {/* ✅ Use recipe.id for edit link */}
        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>

        {/* ✅ Use recipe.id for delete button */}
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;