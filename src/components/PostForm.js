import React, { Fragment, useState } from 'react';
import axios from 'axios';
import pfstyles from './PostForm.module.css';

const PostForm = ({ fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/posts', { title, content });
        setTitle('');
        setContent('');
        fetchPosts();
    };

    return (
        <Fragment>
        <h1>Product Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <p><strong>Title of the Product:</strong>
            <input
                className={pfstyles.input}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </p>
            <p><strong>Description of the Product:</strong>
            <textarea
                className={pfstyles.textarea}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            </p>
            <button className={`${pfstyles.w3button} ${pfstyles.w3blue}`} type="submit">Create Post</button>
        </form>
        </Fragment>
    );
};

export default PostForm;