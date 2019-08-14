import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPage, setTotalCount, setUsers} from "../../redux-store/reducers/users-reducer";
import * as axios from 'axios';

class UsersContainer extends React.Component {

    getUsers = (currentPage = this.props.currentPage) => {
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageCount}`)
            .then (res => {
                this.props.setUsers (res.data.items);
                this.props.setTotalCount(res.data.totalCount);
            })
    };

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <Users
                setCurrentPage={this.props.setCurrentPage}
                getUsers={this.getUsers}
                totalCount={this.props.totalCount}
                pageCount={this.props.pageCount}
                currentPage={this.props.currentPage}
                users={this.props.users}

            />
        );
    }
}
const mapStateToProps = state => {
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
    setTotalCount
})(UsersContainer);