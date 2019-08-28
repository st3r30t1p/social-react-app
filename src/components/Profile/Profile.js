import React from 'react';
import './../../styles/Profile.scss';
import ProfileInfo from "./profile-parts/ProfileInfo";
import ProfilePostsContainer from "./profile-parts/ProfilePostsContainer";


const Profile = (props) => {

    return (
        <div className="app-content">
            <div className="profile-content">
                <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatusThunk={props.updateUserStatusThunk} />
                <ProfilePostsContainer />
            </div>
        </div>
    );
};

export default Profile;