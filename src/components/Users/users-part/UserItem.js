import React from 'react';
import defaultUser from './../../../assets/imgs/default-user.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../services/_usersAPI";

const UserItem = (props) => {

    const onUnsubscribeUser = () => {
        props.toggleSubscribingProgress(true, props.id);
        usersAPI.unsubscribe(props.id)
            .then(res => {
                if(res.resultStatus === 0) {
                    props.toggleSubscribingProgress(false, props.id);
                    props.userUnsubscribe(false, props.id);
                }
            })
            .catch(err => console.log(err))
    };
    const onSubscribeUser = () => {
        props.toggleSubscribingProgress(true, props.id);
        usersAPI.subscribe(props.id)
            .then(res => {
                if(res.resultStatus === 0) {
                    props.toggleSubscribingProgress(false, props.id);
                    props.userSubscribe(true, props.id);
                }
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="user-item">
            <div className="user-logo-wrap">
                <NavLink to={"profile/"+ props.id}>
                   { <img className="user-logo" src={props.photos.small ? props.photos.small : defaultUser} alt="l"/>}
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
                    <button className="btn-default" disabled={props.toggleElem.some(id => id === props.id)} onClick={onUnsubscribeUser}>Unsubscribe</button> :
                    <button className="btn-default" disabled={props.toggleElem.some(id => id === props.id)} onClick={onSubscribeUser}>Subscribe</button>
                }
            </div>
        </div>
    );
};

export default UserItem;