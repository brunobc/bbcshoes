import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import roorReducer from './modules/rootReducer'
import roorSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

/*
  compose: merge configurations
*/

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const store = createStore(roorReducer, enhancer)

sagaMiddleware.run(roorSaga)

export default store
