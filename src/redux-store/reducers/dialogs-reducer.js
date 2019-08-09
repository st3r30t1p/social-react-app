const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, message: 'Hello', who: 'friend'},
        {id: 2, message: 'How are you?', who: 'friend'},
        {id: 3, message: 'Fine', who: 'user'}
    ],
    messageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogs: [
                    ...state.dialogs,
                    {id: state.dialogs.slice(-1)[0].id + 1, message: state.messageText, who: 'user'}
                ],
                messageText: ''
            };
        case CHANGE_MESSAGE:
            return {
                ...state,
                messageText: action.messageText
            };
        default:
            return state;
    }
};

export const addMessageCreator = () => ({
    type: ADD_MESSAGE,
});

export const changeMessageCreator = (messageText) => ({
    type: CHANGE_MESSAGE,
    messageText: messageText
});

export default dialogsReducer;