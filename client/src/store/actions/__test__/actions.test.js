import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../index';
import { FETCH_IMAGES, FETCH_IMAGES_LOADING, FETCH_USER } from '../types';

const middlewares = [reduxThunk];
const mockStore = configureMockStore(middlewares)
const mockImageData =  [
    {
        "_id": "asd123",
        "title": "animal",
        "imageUrl": "asdas"
    },
    {
        "_id": "asd12",
        "title": "dogs",
        "imageUrl": "asssdas"
    }
]
const mockUserData = {
    "googleId": "123123a",
    "voted": false
}

describe('fetchImages', () => {
    beforeEach(()=> {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('has the correct type and correct payload', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockImageData
            });
            done();
        })

        const expectedAction = [
            { type: FETCH_IMAGES_LOADING },
            { type: FETCH_IMAGES, payload: mockImageData }
        ];

        const store = mockStore({images: []})
        store.dispatch(actions.fetchImages()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})

describe('fetchUser', () => {
    beforeEach(()=> {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('has the correct type and correct payload', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockUserData
            });
            done();
        })

        const expectedAction = [
            { type: FETCH_USER, payload: mockUserData }
        ];

        const store = mockStore({loggedIn: false})
        store.dispatch(actions.fetchUser()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})
