import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios/index";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount()  {
        axios.get ('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then (res => {
                console.log(res.data);
                //this.props.setProfileInfo (res.data);
            })
    }

    render() {
        return <Header/>
    }
}

export default connect()(HeaderContainer);