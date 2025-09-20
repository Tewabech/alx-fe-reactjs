import { Link } from 'react-router-dom';
import recipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = recipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded bg-white">
          <Link to={`/recipes/${recipe.id}`} className="font-bold text-lg text-blue-600 hover:underline">
            {recipe.title}
          </Link>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;