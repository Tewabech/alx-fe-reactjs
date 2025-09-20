import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // generate recommendations on mount
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Recommended Recipes</h2>
      <div className="space-y-2">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-2 rounded bg-white">
            <Link to={`/recipes/${recipe.id}`} className="font-semibold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;