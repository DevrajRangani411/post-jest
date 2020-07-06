import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer}  from "../reducers/index"

import rootSaga  from '../saga/index'

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})
