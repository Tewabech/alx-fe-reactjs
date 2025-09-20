import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore'; // ✅ Import Zustand store

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // ✅ useRecipeStore hook
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // remove recipe from state
      navigate('/'); // redirect to home or recipe list
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;