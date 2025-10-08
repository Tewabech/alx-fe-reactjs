// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not OK');
  }
  const data = await response.json();
  return data;
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['posts'], fetchPosts, {
    // options, e.g. staleTime, cacheTime, etc.
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return <div>Loading posts…</div>;
  }

  if (isError) {
    return (
      <div>
        <p>Error loading posts: {error.message}</p>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
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