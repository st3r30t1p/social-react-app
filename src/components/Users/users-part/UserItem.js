import React from 'react';
import defaultUser from './../../../assets/imgs/default-user.png';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

    return (
        <div className="user-item">
            <div className="user-logo-wrap">
                <NavLink to={"profile/"+ props.id}>
                    <img className="user-logo" src={props.photos.small ? props.photos.small : defaultUser} alt="l"/>
                </NavLink>
            </div>
            <div className="user-item-info">
                <span className="user-fullname"><b>{props.name}</b></span>
                <span className="user-status">{props.status}</span>
                <span className="user-location">{"props.location.city"}, {"props.location.country"}</span>
            </div>
            <div className="user-subscribe-btn">
                {
                    props.followed ?
                    <button className="btn-default">Unsubscribe</button> :
                    <button className="btn-default">Subscribe</button>
                }
            </div>
        </div>
    );
};

export default UserItem;