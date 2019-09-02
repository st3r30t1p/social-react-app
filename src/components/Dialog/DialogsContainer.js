import React from 'react';
import {addMessage} from "../../redux-store/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from './../hoc/withAuthRediredct';
import {compose} from "redux";

const mapStateToProps = (state) => ({
    //messageText: state.dialogsPage.messageText,
    dialogs: state.dialogsPage.dialogs
});

export default compose(
    connect (mapStateToProps, {addMessage}),
    //withAuthRedirect
)(Dialogs)