import React from 'react';

import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";
import {addNewMessageBodyCreator, newPostMessageCreator} from "../../../redux-store/reducers/profile-reducer";

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

const mapDispatchToProps = dispatch => ({
    changePostText: (postTextValue) => {
        dispatch (addNewMessageBodyCreator (postTextValue));
    },
    addNewPost: () => {
        dispatch (newPostMessageCreator ());
    }
});

const ProfilePostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePosts);

export default ProfilePostsContainer;