import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios/index";
import {setProfileInfo} from "../../redux-store/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../services/_usersAPI";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 3;
        }
        usersAPI.getUserById(userId)
            .then (res => {
                this.props.setProfileInfo (res);
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profileInfo,
    authUser: state.authData.data
});
const ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileContainerWithRouter);

