import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Feed</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default Feed;
