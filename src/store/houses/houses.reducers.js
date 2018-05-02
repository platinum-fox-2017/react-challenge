import {
  LOAD_HOUSES_LOADING,
  LOAD_HOUSES_OK,
  LOAD_HOUSES_ERR
} from './houses.actionTypes'

const initialState = {
  loading: false,
  error: false,
  datas: []
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOUSES_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOAD_HOUSES_OK:
      return {
        ...state,
        datas: action.payload.data,
        loading: false
      }
    case LOAD_HOUSES_ERR:
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