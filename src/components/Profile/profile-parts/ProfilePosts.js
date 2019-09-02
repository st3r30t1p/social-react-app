import React from 'react';
import PostItem from "./PostItem";
import {Field, reduxForm} from "redux-form";

const ProfilePosts = (props) => {

    let postItem = props.posts.map(post => {
      return <PostItem body={post.body} key={post.id}/>
    });


    const onSubmit = (value) => {
        props.addNewPostMessage(value.postMessage);
    };

    return (
        <div className="posts-profile">
            <div className="posts-wrapper">
                <div className="block-name">
                    Posts
                </div>
                <div className="add-post">
                    <PostReduxFormMessage onSubmit={onSubmit}/>
                </div>
                <div className="posts-list">
                    {postItem}
                </div>
            </div>
        </div>
    );
};

const PostFormMessage = (props) => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field className="textarea-default" component="textarea" placeholder="New post message" name="postMessage"/>
            <button className="btn-default">Add message</button>
        </form>
    );
};

const PostReduxFormMessage = reduxForm({
    form: "postMessage"
})(PostFormMessage);

export default ProfilePosts;