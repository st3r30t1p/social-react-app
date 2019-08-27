import {usersAPI} from "../../services/_usersAPI";
const ADD_POST = 'ADD-POST',
      NEW_POST_BODY = 'ADD-NEW-POST-BODY',
      SET_PROFILE_INFO = 'SET-PROFILE-INFO',
      SET_USER_STATUS = 'SET-USER-STATUS';

const initialState = {
    posts: [
        {id: 1, body: 'Hello World'},
        {id: 2, body: 'My new choose'},
        {id: 3, body: 'How are you?'},
        {id: 4, body: 'You looking awesome'},
    ],
    newPostText: '',
    profileInfo: null,
    userStatus: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.length === 0) {
                return state;
            }
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
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: {...action.profileInfo}
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            };
        default:
            return state;
    }
};

export const addNewPostMessage = () => ({
    type: ADD_POST
});

export const addNewMessageBody = (body) => ({
    type: NEW_POST_BODY,
    body
});

export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
    profileInfo
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});
export const getUserDataThunk = (userID) => {
    return (dispatch) => {
        usersAPI.getUserById(userID)
            .then (res => {
                dispatch(setProfileInfo (res));
                usersAPI.getUserStatus(userID)
                    .then(res => {
                    dispatch(setUserStatus(res))
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
};

export default profileReducer;