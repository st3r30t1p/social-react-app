import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserDataThunk} from "../../redux-store/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRediredct";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 3;
        }
        this.props.getUserDataThunk(userId)
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profileInfo,
    authUser: state.authData.data
});

const withAuthRedirectComponent = withAuthRedirect(ProfileContainer);
const ProfileContainerWithRouter = withRouter(withAuthRedirectComponent);
export default connect(mapStateToProps, {
    getUserDataThunk
})(ProfileContainerWithRouter);

