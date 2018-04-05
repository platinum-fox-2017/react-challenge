import { GETPHOTO_SUCCESS, GETPHOTO_LOADING, GETPHOTO_ERROR } from './actionType'

let initialState = {
  payload: [],
  loading: false,
  err: false
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case GETPHOTO_SUCCESS:
      return {
        ...state, 
        payload: action.payload,
        loading: false 
      }
    case GETPHOTO_LOADING:
      return {
        ...state,
        loading: true,
        err: false 
      }
    case GETPHOTO_ERROR:
      return {
        ...state,
        lading: false,
        err: true
      }
    default: 
      return state
  }
}
 
export default reducer

