import axios from 'axios';
import { FETCH_IMAGES, API_ERROR, FETCH_IMAGES_LOADING, FETCH_USER } from './types';

export const fetchImages = () => async dispatch => {
    dispatch(fetchStart())

    try {
        let res = await axios.get('/api/images')
        dispatch({type: FETCH_IMAGES, payload: res.data})
    } catch(e) {
        dispatch(fetchError())
    }
}

export const fetchStart = () => {
    return { type: FETCH_IMAGES_LOADING }
}

export const fetchError = () => {
    return { type: API_ERROR }
}

export const postVote = (id) => async (dispatch) => {
    try {
        console.log(id);
        let res = await axios.post('/api/vote', { imageId: id});
        dispatch({ type: FETCH_USER, payload: res.data })
    } catch(e) {
        console.log(e);
    }

}