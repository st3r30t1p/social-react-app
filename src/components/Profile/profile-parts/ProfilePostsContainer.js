import React from 'react';

import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";
import {addNewMessageBody, addNewPostMessage} from "../../../redux-store/reducers/profile-reducer";

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

const ProfilePostsContainer = connect(
    mapStateToProps,
    {
        addNewPostMessage,
        addNewMessageBody
    }
)(ProfilePosts);

export default ProfilePostsContainer;