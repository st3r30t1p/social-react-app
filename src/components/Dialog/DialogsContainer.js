import React from 'react';
import {addMessage, changeMessageText} from "../../redux-store/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from './../hoc/withAuthRediredct';
const mapStateToProps = (state) => ({
    messageText: state.dialogsPage.messageText,
    dialogs: state.dialogsPage.dialogs
});

const withAuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect (
    mapStateToProps,
    {
        addMessage,
        changeMessageText
    }
) (withAuthRedirectComponent);

export default DialogsContainer;