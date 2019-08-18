import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios/index";
import {setProfileInfo} from "../../redux-store/reducers/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 8;
        }
        axios.get (`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then (res => {
                this.props.setProfileInfo (res.data);
            })
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profileInfo
});
const ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileContainerWithRouter);

