import imagesReducer from '../imagesReducer';
import { FETCH_IMAGES } from '../../actions/types';

let initState;
const mockLoad = {
    images: [
        {
            "_id": "asda",
            "title": "animal",
            "imageUrl": "asda"
        }
    ]
}

describe('Image Reducer', () => {
    beforeEach(() => {
        initState = {
            loading: false,
            errorMessage: false,
            images: []
        }
    })

    it('handles action of type FETCH_IMAGES', () => {
        const action = {
            type: FETCH_IMAGES,
            payload: mockLoad
        }
        const newState = imagesReducer(initState, action);
        expect(newState.images).toEqual(mockLoad);
    })

    it('does not handle action of unknown type', () => {
        const action = {
            type: 'fake_action',
            payload: 'fake_load'
        }

        const newState = imagesReducer(initState, action);
        expect(newState).toEqual(initState)
    })
})