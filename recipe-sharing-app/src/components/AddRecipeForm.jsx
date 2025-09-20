import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  // ✅ Zustand action
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // ✅ Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // ✅ Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return; // basic validation
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      {/* ✅ Input for title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2 rounded"
      />

      {/* ✅ Textarea for description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full border p-2 rounded"
      />

      {/* ✅ Submit button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;