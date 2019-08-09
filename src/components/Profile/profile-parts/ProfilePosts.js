import React from 'react';
import PostItem from "./PostItem";

const ProfilePosts = (props) => {
    let postTextValue = props.newPostText;

    let postItem = props.posts.map(post => {
      return <PostItem body={post.body} key={post.id}/>
    });

    const onAddNewPost = () => {
        props.addNewPost();
    };

    const onChangePostText = (e) => {
        postTextValue = e.target.value;
        props.changePostText(postTextValue);
    };

    return (
        <div className="posts-profile">
            <div className="posts-wrapper">
                <div className="block-name">
                    Posts
                </div>
                <div className="add-post">
                    <textarea className="textarea-default" value={postTextValue} onChange={onChangePostText} placeholder="New post message"/>
                    <button className="btn-default" onClick={onAddNewPost}>Add Post</button>
                </div>
                <div className="posts-list">
                    {postItem}
                </div>
            </div>
        </div>
    );
};

export default ProfilePosts;