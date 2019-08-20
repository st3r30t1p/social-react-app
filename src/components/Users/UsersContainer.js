import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    setCurrentPage, setTotalCount, setUsers, userSubscribe,
    userUnsubscribe
} from "../../redux-store/reducers/users-reducer";

import {usersAPI} from "../../services/_usersAPI";

class UsersContainer extends React.Component {

    getAllUsers = (currentPage = this.props.currentPage) => {
        let dataResp = usersAPI.getUsers (currentPage, this.props.pageCount);
        dataResp.then (res => {
            this.props.setUsers (res.items);
            this.props.setTotalCount (res.totalCount);
        });
    };

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <Users
                setCurrentPage={this.props.setCurrentPage}
                getAllUsers={this.getAllUsers}
                totalCount={this.props.totalCount}
                pageCount={this.props.pageCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                userSubscribe={this.props.userSubscribe}
               userUnsubscribe={this.props.userUnsubscribe}
            />
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    };
};


export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    userSubscribe,
    userUnsubscribe
})(UsersContainer);