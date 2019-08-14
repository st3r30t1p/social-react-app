import React from 'react';
import defaultUser from './../../../assets/imgs/default-user.png';

const UserItem = (props) => {
    return (
        <div className="user-item">
            <div className="user-logo-wrap">
                <img className="user-logo" src={props.userLogo ? props.userLogo : defaultUser} alt="l"/>
            </div>
            <div className="user-item-info">
                <span className="user-fullname"><b>{props.fullName}</b></span>
                <span className="user-status">{props.status}</span>
                <span className="user-location">{"props.location.city"}, {"props.location.country"}</span>
            </div>
            <div className="user-subscribe-btn">
                {
                    props.subscribe ?
                    <button className="btn-default">Unsubscribe</button> :
                    <button className="btn-default">Subscribe</button>
                }
            </div>
        </div>
    );
};

export default UserItem;