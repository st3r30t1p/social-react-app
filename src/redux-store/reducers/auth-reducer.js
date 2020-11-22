import {usersAPI} from "../../services/_usersAPI";
const SET_AUTH_DATA = 'SET-AUTH-DATA';

let initialState = {
    data: null,
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

export let setAuthData = (authData, isAuth) => ({
    type: SET_AUTH_DATA,
    authData: authData,
    isAuth
});

export const getAuthUserThunk = () => {
    return (dispatch) => {
        usersAPI.getAuthUser ()
            .then (data => {
                if (data.resultCode === 0) {
                    dispatch (setAuthData (data, true));
                }
            })
            .catch (error => {
                console.log (error);
            })
    }
};

export const loginUserThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login (email, password, rememberMe)
            .then (data => {
                console.log(data);
                if (data.resultCode === 0) {
                    dispatch (getAuthUserThunk ());
                }
            })
            .catch (error => {
                console.log (error);
            })
    }
};

export const logoutUserThunk = () => {
    return (dispatch) => {
        usersAPI.logout()
            .then (data => {
                console.log(data);
                if (data.resultCode === 0) {
                    dispatch (setAuthData (null, false));
                }
            })
            .catch (error => {
                console.log (error);
            })
    }
};