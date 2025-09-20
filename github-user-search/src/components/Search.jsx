import { useState } from "react";
import { fetchUserData } from "../services/githubService";
//import { fetchUserData } from "../services/githubService";
export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, nextPage = 1) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await advancedSearchUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      // If loading more, append results
      setResults(nextPage === 1 ? data.items : [...results, ...data.items]);
      setHasMore(data.total_count > nextPage * 30);
      setPage(nextPage);
    } catch (err) {
      setError("Looks like we can't find users with those criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={(e) => handleSearch(e)}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-gray-700">Advanced GitHub Search</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username (optional)"
          className="w-full border p-2 rounded focus:outline-none focus:ring"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g. Ethiopia)"
          className="w-full border p-2 rounded focus:outline-none focus:ring"
        />

        <input
          type="number"
          min="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="w-full border p-2 rounded focus:outline-none focus:ring"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold text-lg"
                >
                  {user.login}
                </a>
                <p className="text-sm text-gray-700">
                  Location: {user.location ?? "Not specified"}
                </p>
                <p className="text-sm text-gray-700">
                  Public Repos: {user.public_repos ?? "N/A"}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {hasMore && !loading && (
          <button
            onClick={(e) => handleSearch(e, page + 1)}
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}