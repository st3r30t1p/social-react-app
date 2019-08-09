const ADD_POST = 'ADD-POST';
const NEW_POST_BODY = 'ADD-NEW-POST-BODY';

const initialState = {
    posts: [
        {id: 1, body: 'Hello World'},
        {id: 2, body: 'My new choose'},
        {id: 3, body: 'How are you?'},
        {id: 4, body: 'You looking awesome'},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: state.posts.slice (-1)[0].id + 1, body: state.newPostText}
                ],
                newPostText: ''
            };

        case NEW_POST_BODY:
            return {
                ...state,
                newPostText: action.body
            };
        default:
            return state;
    }
};

export const newPostMessageCreator = () => ({
    type: ADD_POST
});

export const addNewMessageBodyCreator = (body) => ({
    type: NEW_POST_BODY,
    body: body
});

export default profileReducer;