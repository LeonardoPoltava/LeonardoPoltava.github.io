import React from 'react';
import "./MyPosts.css";
import Post from "./Post/Post";
import {addPostCreator, updateTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement = props.posts.
    map( p => <Post message={p.message} likeCounter={p.likesCount} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostCreator());
    };
    let areaChange = () => {
        let text = newPostElement.current.value;
        let action = updateTextCreator(text);
        props.dispatch(action);
    };
    return (
        <div className="posts">
            <h2>My posts</h2>
            <div className="posts-form">
                <div>
                    <textarea ref={newPostElement} onChange={areaChange} value={props.newMessage} name="" id="post-area" cols="30" rows="10" />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    );
}
export default MyPosts;