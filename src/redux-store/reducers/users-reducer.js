
const SUBSCRIBE = 'SUBSCRIBE',
      UNSUBSCRIBE = 'UNSUBSCRIBE',
      SET_USERS = 'SET-USERS',
      SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
      TOTAL_COUNT = 'TOTAL-COUNT';

let initialState = {
    users: [/*
        {
            id: 1,
            fullName: 'Erik K.',
            userLogo: 'http://atozhairstyles.com/wp-content/uploads/2018/10/1-Ragnar-Lothbrok-braids.jpg',
            status: 'Life is good',
            location: {
                city: 'Los Angeles',
                country: 'US'
            },
            subscribe: true
        },
        {
            id: 2,
            fullName: 'Emilia K.',
            userLogo: 'https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/1/6/4/1302164_emiliaclarke_388672.jpg',
            status: 'I\'m so happy',
            location: {
                city: 'New York',
                country: 'US'
            },
            subscribe: false
        },
        {
            id: 3,
            fullName: 'Derek P.',
            userLogo: 'https://pbs.twimg.com/profile_images/1116917763468070914/oc861vVe_400x400.jpg',
            status: 'whatsapp guys!',
            location: {
                city: 'California',
                country: 'US'
            },
            subscribe: true
        }
    */],
    totalCount: 0,
    pageCount: 5,
    currentPage: 1
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

export default usersReducer;