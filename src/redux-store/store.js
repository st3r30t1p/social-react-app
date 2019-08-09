import profileReducer from './profile-reducer';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, body: 'Hello World'},
                {id: 2, body: 'My new choose'},
                {id: 3, body: 'How are you?'},
                {id: 4, body: 'You looking awesome'},
            ],
            newPostText: ''
        },
        dialogsPage: {},
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }

};

export default store;