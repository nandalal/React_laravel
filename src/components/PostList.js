import React, { useEffect, useState } from 'react';
import axios from 'axios';
import plstyles from './PostList.module.css'
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/api/posts');
        setPosts(response.data);
    };

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:8000/api/posts/${id}`);
        fetchPosts();
    };

    return (
        <div className={plstyles.wrapper}>
            <h1>Posts</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} deletePost={deletePost} />
            ))}
        </div>
    );
};

export default PostList;