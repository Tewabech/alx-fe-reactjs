// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!resp.ok) {
    throw new Error('Network response not OK');
  }
  return resp.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['posts'], 
    fetchPosts,
    {
      staleTime: 1000 * 60 * 5,  // e.g. 5 min
      refetchOnWindowFocus: false,     // disable the automatic refetch on focus
      keepPreviousData: true,           // keep old data while fetching new data
    }
  );

  if (isLoading) {
    return <div>Loading posts…</div>;
  }
  if (isError) {
    return (
      <div>
        <p>Error loading posts: {error.message}</p>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refreshing…' : 'Refetch Posts'}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.id}:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}