import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux-store/reducers/users-reducer";

const mapStateToProps = state => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;