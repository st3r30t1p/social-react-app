import React from 'react';
import defaultUser from './../../../assets/imgs/default-user.png';
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {

    if(!props.profile) {
        return <>Empty</>
    }
    return (
        <div className="info-profile">
            <div className="avatar-profile">
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultUser} alt="p"/>
            </div>
            <div className="info">
                <div className="username">
                    {props.profile.fullName}
                </div>
                <div>
                    <ProfileStatus status={props.userStatus} />
                </div>
                <div className="block-name">
                    Profile info
                </div>
                <div className="user-info">
                    <div>Date of birth: <b>23/12/1992</b></div>
                    <div>City: <b>Las Vegas</b></div>
                    <div>Country: <b>USA</b></div>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;