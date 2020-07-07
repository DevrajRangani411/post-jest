import { GET_DATA_SUCCESS  } from '../actionTypes';
import getData from './getData';

describe('Posts Reducer', () => {

    it('Should return default state', () => {
        const newState = getData(undefined, {});
        expect(newState).toEqual({});
    });

    it('Should return new state if receiving type', () => {

        const users = [{ name: 'Test 1'}, { name: 'Test 2'}, { name: 'Test 3'}];
        const newState = getData(undefined, {
            type: GET_DATA_SUCCESS,
            payload: users
        });
        expect(newState).toEqual({"data": users});

    });

});