import * as actions from '../actions/index'

const initialState = {
  inProgress: false,
  data: {}
}
export default function objects(state = initialState, action) {
  switch (action.type) {
    case actions.GET_OBJ_BY_ID_START:
      return {
        ...state,
        inProgress: true
      }
    case actions.GET_OBJ_BY_ID_SUCCESS:
    return {
        ...state,
        data: action.data,
        inProgress: false
      }
    default:
      return state
  }
}