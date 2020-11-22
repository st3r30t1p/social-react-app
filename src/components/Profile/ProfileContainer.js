import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserDataThunk, updateUserStatusThunk} from "../../redux-store/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 1449;
        }
        this.props.getUserDataThunk(userId)
    }

    render() {
        return <Profile profile={this.props.profile} userStatus={this.props.userStatus} updateUserStatusThunk={this.props.updateUserStatusThunk} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profileInfo,
    authUser: state.authData.data,
    userStatus: state.profilePage.userStatus
});

export default compose (
    connect (mapStateToProps, {getUserDataThunk, updateUserStatusThunk}),
    withRouter,
    //withAuthRedirect //^
) (ProfileContainer);