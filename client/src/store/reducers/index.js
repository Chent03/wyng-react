import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    image: imagesReducer
})