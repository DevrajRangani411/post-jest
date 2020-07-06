import { put, takeEvery,call, all, fork } from 'redux-saga/effects'
import {GET_DATA} from "../actionTypes/index"
import {getDataSuccess} from "../actions/index"
import {fetchData} from "../api/api"



export function* handleDataLoad() {
    try {
        const data = yield call(fetchData);
        console.log("SAGA_DATA",data)
        yield put(getDataSuccess(data));
    } catch (error) {
        console.log(error);
    }
}




function* watchGettingData() {
  yield takeEvery(GET_DATA, handleDataLoad)
}


export default function* rootSaga() {
  yield all([
    watchGettingData()
  ])
}