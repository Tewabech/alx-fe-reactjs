import React from 'react';
import { useParams } from 'react-router-dom';
import recipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  return (
    <div className="p-4 border rounded bg-white">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="mt-2">{recipe.description}</p>
      {recipe.ingredients && (
        <ul className="mt-2 list-disc list-inside">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeDetails;