import React from 'react';
import './../../styles/Profile.scss';
import ProfileInfo from "./profile-parts/ProfileInfo";
import ProfilePostsContainer from "./profile-parts/ProfilePostsContainer";


const Profile = () => {

    return (
        <div className="app-content">
            <div className="profile-content">
                <ProfileInfo />
                <ProfilePostsContainer />
            </div>
        </div>
    );
};

export default Profile;