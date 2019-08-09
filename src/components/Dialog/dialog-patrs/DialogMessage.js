import React from 'react';


const DialogsMessage = (props) => {

    let who = (props.who == 'user') ? 'user-message' : 'friend-message';

    return (
        <div>
            <div className="block-message">
                <span className={who}>
                    <span className="text-message">
                        {props.message}
                    </span>
                    <span className="date-message">11:00</span>
                </span>
            </div>
        </div>
    )
};

export default DialogsMessage;