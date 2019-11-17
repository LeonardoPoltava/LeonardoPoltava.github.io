import React from 'react';
import "./Post.css";
const Post = (props) => {
    return (
        <div className="post">
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="" width={50} height={50} className="post-avatar"/>
            <span className="post-name">{props.name}</span>
            <span className="post-text">{props.message}</span>
            <a href="javascript:void(0)" className="post-like">Like</a>
            <span className="like-counter">({props.likeCounter})</span>
            <span>{props.key}</span>
        </div>
    );
}
export default Post;