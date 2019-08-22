import {usersAPI} from "../../services/_usersAPI";
const SUBSCRIBE = 'SUBSCRIBE',
      UNSUBSCRIBE = 'UNSUBSCRIBE',
      SET_USERS = 'SET-USERS',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      TOTAL_COUNT = 'TOTAL-COUNT',
      TOGGLE_SUBS_PROGRESS = 'TOGGLE-SUBS-PROGRESS';

let initialState = {
    users: [],
    totalCount: 0,
    pageCount: 5,
    currentPage: 1,
    toggleElem: [],
    isFetching: false
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SUBSCRIBE:
            return {
            ...state,
               users: [...state.users.map(user => user.id === action.userId ? {...user, followed: action.subscribe}  : user )]
            };
        case UNSUBSCRIBE:
            return {
                ...state,
                users: [...state.users.map(user => user.id === action.userId ? {...user, followed: action.unSubscribe}  : user )]
            };
        case TOGGLE_SUBS_PROGRESS:
            return {
                ...state,
                toggleElem:
                    action.isFetching ?
                        [...state.toggleElem, action.id] :
                        [...state.toggleElem.filter(id => id !== action.id)]
            };
        default :
            return state;
    }
};

export const userSubscribe = (subscribe, userId) => ({
    type: SUBSCRIBE,
    subscribe,
    userId
});
export const userUnsubscribe = (unSubscribe, userId) => ({
    type: UNSUBSCRIBE,
    unSubscribe,
    userId
});

export const setUsers = users => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalCount = totalCount => ({
    type: TOTAL_COUNT,
    totalCount
});
export const toggleSubscribingProgress = (isFetching, id) => ({
    type: TOGGLE_SUBS_PROGRESS,
    isFetching,
    id
});

export const subscribeThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleSubscribingProgress(true, id));
        usersAPI.subscribe(id)
            .then(res => {
                if(res.resultCode === 0) {
                    dispatch(toggleSubscribingProgress(false, id));
                    dispatch(userSubscribe(true, id));
                }
            })
            .catch(err => console.log(err))
    }
};

export const unsubscribeThunk = (id) => {
    return (dispatch) => {
        dispatch (toggleSubscribingProgress (true, id));
        usersAPI.unsubscribe (id)
            .then (res => {
                if (res.resultCode === 0) {
                    dispatch (toggleSubscribingProgress (false, id));
                    dispatch (userUnsubscribe (false, id));
                }
            })
            .catch (err => console.log (err))
    }
};

export const getUserThunkCreator = (currentPage, pageCount) => {
    return (dispatch) => {
        usersAPI.getUsers (currentPage, pageCount)
            .then (res => {
                dispatch(setUsers (res.items));
                dispatch(setTotalCount (res.totalCount));
            });
    }
};

export default usersReducer;