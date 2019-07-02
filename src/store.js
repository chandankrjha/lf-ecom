import { createStore, applyMiddleware  } from 'redux'
import reducer from './reducers/index'
import watchGetObject from './sagas/index'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchGetObject)

export default store;