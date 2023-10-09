import * as types from '../actions/types';

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) { // Corrected from action.types to action.type
        case types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }    
        default:
            return state; // Just return the state without spreading it
    }
};

export default postReducer;
