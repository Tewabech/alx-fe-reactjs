import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Update an existing recipe by ID
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedRecipe } : r)),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
  
  // Set all recipes (e.g., initialize from API)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;