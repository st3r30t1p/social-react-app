
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET-USERS';

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
    */]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        default :
            return state;
    }
};

export const userSubscribeAC = subscribe => ({
   type: SUBSCRIBE,
   subscribe: subscribe
});
export const userUnsubscribeAC = subscribe => ({
    type: UNSUBSCRIBE,
    subscribe: subscribe
});

export const setUsersAC = users => ({
    type: SET_USERS,
    users
});

export default usersReducer;