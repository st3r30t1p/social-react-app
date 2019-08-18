import React from 'react';
import './../../styles/Header.scss';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className="app-header">
            <div className="logo">
                <img
                    src="https://bcassetcdn.com/asset/logo/e33c12b4-1128-4129-b31f-2c31cb0878c7/logo?v=4&text=Logo+Text+Here"
                    alt="logo"/>
            </div>
            <div className="sign-in">
                <NavLink to="login" >Login</NavLink>
            </div>
        </header>
    );
};

export default Header;