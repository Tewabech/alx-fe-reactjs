
import axios from 'axios';

const API_KEY  = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_GITHUB_BASE_URL;

export const fetchUser = async (username) => {
  const res = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  return res.data;
};


