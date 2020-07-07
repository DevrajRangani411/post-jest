import moxios from 'moxios';
import { getData } from '../actions';

import { applyMiddleware, createStore } from 'redux';
import {rootReducer} from '../reducers';
import { middleware } from '../store';

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = {"data": [{"name": "Test 1"}, {"name": "Test 2"}, {"name":"Test 3"}]}

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(getData())
        .then(() => {
            const newState = store.getState();
            expect(newState.getDataReducer.data.data).toBe(expectedState);
        })
        
    });

});