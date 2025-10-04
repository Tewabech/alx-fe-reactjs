import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Recipe Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group relative max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            <div className="relative p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
              <p className="text-gray-700 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;