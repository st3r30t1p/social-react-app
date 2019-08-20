import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios/index";
import Header from "./Header";
import {setAuthData} from "../../redux-store/reducers/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount () {
        fetch ('https://social-network.samuraijs.com/api/1.0/auth/me', {
            credentials: 'include'
        })
            .then (res => {
                return res.json ();
            })
            .then (data => {
                if (data.resultCode === 0) {
                    this.props.setAuthData (data);
                }
            })
            .catch (error => {
                console.log (error);
            })
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
    setAuthData
})(HeaderContainer);