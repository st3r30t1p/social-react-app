import React from 'react';
import {NavLink} from "react-router-dom";
import './../../styles/Navbar.scss';
const Navbar = () => {
    return (
        <nav className="app-navbar">
            <ul>
                <li className="app-nav-item">
                    <NavLink to="/profile" className="app-nav-link">Profile</NavLink>
                </li>
                <li className="app-nav-item">
                    <NavLink to="/dialogs" className="app-nav-link">Dialogs</NavLink>
                </li>
                <li className="app-nav-item">
                    <NavLink to="/users" className="app-nav-link">Users</NavLink>
                </li>
                <li className="app-nav-item">
                    <NavLink to="/settings" className="app-nav-link">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;