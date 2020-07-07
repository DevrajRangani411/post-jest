import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer}  from "../reducers/index"
import thunk from 'redux-thunk'

import rootSaga  from '../saga/index'

const sagaMiddleware = createSagaMiddleware()

export const middleware=[sagaMiddleware,thunk];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})
