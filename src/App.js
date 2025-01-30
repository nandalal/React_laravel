import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <div>
      <PostForm fetchPosts={() => window.location.reload()} />
      <PostList />
    </div>
  );
};

export default App;