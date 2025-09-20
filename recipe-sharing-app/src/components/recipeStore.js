import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',               // Current search term
  filteredRecipes: [],          // Filtered recipes based on search

  // CRUD actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Search and filter actions
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;