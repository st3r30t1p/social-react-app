const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, message: 'Hello', who: 'friend'},
        {id: 2, message: 'How are you?', who: 'friend'},
        {id: 3, message: 'Fine', who: 'user'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            if (!action.message) {
                return state;
            }
            return {
                ...state,
                dialogs: [
                    ...state.dialogs,
                    {id: state.dialogs.slice(-1)[0].id + 1, message: action.message, who: 'user'}
                ]
            };
        default:
            return state;
    }
};

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message
});

export default dialogsReducer;