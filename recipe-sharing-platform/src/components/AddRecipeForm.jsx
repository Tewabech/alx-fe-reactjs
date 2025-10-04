import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required';
    else if (formData.ingredients.split(',').length < 2)
      newErrors.ingredients = 'At least two ingredients are required';
    if (!formData.instructions) newErrors.instructions = 'Instructions are required';
    if (!formData.steps) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddRecipe(formData);
      setFormData({ title: '', ingredients: '', instructions: '', steps: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (comma separated)</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows="3"
          className={`mt-1 block w-full px-3 py-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.ingredients && <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          rows="4"
          className={`mt-1 block w-full px-3 py-2 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.instructions && <p className="mt-1 text-sm text-red-500">{errors.instructions}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          rows="4"
          className={`mt-1 block w-full px-3 py-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.steps && <p className="mt-1 text-sm text-red-500">{errors.steps}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;