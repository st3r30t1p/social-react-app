import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './reducers/profile-reducer';
import dialogsReducer from './reducers/dialogs-reducer';
import usersReducer from './reducers/users-reducer';
import {authReducer} from "./reducers/auth-reducer";
import reduxThunk from 'redux-thunk'
let reducers = combineReducers({
    authData: authReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;