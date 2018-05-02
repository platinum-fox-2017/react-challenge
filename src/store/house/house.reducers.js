import {
  LOAD_HOUSE_OK,
  LOAD_HOUSE_PENDING,
  LOAD_HOUSE_ERR
} from './house.actionTypes'

const initialState = {
  loading: false,
  error: false,
  data: {}
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOUSE_PENDING:
      return {
        ...state,
        loading: true
      }
    case LOAD_HOUSE_OK:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case LOAD_HOUSE_ERR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default reducers