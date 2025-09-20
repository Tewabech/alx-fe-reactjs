import axios from "axios";

/**
 * Advanced search using GitHub's user search endpoint
 * @param {Object} opts { username, location, minRepos, page }
 
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
}*/
export async function fetchUserData({ username, location, minRepos, page }) {
  // Build query string
  let q = "";
  if (username) q += `${username} in:login `;
  if (location) q += `location:${location} `;
  if (minRepos) q += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=30`;

  const { data } = await axios.get(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      // Optional: add token if you have a GitHub PAT to raise rate limits
      // Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
    },
  });

  /**
   * Search API does not return location/public_repos by default.
   * To display them, we need to fetch each user's details.
   */
  const detailedUsers = await Promise.all(
    data.items.map(async (user) => {
      const details = await axios.get(user.url);
      return { ...user, ...details.data };
    })
  );

  return { ...data, items: detailedUsers };
};