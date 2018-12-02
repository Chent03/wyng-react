import { FETCH_USER } from '../actions/types';

const initialState = {
    loggedIn: false,
    voted: false
}

export default function(state = initialState, action) {        
    switch(action.type) {
        case FETCH_USER: 
            return fetchUser(state, action);
        default:
            return state;
    }
}

const fetchUser = (state, action) => {
    return {
        ...state,
        loggedIn: action.payload,
        voted: action.payload.voted
    }
}