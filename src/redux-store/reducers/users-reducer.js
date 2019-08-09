
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';


let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {



    return state;
};

const userSubscribeAC = subscribe => ({
   type: SUBSCRIBE,
   subscribe: subscribe
});
const userUnsubscribeAC = subscribe => ({
    type: UNSUBSCRIBE,
    subscribe: subscribe
});

export default usersReducer;