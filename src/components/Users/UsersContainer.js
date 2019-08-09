import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = state => {
    console.log(state);
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;