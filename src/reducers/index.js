import { combineReducers } from 'redux'
import getObjs from './getObjs'

export default combineReducers({
  obj:getObjs
})