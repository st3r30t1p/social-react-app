import React from 'react';
import './../../styles/Dialogs.scss';
import FriendItem from "./dialog-patrs/FriendItem";
import DialogsMessage from "./dialog-patrs/DialogMessage";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsMessage = props.dialogs.map((msg, indx) => {
        return <DialogsMessage who={msg.who} message={msg.message} key={msg.id} />
    });

    const onSubmit = (values) => {
        props.addMessage(values.dialogMessage);
    };

    return (
        <div className="app-content">
            <div className="dialogs-wrapper">
                <ul className="friends-bar">
                    <FriendItem />
                </ul>
                <div className="dialogs-window">
                    <div className="messages">
                        {dialogsMessage}
                    </div>
                    <div className="dialogs-area">
                        <DialogsReduxFormMessage onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const DialogsFormMessages = (props) => {

    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field className="textarea-default" name="dialogMessage" component="textarea" placeholder="New Message" />
            <button className="btn-default">Send message</button>
        </form>
    );
};

const DialogsReduxFormMessage = reduxForm({
    form: 'dialogs-form'
})(DialogsFormMessages);

export default Dialogs;