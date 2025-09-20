import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeStore from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipes/${recipe.id}`); // redirect to details
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded bg-white">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;