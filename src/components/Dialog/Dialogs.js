import React from 'react';
import './../../styles/Dialogs.scss';
import FriendItem from "./dialog-patrs/FriendItem";
import DialogsMessage from "./dialog-patrs/DialogMessage";

const Dialogs = (props) => {

    let dialogsMessage = props.dialogs.map((msg, indx) => {
        return <DialogsMessage who={msg.who} message={msg.message} key={msg.id} />
    });

    const onChangeMessageText = (e) => {
        let messageText = e.target.value;
        props.changeMessageText(messageText);
    };

    const onAddMessage = () => {
        props.addMessage();
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
                        <textarea className="textarea-default" value={props.messageText} onChange={onChangeMessageText}/>
                        <button className="btn-default" onClick={onAddMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;