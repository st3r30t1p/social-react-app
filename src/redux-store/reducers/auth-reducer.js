const SET_AUTH_DATA = 'SET-AUTH-DATA';

let initialState = {
    data: null,
    resultCode: 1,
    messages: [],
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData,
                isAuth: true
            };
        default:
            return state;
    }
};

export let setAuthData = authData => ({
    type: SET_AUTH_DATA,
    authData: authData
});