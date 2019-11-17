import React from 'react';
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo name="Vladyslav" />
            <MyPosts posts={props.state.posts} newMessage={props.state.newPostText} dispatch={props.dispatch} />
        </div>
    );
}
export default Profile;