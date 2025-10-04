import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">{recipe.summary}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;