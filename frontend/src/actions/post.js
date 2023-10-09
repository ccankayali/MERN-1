import * as types from './types';

export const fetchPosts = () => {
    return {
        type: types.FETCH_POSTS,
        payload: [] // from mongodb
    }
}