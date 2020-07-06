import {GET_DATA, GET_DATA_SUCCESS} from "../actionTypes/index"

export function getDataSuccess(data) {
    return{
        type: GET_DATA_SUCCESS,
        payload: {data}
    };
}

export function getData(data) {
    return{
        type: GET_DATA
    }
}