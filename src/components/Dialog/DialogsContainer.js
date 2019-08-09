import React from 'react';
import {addMessageCreator, changeMessageCreator} from "../../redux-store/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    messageText: state.dialogsPage.messageText,
    dialogs: state.dialogsPage.dialogs,
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: () => {
        dispatch (addMessageCreator ());
    },
    changeMessageText: (messageText) => {
        dispatch (changeMessageCreator (messageText));
    }
});

const DialogsContainer = connect (
    mapStateToProps,
    mapDispatchToProps
) (Dialogs);

export default DialogsContainer;