import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import recipeStore from './recipeStore';
import { useParams } from 'react-router-dom';

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

      <div className="mt-4 flex gap-2">
        <Link
          to={`/recipes/${recipe.id}/edit`}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;