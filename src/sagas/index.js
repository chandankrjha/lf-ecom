import * as actions from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'

export function* getObj(action) {
  const data =  yield fetch('https://jsonplaceholder.typicode.com/todos/' + action.id)
    .then(response => response.json())

  yield put({ type: actions.GET_OBJ_BY_ID_SUCCESS, data })
}

export default function* watchGetObject() {
  yield takeEvery(actions.GET_OBJ_BY_ID_START, getObj)
}