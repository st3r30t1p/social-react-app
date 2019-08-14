import React from 'react';
import {addMessage, changeMessageText} from "../../redux-store/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messageText: state.dialogsPage.messageText,
    dialogs: state.dialogsPage.dialogs,
});

const DialogsContainer = connect (
    mapStateToProps,
    {
        addMessage,
        changeMessageText
    }
) (Dialogs);

export default DialogsContainer;