import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserThunk} from "../../redux-store/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.getAuthUserThunk()
    }

    render () {
        return <Header authUser={this.props.authUser} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authData.data,
    isAuth: state.authData.isAuth
});

export default connect(mapStateToProps, {
    getAuthUserThunk
})(HeaderContainer);