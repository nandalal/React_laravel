import React from 'react';
import pistyles from "./PostItem.module.css";

const PostItem = ({ post, deletePost }) => {
    return (
        <div className={pistyles.divhover}>
            <h3 className={pistyles.h3demo }>{post.title}</h3>
            <p className={pistyles.pdemo }>{post.content}</p>
            <button className={`${pistyles.button} ${pistyles.filled}`} onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    );
};

export default PostItem;