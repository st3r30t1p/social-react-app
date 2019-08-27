import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    setCurrentPage, getUserThunkCreator, unsubscribeThunk, subscribeThunk
} from "../../redux-store/reducers/users-reducer";
import {withAuthRedirect} from "../hoc/withAuthRediredct";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageCount);
    }

    render() {
        return (
            <Users
                setCurrentPage={this.props.setCurrentPage}
                getAllUsers={this.props.getUserThunkCreator}
                totalCount={this.props.totalCount}
                pageCount={this.props.pageCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                toggleElem={this.props.toggleElem}
                unsubscribeThunk={this.props.unsubscribeThunk}
                subscribeThunk={this.props.subscribeThunk}
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
        toggleElem: state.usersPage.toggleElem
    };
};

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUserThunkCreator, unsubscribeThunk, subscribeThunk}),
    withAuthRedirect
)(UsersContainer);