import { FETCH_IMAGES, API_ERROR, FETCH_IMAGES_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    errorMessage: false,
    images: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_IMAGES_LOADING:
            return fetchImagesLoading(state);
        case FETCH_IMAGES:
            return fetchImages(state, action);
        case API_ERROR:
            return fetchImagesError(state)
        default:
            return state;
    }
}

const fetchImages = (state, action) => {
    return {
        ...state,
        images: action.payload,
        loading: false
    }
}

const fetchImagesLoading = (state) => {
    return {
        ...state,
        loading: true
    }
}

const fetchImagesError = (state) => {
    return {
        ...state,
        errorMessage: true
    }
}

export default reducer;