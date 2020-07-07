import {GET_DATA, GET_DATA_SUCCESS} from "../actionTypes/index"
import axios from 'axios'

export function getDataSuccess(data) {
    return{
        type: GET_DATA_SUCCESS,
        payload: {data}
    };
}

//Saga Middleware 

// export function getData(data) {
//     return{
//         type: GET_DATA
//     }
// }



// Thunk Middleware

export function getData() {
    return function(dispatch) {
      return axios.get(`https://jsonplaceholder.typicode.com/users`)
       .then(({ data }) => {
          dispatch(getDataSuccess(data));
        });
    };
 }

