import React from 'react';

import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";
import {addNewMessageBody, addNewPostMessage} from "../../../redux-store/reducers/profile-reducer";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

export default compose(
    connect(mapStateToProps, {addNewPostMessage, addNewMessageBody})
)(ProfilePosts)