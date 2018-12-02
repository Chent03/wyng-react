import { FETCH_USER } from '../../actions/types';
import authReducer from '../authReducer';

let initState;
const mockLoad = {
    loggedIn: true,
    voted: false
}

describe('Auth Reducer', () => {
    beforeEach(() => {
        initState = {
            loggedIn: false,
            voted: false
        }
    })

    it('handles action of type FETCH_USER', () => {
        const action = {
            type: FETCH_USER,
            payload: mockLoad
        }
        const newState = authReducer(initState, action);
        expect(newState.loggedIn).toEqual(mockLoad);
        expect(newState.voted).toEqual(mockLoad.voted);
    })

    it('does not handle action of unknown type', () => {
        const action = {
            type: 'fake_action',
            payload: 'fake_load'
        }

        const newState = authReducer(initState, action);
        expect(newState).toEqual(initState)
    })
})