import React from 'react';

import {NavLink} from "react-router-dom";

const FriendItem = () => {
    return (
        <li className="friend-item">
            <NavLink to="/dialogs/1" className="dialog-link">
                <img src="http://animalworld.com.ua/images/2011/July/Foto/Monkey/Monkey_3.jpg" alt=""/>
                <div className="friend-name">Alex</div>
            </NavLink>
        </li>
    );
};

export default FriendItem;